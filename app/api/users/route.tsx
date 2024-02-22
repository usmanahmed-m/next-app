// GET - Getting data
// POST - Creating data
// PUT - Updating data
// Delete - Deleting data

import { NextRequest, NextResponse } from "next/server";
import schema from "./schema";
import prisma from "@/prisma/client";

export async function GET(request: NextRequest) {
  // If we remove request from params next js will cache data and next time we hit this end point next js will show cache data. To prevent caching we have to add {request: NextRequest} object
  const users = await prisma.user.findMany();
  return NextResponse.json(users);
}

export async function POST(request: NextRequest) {
  const body = await request.json();
  //   in real time
  // validate data
  const validation = schema.safeParse(body);
  if (!validation.success)
    return NextResponse.json(validation.error.errors, { status: 400 });
  const user = await prisma.user.findUnique({ where: { email: body.email } });
  if (user)
    return NextResponse.json({ error: "User already exist" }, { status: 400 });
  const newUser = await prisma.user.create({
    data: {
      name: body.name,
      email: body.email,
    },
  });
  return NextResponse.json(newUser);
  //   201 means object is created
}
