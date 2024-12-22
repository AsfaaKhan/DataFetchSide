import Link from "next/link"
import { PiGithubLogoFill } from "react-icons/pi";
import { FaLinkedinIn } from "react-icons/fa6";

export default function Footer(){
    return(
        <div className="bg-black text-white p-8 flex flex-col  justify-center items-center text-center font-bold text-2xl">
            <p>&copy; Asfaa Khan</p>
            <div className="flex  gap-5">
            <Link href={"https://github.com/AsfaaKhan"} className="style p-2 rounded-full hover:bg-white hover:text-black">
            <PiGithubLogoFill size={30} />
            </Link>
            <Link  href={"https://www.linkedin.com/in/asfaa-khan-4b80a0267?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app"} className="style hover:bg-white hover:text-black p-2 rounded-full">
            <FaLinkedinIn size={30} />
            </Link>
            </div>
            

        </div>
    )
}