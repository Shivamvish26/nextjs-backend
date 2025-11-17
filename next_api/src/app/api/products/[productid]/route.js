import { connectDB } from "@/lib/db";
import { Product } from "@/lib/model/product";
import { NextResponse } from "next/server";

// Update product API
export async function PUT(request, content) {
  const params = await content.params;
  const productId = params.productid;
  const filter = { _id: productId };
  const payload = await request.json();
  console.log(payload);
  await connectDB();
  const result = await Product.findOneAndUpdate(filter, payload, { new: true });
  return NextResponse.json({ result: result, success: true });
}

// GET PRODUCT BY ID API
export async function GET(request, content) {
  const params = await content.params;
  const productId = params.productid;
  const record = { _id: productId };
  await connectDB();
  const result = await Product.findById(record);
  return NextResponse.json({ result: result, success: true });
}

// Delete Product Api
export async function DELETE(reuest, content) {
  const params = await content.params;
  const productId = params.productid;
  const record = { _id: productId };
  await connectDB();
  const result = await Product.deleteOne(record);
  return NextResponse.json({ result: result, success: true });
}
