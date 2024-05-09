import { employee } from "@/db/db";
import { NextResponse } from "next/server";

export const GET = (req, value) => {
    // console.log(value.params.empid)
    // const data = employee;
    const empData = employee.filter((item) => item.employeeId == value.params.empid)
    let result = empData.length == 0 ? {result: 'No Employee Found'} : {result: empData}
    return NextResponse.json(result)
}

export const DELETE = (req, value) => {
    let employeeId = value.params.empid;
    if (employeeId) {
        return NextResponse.json({result: "Employee Info Deleted Successfully"}, {status: 200})
    }
    else {
        return NextResponse.json({result: "Employee Not Found"}, {status: 404})
    }
}