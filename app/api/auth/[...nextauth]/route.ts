import NextAuth from "next-auth/next";
import GoogleProvider from "next-auth/providers/google";
import CredentialsProvider from "next-auth/providers/credentials";
import { custom } from "openid-client";
import { PrismaAdapter } from "@next-auth/prisma-adapter";
import prisma from "@/prisma/client";
import { NextAuthOptions } from "next-auth";
import bcrypt from "bcrypt";

export const authOptions: NextAuthOptions = {
  adapter: PrismaAdapter(prisma),
  providers: [
    CredentialsProvider({
      name: "Credentials",
      credentials: {
        email: { label: "Email", type: "email", placeholder: "Email" },
        password: {
          label: "Password",
          type: "password",
          placeholder: "password",
        },
      },
      async authorize(credentials, req) {
        if (!credentials?.email || !credentials?.password) return null;

        const user = await prisma.user.findUnique({
          where: { email: credentials.email },
        });
        if (!user) return null;

        const passwordsMatch = await bcrypt.compare(
          credentials.password,
          user.hashedPassword!,
        );

        return passwordsMatch ? user : null;
      },
    }),
    GoogleProvider({
      // typescript doesn't know the value of clientId is string or undefined so by putting ! exclamanation mark at the end we are telling ts that we have value stored and is definitely available
      clientId: process.env.GOOGLE_CLIENT_ID!,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET!,
    }),
  ],
  session: {
    strategy: "jwt",
  },
};

// Follow videos for setting up with google OAuth
// we call next auth and get a handler function
const handler = NextAuth(authOptions);

// If connection is slow and we are logging in with google we get error
// https://next-auth.js.org/errors#oauth_callback_error outgoing request timed out after 3500ms
// Default timeout setting is 3500ms. To increase default timeout we have to set below option
custom.setHttpOptionsDefaults({
  timeout: 5000,
});

// In these route files we have to export functions like GET POST etc
// we are exporting handler function with 2 different names GET and POST. So any GET or POST request send to this end point will be handled inside above handler function
// We are letting next auth expose bunch of end points that start with /auth
export { handler as GET, handler as POST };
