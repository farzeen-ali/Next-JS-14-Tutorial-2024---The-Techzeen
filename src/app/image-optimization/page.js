import React from 'react';
import Image from "next/image"
import Img from '/public/next.svg';
const ImageOptimization = () => {
    console.log(Img)
  return (
    <>
     <h2>Image Optimization In Next JS 14</h2>
     {/* <Image 
        src={Img}
        alt='Next JS Image'
        height={300}
        width={500}
     />
     <img src={Img.src} alt='Img' /> */}
     <Image 
        src='https://images.pexels.com/photos/18129528/pexels-photo-18129528/free-photo-of-woman-in-denim-overalls-lying-on-leather-couch-holding-camera.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2'
        alt='Pexel Image'
        height={900}
        width={900}
     />
    </>
  );
}

export default ImageOptimization;
