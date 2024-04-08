'use client';
import { usePathname } from "next/navigation"

export default function Layout({ children }){
   const currentPathName = usePathname();
   console.log(currentPathName);
    return (
        <>
            {
                currentPathName !== '/contact/company' ? 
                <h2>Common Layout For Contact</h2> : null
            }
            { children }
        </>
    )
}