"use client"

import Link from "next/link"
export default function Header() {


    return (
        <div>
            <nav className="bg-black text-white w-full z-10 top-0 fixed p-[20px]">
                <div className="mx-auto text-bold text-xl justify-center flex items-center text-center ">
                    <ul className="flex gap-10 cursor-pointer  ">
                        <li className="hover:text-blue-500   hover:border-[1px] rounded-full p-2  "><Link href={"/"}>Home</Link></li>
                        <li className="hover:text-blue-500   hover:border-[1px] rounded-full p-2  "><Link href={"/clientSide"}>Client Side Fetch</Link></li>
                        <li className="hover:text-blue-500   hover:border-[1px] rounded-full p-2 "><Link href={"serverSide"}>Server Side Fetch</Link></li>
                    </ul>
                </div>
            </nav>
        </div>
    )
}