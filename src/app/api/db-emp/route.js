import { connectionString } from "@/lib/database/db_connection"
import { Employee } from "@/lib/database/model/employee"
import mongoose from "mongoose"
import { NextResponse } from "next/server"

export const GET = async () => {
    await mongoose.connect(connectionString)
    const empData = await Employee.find();

    // return NextResponse.json({result: "Success"})
    return NextResponse.json({result: empData, success:true})
}

export const POST = async (req) => {
    const payload = await req.json();
    await mongoose.connect(connectionString);
    // const employeeData = new Employee({
    //     name:'Huzaifa',
    //     salary:'60k',
    //     department:'IT'
    // })
    const employeeData = new Employee(payload)
    const response = await employeeData.save();
    return NextResponse.json({result: response, success:true})
}