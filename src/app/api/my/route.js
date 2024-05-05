// export async function GET(request) {
//     return new Response('Hello API Route')
// }

import { NextResponse } from "next/server"

export const GET = (request) => {
    return NextResponse.json({name:"Farzeen", age:23, department:"CS"})
}