'use client';

import { useState } from "react";

const AddEmployee = () => {
    const [name, setName] = useState('');
    const [salary, setSalary] = useState('');
    const [department, setDepartment] = useState('');

    const handleAddEmployee = async () => {
        // console.log(name,salary,department)
        let data = await fetch('http://localhost:3000/api/db-emp', {
            method:"POST",
            body:JSON.stringify({name,salary,department})
        })
        data = await data.json();
        if (data.success){
            alert("Employee Added Successfully")
            setName('');
            setSalary('');
            setDepartment('');
        }
        else{
            alert("Try Again!!!")
        }
    }
  return (
    <>
     <h2>Add Employee | Mongo DB With POST API in Next JS</h2>
     <input type="text" value={name} onChange={(e) => setName(e.target.value)} placeholder="Enter Employee Name" /><br /><br />
     <input type="text" value={salary} onChange={(e) => setSalary(e.target.value)} placeholder="Enter Employee Salary" /><br /><br />
     <input type="text" value={department} onChange={(e) => setDepartment(e.target.value)} placeholder="Enter Employee Department" /><br /><br />
     <button onClick={handleAddEmployee}>Submit</button>
    </>
  );
}

export default AddEmployee;
