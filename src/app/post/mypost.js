"use client";
const MyPost = ({data}) => {
  return (
    <>
     {/* <button onClick={() => alert("Hello")}>Click Me</button> */}
     <button onClick={() => alert(data)}>Click Me</button>
    </>
  );
}

export default MyPost;
