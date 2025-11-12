import { connectionString } from "@/lib/db";
import mongoose from "mongoose";
import { NextResponse } from "next/server";

export async function GET() {

   await mongoose.connect(connectionString)

  return NextResponse.json({ result: true });
}
