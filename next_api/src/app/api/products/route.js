// import { connectionString } from "@/lib/db";
// import mongoose from "mongoose";
// import { NextResponse } from "next/server";

// export async function GET() {

//    await mongoose.connect(connectionString)

//   return NextResponse.json({ result: true });
// }

import { connectDB } from "@/lib/db";
import { NextResponse } from "next/server";
import { Product } from "@/lib/model/product";
import mongoose from "mongoose";

// GET API
export async function GET() {
  let data;
  try {
    await connectDB();
    data = await Product.find();
  } catch (error) {
    data = { success: false, message: error.message };
  }
  return NextResponse.json({ result: data, success: true });
}

// POST API
export async function POST(request) {
  const payload = await request.json();
  await connectDB();
  let newProduct = new Product(payload);
  const result = await newProduct.save();
  return NextResponse.json({ result, success: true });
}
