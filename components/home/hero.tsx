import Image from "next/image";
import { Button } from "../ui/button";


export default function Hero() {
    return (
        <div className="h-[100vh] flex w-full relative">
            <div className="absolute top-0 left-0 w-full h-full -z-10">
                <Image
                    src="https://images.pexels.com/photos/6192448/pexels-photo-6192448.jpeg"
                    alt="hero"
                    fill
                    className="object-cover object-center"
                    sizes="100%"
                    priority
                />
            </div>
            <div className="flex-1 w-full h-full flex justify-center items-center flex-col gap-4">
                <h4 className="text-3xl tracking-tight">
                    new collection
                </h4>
                <h1 className="text-6xl font-medium tracking-tight text-center">Sprińg Summer</h1>
                <div className="mt-10">
                    <Button variant="link" className="underline">
                        CONTACT
                    </Button>
                </div>
            </div>
        </div>
    )
}