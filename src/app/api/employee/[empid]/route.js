import { employee } from "@/db/db";
import { NextResponse } from "next/server";

export const GET = (req, value) => {
    // console.log(value.params.empid)
    // const data = employee;
    const empData = employee.filter((item) => item.employeeId == value.params.empid)
    let result = empData.length == 0 ? {result: 'No Employee Found'} : {result: empData}
    return NextResponse.json(result)
}