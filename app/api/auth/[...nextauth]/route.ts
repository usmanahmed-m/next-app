import NextAuth from "next-auth/next";
import GoogleProvider from "next-auth/providers/google";
import { custom } from "openid-client";

export const authOptions = {
  providers: [
    GoogleProvider({
      // typescript doesn't know the value of clientId is string or undefined so by putting ! exclamanation mark at the end we are telling ts that we have value stored and is definitely available
      clientId: process.env.GOOGLE_CLIENT_ID!,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET!,
    }),
  ],
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
