import {
    Card,
    CardContent,
    CardFooter,
    CardHeader,
    CardTitle,
} from "@/components/ui/card"
interface ICard2 {
    name: string,
    id: number,
    type: string,
    available: boolean,
}

export default function Card2(props: ICard2) {
    return (
        <div className="flex flex-col justify-center items-center brightness-75">
            <Card className="style flex flex-col  w-[300px] h-[200px]  justify-center items-center ">
                <CardHeader>
                    <CardTitle className="font-bold text-4xl">
                        {props.name}
                    </CardTitle>

                </CardHeader>
                <CardContent className="flex flex-col  gap-5 italic  font-bold text-2xl" >
                    ID: {props.id}
                    <br />
                    Type: {props.type}
                </CardContent>
                <CardFooter>
                    {props.available}
                </CardFooter>
            </Card>
        </div>
    )
}