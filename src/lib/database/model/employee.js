import mongoose from "mongoose";

const employeeModel = new mongoose.Schema({
    name:String,
    salary:String,
    department:String
})

export const Employee = mongoose.models.employees || mongoose.model('employees', employeeModel)