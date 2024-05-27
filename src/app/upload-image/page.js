'use client';

import { useState } from "react";

const UploadImage = () => {
    const [file, setFile] = useState();
    const handleSubmit = async (e) => {
        e.preventDefault();
        // console.log(file)
        if(!file) {
            alert('Please Select a File');
            return;
        }
        const data = new FormData();
        data.append('file', file);
        try {
            let result = await fetch('/api/upload-image', {
                method: "POST",
                body: data
            })
            result = await result.json();
            if(result.success) {
                alert("Successfully Uploaded!!")
            }
            else {
                alert("Failed!!")
            }
        }
        catch(error) {
            console.log(error)
            alert("Failed!!")
        }
    }
  return (
    <>
     <h2>Upload Image in Next JS</h2>
     <form onSubmit={handleSubmit}>
        <input type='file' name='file' onChange={(e) => setFile(e.target.files?.[0])} /><br /><br />
        <button type='submit'>Upload</button>
     </form>
    </>
  );
}

export default UploadImage;