// GET - Getting data
// POST - Creating data
// PUT - Updating data
// Delete - Deleting data

import { NextRequest, NextResponse } from "next/server";

export function GET(request: NextRequest) {
  // fetch users from db

  // In this function we are not using request and we can remove it. But if we remove request from params next js will cache data and next time we hit this end point next js will show cache data. To prevent caching we have to add {request: NextRequest} object

  //   return NextResponse.json("Hello");
  return NextResponse.json([
    { id: 1, name: "Usman" },
    { id: 2, name: "Ahmed" },
  ]);
}

export async function POST(request: NextRequest) {
  const body = await request.json();
  //   in real time
  // validate data
  if (!body.name)
    return NextResponse.json({ error: "Name is required" }, { status: 400 });
  // if invalid, return 400
  // else return
  return NextResponse.json({ id: 1, name: body.name }, { status: 201 });
  //   201 means object is created
}
