"use client"
import Script from "next/script";

const ScriptComponent = () => {
  return (
    <>
     <h2>Script Component in Next Js 14</h2> 
     <Script 
        src="/feature.js"
        onLoad={() => {
            console.log("Feature Executed")
        }}
     />
    </>
  );
}

export default ScriptComponent;
