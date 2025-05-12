import Collection from "@/components/home/collection";
import Hero from "@/components/home/hero";
import { Button } from "@/components/ui/button";
import Image from "next/image";

export default function Home() {
  return (
    <div className="min-h-screen">
      <Hero />
      <Collection />
      {/* Unveiling */}
      <div className="h-[100vh] relative flex bg-neutral-800">
        <div className="absolute top-0 left-0 w-full h-full ">
          <Image
            src="https://images.pexels.com/photos/6192358/pexels-photo-6192358.jpeg"
            alt="African Elegance"
            fill
            className="object-cover object-center"
            sizes="100%"
            priority
          />
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 z-10 flex-1">
          <div className="flex justify-center items-center flex-1">
            <span className="text-5xl tracking-tight text-center font-medium">
              Unveiling the <br />
              <span><span>African</span> Elegance</span>
            </span>
          </div>
          <div className="md:block hidden"></div>
        </div>
      </div>

      {/*  */}
      <div className="grid grid-cols-1 md:grid-cols-2 grid-rows-2 md:grid-rows-1 min-h-[100vh] overflow-hidden">
        {/* Left side with image */}
        <div className="relative h-full">
          <Image
            src="https://images.pexels.com/photos/15520563/pexels-photo-15520563/free-photo-of-woman-with-eyes-closed-touching-an-ear.jpeg"
            alt="Beautiful Woman"
            fill
            className="object-cover object-center"
            sizes="100%"
            priority
          />
        </div>

        {/* Right side with content */}
        <div className="overflow-y-hidden bg-[#F5F5F5]">
          <div className="px-4 sm:px-8 md:px-16 py-8 md:py-12">
            <h4 className="text-2xl tracking-tight text-center font-medium text-black">
              Timeless elegance <br />
              in Every Stitch
            </h4>

            <div className="mt-10 grid grid-cols-2">
              {
                Array.from({ length: 4 }).map((_, index) => (
                  <div key={index} className="bg-neutral-300 h-[18rem]">

                  </div>
                ))
              }
            </div>
          </div>
        </div>
      </div>

      <div className="grid grid-cols-1 reverse md:grid-cols-2 grid-rows-2 md:grid-rows-1 min-h-[100vh] overflow-hidden">
        <div className="relative h-full md:hidden block">
          <Image
            src="https://images.pexels.com/photos/28988329/pexels-photo-28988329/free-photo-of-beautiful-nigerian-woman-in-traditional-attire.jpeg"
            alt="Beautiful Woman"
            fill
            className="object-cover object-center"
            sizes="100%"
            priority
          />
        </div>
        <div className="overflow-y-hidden bg-[#F5F5F5]">
          <div className="px-4 sm:px-8 md:px-16 py-8 md:py-12">
            <h4 className="text-2xl tracking-tight text-center font-medium text-black">
              Iconic Styles <br />
              for Every Occasion
            </h4>
            <div className="mt-10 grid grid-cols-2">
              {
                Array.from({ length: 4 }).map((_, index) => (
                  <div key={index} className="bg-neutral-300 h-[18rem]">

                  </div>
                ))
              }
            </div>
          </div>
        </div>
        <div className="relative h-full md:block hidden">
          <Image
            src="https://images.pexels.com/photos/28988329/pexels-photo-28988329/free-photo-of-beautiful-nigerian-woman-in-traditional-attire.jpeg"
            alt="Beautiful Woman"
            fill
            className="object-cover object-center"
            sizes="100%"
            priority
          />
        </div>
      </div>

      <div className="grid grid-cols-1 reverse md:grid-cols-2 grid-rows-2 md:grid-rows-1 min-h-[100vh] overflow-hidden">
        <div className="relative h-full md:block hidden">
          <Image
            src="https://images.pexels.com/photos/31359949/pexels-photo-31359949/free-photo-of-elegant-african-woman-in-vibrant-garden-setting.jpeg"
            alt="Beautiful Woman"
            fill
            className="object-cover object-center"
            sizes="100%"
            priority
          />
        </div>
        <div className="flex flex-col justify-center items-center bg-[#F5F5F5] text-black">
          <span className="text-4xl tracking-tight text-center font-medium">
            Merylish lookback: <br />
            <span><span> A Journey</span> Through Fashion</span>
          </span>
          <div className="mt-10">
            <Button variant="link" className="underline text-black">
              CONTACT
            </Button>
          </div>
        </div>
      </div>

    </div>
  );
}
