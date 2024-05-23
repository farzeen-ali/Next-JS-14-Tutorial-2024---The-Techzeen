'use client';

import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";

const UpdateEmployee = (props) => {
    const router = useRouter();
    const [name, setName] = useState('');
    const [salary, setSalary] = useState('');
    const [department, setDepartment] = useState('');
    // console.log(props.params.update)
    let id = props.params.update;
    useEffect(() => {
        const employeeDetails = async () => {
            let data = await fetch(`http://localhost:3000/api/db-emp/${id}`)
            data = await data.json();
            // console.log(data)
            if(data.success){
                let response = data.result;
                setName(response.name)
                setSalary(response.salary)
                setDepartment(response.department)
            }
        }
        employeeDetails();
    },[id])
    const updateRecord = async () => {
      let data = await fetch(`http://localhost:3000/api/db-emp/${id}`, {
        method: 'PUT',
        body: JSON.stringify({name, salary, department})
      })
      data = await data.json();
      if (data.success){
        alert('Record Updated Successfully')
        router.push('/mongo-get-emp')
      }
      else{
        alert('Try Again')
      }
    } 
  return (
    <>
     <h2>Update Employee</h2>
     <input type="text" value={name} onChange={(e) => setName(e.target.value)} placeholder="Enter Employee Name" /><br /><br />
     <input type="text" value={salary} onChange={(e) => setSalary(e.target.value)} placeholder="Enter Employee Salary" /><br /><br />
     <input type="text" value={department} onChange={(e) => setDepartment(e.target.value)} placeholder="Enter Employee Department" /><br /><br />
     <button onClick={updateRecord}>Update</button>
    </>
  );
}

export default UpdateEmployee;
