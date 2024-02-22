import { NextRequest, NextResponse } from "next/server";
import schema from "../schema";
import prisma from "@/prisma/client";

// type Props = {
//   params: { id: number };
// };

// if we destructure props and define type while destructuring, we don't need to define type of Props above

export async function GET(
  request: NextRequest,
  { params }: { params: { id: string } },
) {
  // Fetch data from database
  const user = await prisma.user.findUnique({
    where: { id: parseInt(params.id) },
  });
  // if not found, return 404 error
  if (!user)
    return NextResponse.json({ error: "User not found" }, { status: 404 });
  // Else return data
  return NextResponse.json(user);
}

// PUT vs PATCH
// PUT is used to replace objects
// PATCH is used to update one or more properties of object

export async function PUT(
  request: NextRequest,
  { params }: { params: { id: string } },
) {
  //  validate request body
  const body = await request.json();
  const validation = schema.safeParse(body);
  if (!validation.success)
    // if invalid, return 400
    return NextResponse.json(validation.error.errors, { status: 400 });
  // fetch user with given id
  const user = await prisma.user.findUnique({
    where: { id: parseInt(params.id) },
  });
  // if user does not exit return 404
  if (!user)
    return NextResponse.json({ error: "User not found" }, { status: 404 });
  // else update the user
  const updatedUser = await prisma.user.update({
    where: { id: user.id },
    data: { name: body.name, email: body.email },
  });
  // return the updated user
  return NextResponse.json(updatedUser);
}

export async function DELETE(
  request: NextRequest,
  { params }: { params: { id: string } },
) {
  // Fetch user from db
  const user = await prisma.user.findUnique({
    where: { id: parseInt(params.id) },
  });
  // if not found, return 404
  if (!user)
    return NextResponse.json({ error: "User not found" }, { status: 404 });
  // Delete user
  await prisma.user.delete({ where: { id: user.id } });
  // return 200
  return NextResponse.json({});
}
