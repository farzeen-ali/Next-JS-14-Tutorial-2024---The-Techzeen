import { connectionString } from "@/lib/database/db_connection"
import { Employee } from "@/lib/database/model/employee"
import mongoose from "mongoose"
import { NextResponse } from "next/server"

export const GET = async () => {
    await mongoose.connect(connectionString)
    const empData = await Employee.find();

    // return NextResponse.json({result: "Success"})
    return NextResponse.json({result: empData})
}