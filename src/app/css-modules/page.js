import page from '../page.module.css';
import custom from '../custom.module.css';
const CSSModules = () => {
  return (
    <>
     {/* <h2 className='main'>CSS Modules In Next JS 14</h2>  */}
     <h2 className={custom.main}>CSS Modules In Next JS 14</h2> 
     <h2 className={page.main}>Farzeen Ali</h2> 
    </>
  );
}

export default CSSModules;
