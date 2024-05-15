import { NextResponse } from "next/server"

export const GET = async (req, value) => {
    // console.log(value.params.all) 
    const details = value.params.all
    // return NextResponse.json({result: "Success"})
    return NextResponse.json({result: details})
}