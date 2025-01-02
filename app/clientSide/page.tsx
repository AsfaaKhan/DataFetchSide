"use client"

import { Niconne } from "next/font/google";
import { useEffect, useState } from "react";
import CardBox from "@/components/Card";
import { CircleLoader } from "react-spinners";
const Font = Niconne({
    subsets: ["latin"],
    weight: ['400']
})
interface IProduct {
    id: number,
    title: string,
    price: number,
    description: string,
    category: string,
    image: string,
    rating: {
        rate: number,
        count: number,
    }
}
export default function ClientSide() {
    const [data, setData] = useState<IProduct[]>([])
    const [loading,setLoading] = useState(true);
    const [color] = useState("");

    useEffect(() => {
        const compoundeMounted = true;
        const fetchData = async () => {
            const response = await fetch("https://fakestoreapi.com/products");
            const parsedResponse: IProduct[] = await response.json();
            if(compoundeMounted){
            setData(parsedResponse)
            setLoading(false)
            }  
        };
        fetchData();
    }, [])
    
    const Loading = () => {
        const override = {
            display: "block",
            margin: "0 auto",
        };
    
        return (
            <div>
                    <CircleLoader
                        color={color}
                        loading={loading}
                        cssOverride={override}
                        size={150}
                        aria-label="Loading Spinner"
                        data-testid="loader"
                    />
                </div>           
        );
    };

    const ShowProducts =()=>{
        return(
            <div>

                {/* Heading */}
                <div className={`${Font.className} flex justify-center items-center text-center text-bold text-7xl`}>
                    <h1>Client Side Fetching</h1>
                </div>

                 {/* Data Fetch */}
                 <div className=" mt-12 mb-12 flex flex-col justify-center items-center">
                    <div className="grid grid-cols-1  md:grid-cols-2 lg:grid-cols-3 2xl:grid-cols-4 gap-20  ">
                        {data.map((product, index) => (
                            <div key={index} >
                                <CardBox image={product.image} category={product.category} title={product.title} description={product.description} price={product.price} star={product.rating.rate} reviews={product.rating.count} />
                            </div>
                        ))}

                    </div>
                </div>
            </div>
        )
    }

    return (
        <div className="mt-40">
            <div>


                <div className="flex justify-center items-center mt-10">
                    {loading ? <Loading /> :<ShowProducts/>}

                </div>


            </div>
        </div>
    )
}