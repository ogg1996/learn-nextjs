import { data } from "@/assets/data/data";
import { NextResponse } from "next/server";

export async function GET(req, { params }) {
  const { id } = params;
  const animals = data.find((animal) => animal.id === Number(id));

  if (animals) {
    return NextResponse.json(animals);
  } else {
    return NextResponse.json({ error: "no data" });
  }
}
