"use client"
import { Roboto_Mono } from "next/font/google"
import Link from "next/link";
import { FaHome } from "react-icons/fa";
import { AiFillBulb } from "react-icons/ai";
import { FaBlog } from "react-icons/fa";
import { CgMenu } from "react-icons/cg";
import { CgMenuMotion } from "react-icons/cg";
import { useState } from "react";
const Font = Roboto_Mono({
    
    subsets: ["latin"],
    weight: ['700']
}
)
export default function Header() {
    const [navbar, setNavbar] = useState(false)
    const handleNavbar = () => {
        setNavbar(!navbar);
    }
    return (
        <div>
            
            <header className=" bg-gray-50 w-full z-10 top-0 fixed">
            
                <div className="pr-10 pl-10 pt-5 pb-2 mx-auto flex flex-row my-2 justify-between  border-b-2  text-center ">

                    <div>
                        <Link href={"/"}
                            className={` ${Font.className} font-bold text-4xl`}>Data Fetch</Link>
                    </div>

                    {/* Navbar */}
                    <div className=" hidden md:flex gap-5 ">
                        <Link className="text-black hover:text-blue-950 justify-center items-center hover:underline text-2xl flex gap-2 " href="/"><FaHome size={20}/> Home </Link>
                        <Link className="text-black justify-center items-center hover:text-blue-950 hover:underline text-2xl  flex gap-2" href="/serverSide"><AiFillBulb size={20}/> Server Side</Link>
                        <Link className="text-black hover:text-blue-950 justify-center items-center  hover:underline text-2xl  flex gap-2" href="/clientSide"><FaBlog size={20}/>Client Side</Link>
                        
                    </div>

                    {/* Hamburger  */}
                    <div className="md:hidden cursor-pointer " onClick={handleNavbar}>
                        {navbar ? <CgMenuMotion size={40} /> : <CgMenu size={40} />}
                    </div>

                </div>
                {navbar && (
                    <div className="md:hidden  bg-transparent p-4  flex flex-col  justify-center items-center gap-3 ">
                        <Link href="/" className=" justify-center items-center text-black  flex gap-2 text-bold text-[20px]  py-2 hover:text-blue-950 hover:underline" onClick={handleNavbar}><FaHome size={20}/> Home</Link>

                        <Link href="/clientSide" className=" flex gap-2 text-black justify-center items-center  text-bold text-[20px]  py-2 hover:text-blue-950 hover:underline" onClick={handleNavbar}><AiFillBulb size={20}/>Client Side</Link>

                        <Link href="/serverSide" className=" justify-center items-center flex gap-2 text-black  text-bold text-[20px]  py-2  hover:text-blue-950 hover:underline" onClick={handleNavbar}><FaBlog size={20}/>Server Side</Link>

                        
                    </div>
                )}
                 
            </header>
           
        </div>
    )
}