// name correctly next js will look for this file

import { NextRequest, NextResponse } from "next/server";
export { default } from "next-auth/middleware";

// below we are importing and exporting middleware. there is a shorter way to do this shown above
// import middleware from "next-auth/middleware";

// export default middleware;

// With next-auth middleware we can redirect user to login page. So we don't need middleware define below atm
// export function middleware(request: NextRequest) {
//   // request.url will give localhost:3000
//   return NextResponse.redirect(new URL("/new-page", request.url));
// }

// Most of time we want middleware to run on certain paths not on every page

export const config = {
  // in matcher we define which paths middleware should be executed
  // * means zero or more parameters
  // + means one or more
  // ? means zero or one
  matcher: ["/dashboard/:path*"],
  // with next-auth middlware if we hit /users we will be redirected to login page
};
