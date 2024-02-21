import { NextRequest, NextResponse } from "next/server";
import schema from "../schema";

// type Props = {
//   params: { id: number };
// };

// if we destructure props and define type while destructuring, we don't need to define type of Props above

export function GET(
  request: NextRequest,
  { params }: { params: { id: number } },
) {
  // Fetch data from database
  // if not found, return 404 error
  if (params.id > 10)
    return NextResponse.json({ error: "User not found" }, { status: 404 });
  // Else return data
  return NextResponse.json({ id: 1, name: "Usman" });
}

// PUT vs PATCH
// PUT is used to replace objects
// PATCH is used to update one or more properties of object

export async function PUT(
  request: NextRequest,
  { params }: { params: { id: number } },
) {
  //  validate request body
  const body = await request.json();
  const validation = schema.safeParse(body);
  if (!validation.success)
    // if invalid, return 400
    return NextResponse.json(validation.error.errors, { status: 400 });
  // fetch user with given id
  // if user does not exit return 404
  if (params.id > 10)
    return NextResponse.json({ error: "User not found" }, { status: 404 });

  // else update the user
  // return the updated user
  return NextResponse.json({ id: 1, name: body.name });
}

export function DELETE(
  request: NextRequest,
  { params }: { params: { id: number } },
) {
  // Fetch user from db
  // if not found, return 404
  if (params.id > 10)
    return NextResponse.json({ error: "User not found" }, { status: 404 });
  // Delete user
  // return 200
  return NextResponse.json({});
}
