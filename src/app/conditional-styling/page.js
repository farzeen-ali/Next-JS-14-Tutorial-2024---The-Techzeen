"use client";
import { useState } from 'react';
import style from '../conditionalStyling.module.css';

const ConditionalStyling = () => {
   const [color, setColor] = useState('blue');
   const {green} = style;
  return (
    <>
     <h2 className={style.heading}>Conditional Styling In Next JS 14</h2> 
     {/* conditional styling */}
     {/* <h3 className={color == 'blue' ? style.green : style.pink}>Hello, Farzeen</h3> */}
     {/* use style attribute */}
     {/* <h3 style={{backgroundColor: color=='blue' ? 'yellow' : 'purple'}}>Hello, Farzeen</h3> */}
     {/* use id attribute */}
     {/* <h3 id={style.my}>Hello, Farzeen</h3> */}
     {/* multiple tags */}
     <h3 className={green}>Hello, Farzeen</h3>
     <h3 className={green}>Hello, Farzeen</h3>
     <h3 className={green}>Hello, Farzeen</h3>
     <button onClick={() => setColor('red')}>Change Color</button>
    </>
  );
}

export default ConditionalStyling;
