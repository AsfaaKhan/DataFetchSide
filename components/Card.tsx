import Image from "next/image"
import { MdStarRate } from "react-icons/md";
import { Button } from "./ui/button";
import {Molengo} from "next/font/google";
const Font = Molengo ({
    subsets : ["latin"],
    weight : ['400']
  })

import {
    Card,
    CardContent,
    CardDescription,
    CardFooter,
    CardHeader,
    CardTitle,
} from "@/components/ui/card"

interface ICard {
    image: string,
    category: string,
    title: string,
    description: string,
    price: number,
    star: number,
    reviews: number,
}

export default function CardBox(props: ICard) {
    return (
        <div >
            <Card className={ ` style w-[300px] h-[500px] ${Font.className} flex flex-col justify-center items-center mt-2 mb-2`} >
                <CardHeader >
                    <Image src={props.image}
                        alt="product Image"
                        width={300}
                        height={100} className="w-[150px] flex justify-center items-center">
                    </Image>
                    <CardDescription className="text-[20px]">
                        {props.category}
                    </CardDescription>
                    <CardTitle className="text-2xl">
                        {props.title.substring(0,12)}...
                    </CardTitle>
                </CardHeader>
                <CardContent className="text-lg line-clamp-2 leading-tight mb-2 ">
                    {props.description}
                </CardContent>
               
                <CardFooter className="flex  justify-start items-start flex-col gap-2 font-bold text-lg">
                    <div className=" text-2xl ">
                    Rate: ${props.price}
                    </div>
                    <div className="flex justify-center items-center text-center text-yellow-400 
                    ">
                    < MdStarRate size={20}/> {props.star} rating 
                    </div>
                    <div className="italic ">
                    ({props.reviews}) reviews
                    </div>
                    <div>
                        <Button className="hover:bg-white hover:text-black border-[1px]">
                            Buy Now
                        </Button>
                    </div>
                    
                </CardFooter>
            </Card>
        </div>
    )
}

