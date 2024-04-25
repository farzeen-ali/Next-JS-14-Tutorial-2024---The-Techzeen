import { Poppins } from "next/font/google";
const poppins = Poppins({
    weight: '900',
    subsets: ['latin'],
    display: 'swap'
})
const FontOptimization = () => {
  return (
    <>
     {/* <h2 style={{fontFamily: 'Poppins', fontWeight: 300}}>Font Optimization In Next JS 14</h2>  */}
     <h2 className={poppins.className}>Font Optimization In Next JS 14</h2>
    </>
  );
}

export default FontOptimization;
