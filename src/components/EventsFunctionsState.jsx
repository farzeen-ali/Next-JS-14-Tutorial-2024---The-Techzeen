import React, { useState } from 'react';

const EventsFunctionsState = () => {
    const [firstName, setFirstName] = useState('Ali');
    // const sayHello = (name) => {
    //     alert(`Hello ${name}`); 
    // }
    // let firstName = 'Ali';
    const changeName = () => {
        // firstName = "Farzeen"
        setFirstName('Farzeen');
    }
  return (
    <>
     <h2>Events Functions & State</h2> 
     {/* <button onClick={() => alert('Hello')}>Click Me</button> */}
     {/* <button onClick={() => sayHello('Farzeen')}>Click Me</button> */}
     <h3>My name is: {firstName}</h3>
     <button onClick={changeName}>Click Me</button>
    </>
  );
}

export default EventsFunctionsState;
