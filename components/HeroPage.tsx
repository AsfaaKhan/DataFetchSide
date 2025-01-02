import { Niconne } from "next/font/google";

const Font = Niconne({
    subsets: ["latin"],
    weight: ['400']
})

import Link from "next/link"
export default function HeroPage() {
    return (
        <div>
            <div className="bg flex justify-center items-center text-center">
                <div className=" flex flex-col justify-center items-center gap-10 ">
                    <div className="mt-20 text-white text-2xl md:text-4xl lg:text-8xl  ">
                        <h1 className={`${Font.className}  text-white text-5xl md:text-6xl lg:text-8xl font-bold `} >Data Fetching Side </h1>
                    </div>
                    <div className="flex gap-10   ">
                        <Link href={"/serverSide"} className="border-[1px] rounded-full text-white p-3 hover:text-black hover:bg-white shadow-md hover:shadow-lg text-2xl " >Server Side</Link>
                        <Link href={"/clientSide"} className="border-[1px] rounded-full text-white p-3 hover:text-black hover:bg-white shadow-md hover:shadow-lg text-2xl ">Client Side</Link>
                    </div>
                </div>

            </div>
        </div>
    )
}