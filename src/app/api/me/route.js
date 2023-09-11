import { NextResponse } from "next/server";

export const GET = async () => {
  return NextResponse.json({
    ok: true,
    fullName: "Watunyoo Phanapaisarnaskul",
    studentId: "650610804",
  });
};
