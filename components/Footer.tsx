import Link from "next/link"
// import { PiGithubLogoFill } from "react-icons/pi";
import { FaGithub, FaLinkedin, FaSquareXTwitter } from "react-icons/fa6";

export default function Footer() {
    return (
        <div>

            <div className="container mx-auto flex  flex-col justify-center items-center py-12">

                <div className="flex-flex-row justify-center items-center  ">
                    <div className=" flex gap-2 ">
                        <Link className="text-slate-500 hover:text-blue-950 justify-center items-center hover:underline text-xl flex gap-2 " href="/"> Home </Link>
                        <Link className="text-slate-500 justify-center items-center hover:text-blue-950 hover:underline text-xl  flex gap-2" href="/serverSide"> Server Side</Link>
                        <Link className="text-slate-500 hover:text-blue-950 justify-center items-center  hover:underline text-xl  flex gap-2" href="/clientSide"> Client Side</Link>
                       
                    </div>
                </div>

                <div className="py-5">
                    <div className="flex gap-6 justify-center ">

                        <Link href={"https://github.com/AsfaaKhan"}>
                            <FaGithub size={30} className="text-black" />
                        </Link>

                        <Link href={"https://www.linkedin.com/in/asfaa-khan-4b80a0267?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app"}  ><FaLinkedin size={30} className="text-blue-800" />
                        </Link>

                        <Link href={"https://x.com/KhanAsfaa?s=08"}>
                            <FaSquareXTwitter size={30} className="text-slate-900" />
                        </Link>
                    </div>

                    <p className="py-5 text-gray-400 ">Copyright &copy;2024 All right reserved</p>
                    <p className="text-gray-400 text-center">Terms & Condition</p>
                </div>
            </div>
        </div>

        // <div className="bg-black text-white p-8 flex flex-col  justify-center items-center text-center font-bold text-2xl">
        //     <p>&copy; Asfaa Khan</p>
        //     <div className="flex  gap-5">
        //     <Link href={"https://github.com/AsfaaKhan"} className="style p-2 rounded-full hover:bg-white hover:text-black">
        //     <PiGithubLogoFill size={30} />
        //     </Link>
        //     <Link  href={"https://www.linkedin.com/in/asfaa-khan-4b80a0267?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app"} className="style hover:bg-white hover:text-black p-2 rounded-full">
        //     <FaLinkedinIn size={30} />
        //     </Link>
        //     </div>


        // </div>
    )
}