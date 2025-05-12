import Image from "next/image";

export default function Collection() {
    return (
        <div className="py-20">
            <h2 className="tracking-tight text-2xl text-center">Collection</h2>
            <div className="mt-10 w-full grid lg:grid-cols-4 md:grid-cols-3 sm:grid-cols-2 grid-cols-1">
                {
                    Array.from({ length: 8 }).map((_, index) => (
                        <div key={index} className="aspect-[2/3] grid grid-rows-4 border-l border-b">
                            <div className="row-span-3 relative bg-[#F5F5F5]">
                                {/* <Image
                                    src="https://images.pexels.com/photos/31501017/pexels-photo-31501017/free-photo-of-elegant-woman-in-vibrant-headwrap-outdoors.jpeg?auto=compress&cs=tinysrgb&w=1600"
                                    alt="collection"
                                    fill
                                    className="object-cover object-center"
                                    sizes="100%"
                                    priority
                                /> */}
                            </div>
                            <div className="row-span-1 p-3">
                                <p className="uppercase tracking-tight">
                                    Kaftan Dress
                                </p>
                                <span className="flex flex-row items-center gap-2 mt-2">
                                    <span className="text-muted-foreground line-through text-sm">GH ₵400</span>
                                    <span className="text-sm">GH ₵250</span>
                                </span>
                            </div>
                        </div>
                    ))
                }
            </div>
        </div>
    )
}