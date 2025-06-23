import { generateMD5Signature } from "@/utils/generate-md5";
import axios from "axios";
import { NextRequest, NextResponse } from "next/server";

export async function GET(request: NextRequest) {
    const api = process.env.NEXT_PUBLIC_DIGI_API
    const signature = generateMD5Signature(process.env.NEXT_PUBLIC_USERNAME! + process.env.NEXT_PUBLIC_DIGI_API_KEY! + "pricelist")
    console.log({signature});
    const response = await axios.post(`${api}/price-list`, {
        "cmd" : "pre-paid",
        "username" : process.env.NEXT_PUBLIC_USERNAME,
        "sign" : signature
    })
    console.log({response : response.data});
    return NextResponse.json({data : response.data?.data || {}})
}
