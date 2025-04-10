import { NextApiResponse } from "next";
import { NextRequest } from "next/server";

export async function POST(request: NextRequest, response: NextApiResponse) {
  const body = await request.json()

  console.log(body)

  return response.json({
    message: "Dados recebidos com sucesso",
  })
}