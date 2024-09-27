import { data } from "@/assets/data/data";
import { NextResponse } from "next/server";

export async function GET() {
  return NextResponse.json(data);
}
