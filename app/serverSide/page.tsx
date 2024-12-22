import Card2 from "@/components/Card2"
import { Niconne } from "next/font/google";

const Font = Niconne({
    subsets: ["latin"],
    weight: ['400']
})


interface IBooks {
    id: number,
    name: string,
    type: string,
    available : boolean,

}


const ServerSide = async () => {
    const response = await fetch("https://simple-books-api.glitch.me/books/");
    const parsedResponse: IBooks[] = await response.json();


    return (
        <div className="mt-40 mb-40 ">
            <div className={`flex justify-center items-center text-center font-bold text-6xl ${Font.className}`}>
                <h1>Server Side Data Fetch</h1>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 mt-10 gap-10">
            {parsedResponse.map((books, index) => (
                <div key={index}>
                   <Card2 name={books.name} id={books.id} type={books.type} available = {books.available} 
                    /> 
                </div>
            ))}
            </div>
           
        </div>
    )
}

export default ServerSide