import { connectionString } from "@/lib/database/db_connection";
import { Employee } from "@/lib/database/model/employee";
import mongoose, { mongo } from "mongoose";
import { NextResponse } from "next/server";

export const PUT = async (req, value) => {
    // for id
    const empID = value.params.empid;
    const id = {_id:empID};
    // console.log(id)
    //For Data
    const payload = await req.json();
    // console.log(payload)
    //For Mongo DB 
    await mongoose.connect(connectionString);
    //getting result
    const result = await Employee.findOneAndUpdate(id,payload)
    return NextResponse.json({result, success: true})
}

export const GET = async (req, value) => {
    // for id
    const empID = value.params.empid;
    const id = {_id:empID};
    //For Mongo DB 
    await mongoose.connect(connectionString);
    //getting result
    const result = await Employee.findById(id)
    return NextResponse.json({result, success: true})
}

export const DELETE = async (req, value) => {
    const empID = value.params.empid;
    const id = {_id:empID};
    await mongoose.connect(connectionString);
    const result = await Employee.deleteOne(id);
    return NextResponse.json({result,success: true})
}