'use client';

import { useState } from "react";

const UploadMongoImage = () => {
    const handleSubmit = async (e) => {
        e.preventDefault();

        if(!file) {
            alert('Please select a File');
            return;
        }
        const data = new FormData();
        data.append('file',file);
        try{
            let result = await fetch('/api/upload-mongo-image', {
                method: "POST",
                body: data,
            })
            result = await result.json();

            if(result.success){
                alert("File Uploaded Successfully")
            }
            else{
                alert("File Uploaded Fail")
            }
        }
        catch(error){
            console.log(error)
        }
    }
    const [file, setFile] = useState('');
  return (
    <>
     <form onSubmit={handleSubmit}>
        <input type="file" name="file" onChange={(e) => setFile(e.target.files?.[0])} /><br /><br />
        <button type="submit">Upload</button>
     </form> 
    </>
  );
}

export default UploadMongoImage;
