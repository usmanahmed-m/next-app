// Don't create this folder in real time project. just for learning purpose

import { getToken } from "next-auth/jwt";
import { NextRequest, NextResponse } from "next/server";

export async function GET(request: NextRequest) {
  const token = await getToken({ req: request });
  return NextResponse.json(token);
}

// we will get below info when hitting /api/auth/token

// {
//     "name": "Usman Ahmed",
//     "email": "xusmanmalik88@gmail.com",
//     "picture": "https://lh3.googleusercontent.com/a/ACg8ocKb_HZf0RaM33eHL5Q1HBba5JC8MRc7JeFClxHtqc5t=s96-c",
//     "sub": "103818666699714422113",
//     "iat": 1708786731,
//     "exp": 1711378731,
//     "jti": "3c581d9b-f7f3-4ba3-aedc-cf856a019fdb"
// }

// By default token are valid for 30days
