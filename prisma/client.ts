//  To work with db we have to create prisma client
// Whenever we create migration, prisma client will also be updated
// we can create this client anywhere but it's best to create prisma client 1 time and export it.
// By using a single client results will be cached and reused for better performance

// import { PrismaClient } from "@prisma/client";
// const prisma = new PrismaClient();
// export default prisma;
// commented above code for below issue

// next js fast refresh creates new client everytime we change code in development and shows error too many prisma client. to overcome this issue we check prisma documentation and solution to this is provided under.
// Ref: Link: https://www.prisma.io/docs/orm/more/help-and-troubleshooting/help-articles/nextjs-prisma-client-dev-practices

import { PrismaClient } from "@prisma/client";

const prismaClientSingleton = () => {
  return new PrismaClient();
};

declare global {
  var prisma: undefined | ReturnType<typeof prismaClientSingleton>;
}

const prisma = globalThis.prisma ?? prismaClientSingleton();

export default prisma;

if (process.env.NODE_ENV !== "production") globalThis.prisma = prisma;
