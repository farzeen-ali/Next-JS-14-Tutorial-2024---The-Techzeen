import React from 'react';

const EnvironmentVariables = () => {
    // console.log(process.env)
    console.log(process.env.GOOGLEMAPSAPIKEY);
  return (
    <>
     <h2>Environment Variables In Next JS</h2> 
     {/* {
        process.env.NODE_ENV == 'development' ? 
        <h3>Development Mode</h3> : <h3>Production Mode</h3>
     } */}
    </>
  );
}

export default EnvironmentVariables;
