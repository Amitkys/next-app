import { PrismaClient } from "@prisma/client";
import { NextRequest, NextResponse } from "next/server";
 
const client = new PrismaClient();

export async function GET() {
  return Response.json({
    name: 'amit'
  })
}
export async function POST(req:NextRequest) {
  const body = await req.json();
  await client.user.create({
    data: {
      username: body.username,
      password: body.password,
      firstName: body.firstName,
      lastName: body.lastName
    }
  })
  return  NextResponse.json({message: 'data is inserted', body});
}