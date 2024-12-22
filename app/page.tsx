import {
  AlertDialog,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogCancel,
  AlertDialogTitle,
  AlertDialogTrigger,
} from "@/components/ui/alert-dialog"
import Link from "next/link";

export default function Home() {
  return (
    <div>

      <div className=" flex flex-col justify-center items-center  h-screen">
        <div className="style flex justify-center items-center">
          <AlertDialog>
            <AlertDialogTrigger className=" border p-3 rounded-full shadow-md ">Which kind of side information would you like to fetch? (Click)</AlertDialogTrigger>
            <AlertDialogContent>
              <AlertDialogHeader>
                <AlertDialogTitle>Select Data Fetch Method </AlertDialogTitle>
                <AlertDialogDescription>
                  I developed two different kinds of data fetch methods to extract data from a phony API that Sir Fahad Khan supplied.
                </AlertDialogDescription>
              </AlertDialogHeader>
              <AlertDialogFooter className="flex flex-col gap-4  justify-center items-center">
                <Link href={"/clientSide"} className="style border-[1px]  shadow-md p-4">Client Side Fetch</Link>
                <Link href={"/serverSide"} className="style border-[1px]  shadow-md p-4">Server Side Fetch</Link>
                <AlertDialogCancel>Cancel</AlertDialogCancel>
              </AlertDialogFooter>
            </AlertDialogContent>
          </AlertDialog>

        </div>
      </div>



    </div>
  );
}
