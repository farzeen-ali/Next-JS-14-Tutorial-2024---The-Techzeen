'use client';
import Link from "next/link";
import { useRouter } from "next/navigation";

const Home = () => {
  const router = useRouter();
  const handleNavigation = (routerName) => {
    router.push(routerName);
  }
  return (
    <>
     <h2>Home</h2> 
     {/* <Link href='/about'>About</Link>
     <br />
     <Link href='/contact'>Contact</Link> */}
     {/* <button onClick={()=> router.push('/about')}>About</button>
     <button onClick={()=> router.push('/contact')}>Contact</button> */}
     <button onClick={()=> handleNavigation('/about')}>About</button>
     <button onClick={()=> handleNavigation('/contact')}>Contact</button>
    </>
  );
}

export default Home;
