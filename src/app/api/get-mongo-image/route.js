import { connectionString } from "@/lib/database/db_connection"
import { Image } from "@/lib/database/model/image"
import mongoose from "mongoose"
import { NextResponse } from "next/server"


export const GET = async () => {
    try {
        await mongoose.connect(connectionString)

        const images = await Image.find().select('name data contentType')
        return NextResponse.json({success:true, images})
    }
    catch(error){
        NextResponse.json({success:false, error: "Failed"})
    }
}