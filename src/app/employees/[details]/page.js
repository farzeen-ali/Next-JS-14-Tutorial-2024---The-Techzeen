"use client";
const Employees = ({ params }) => {
    // console.log(params)
  return (
    <>
     <h2>Employee Details</h2>
    <h3>Employee Name: {params.details} </h3>   
    </>
  );
}

export default Employees;
