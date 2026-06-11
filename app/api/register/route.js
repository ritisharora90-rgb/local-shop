import { NextResponse } from "next/server";
import bcrypt from "bcryptjs";
import { connectDB } from "@/lib/mongodb";
import User from "@/models/User";

export async function POST(request) {
  await connectDB();
  const { name, email, password, role } = await request.json();
  const existing = await User.findOne({ email });
  if (existing) return NextResponse.json({ error: "Email already exists" }, { status: 400 });
  const hashedPassword = await bcrypt.hash(password, 10);
  await User.create({ name, email, password: hashedPassword, role: role || "customer" });
  return NextResponse.json({ message: "User created" }, { status: 201 });
}