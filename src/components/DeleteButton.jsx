'use client';
const DeleteButton = ({id}) => {
    // console.log(id)
    const deleteEmployee = async () => {
        let data = await fetch(`http://localhost:3000/api/employee/${id}`, {
            method: "DELETE"
        })
        data = await data.json();
        if (data.success){
            alert("Employee Deleted")
        }
        else {
            alert("Failed")
        }
    }
  return (
    <>
     <button onClick={deleteEmployee}>Delete</button> 
    </>
  );
}

export default DeleteButton;
