import React from "react";
import Image from "next/image";
import Partner1 from "../../../public/img/image 53 (1).png";
import Partner2 from "../../../public/img/image 52 (1).png";
import Partner3 from "../../../public/img/image 51 (1).png";
import Partner4 from "../../../public/img/image 50 (1).png";
import Partner5 from "../../../public/img/image 47 (1).png";
import Partner6 from "../../../public/img/image 46 (1).png";
import Partner7 from "../../../public/img/image 45 (1).png";
import Partner8 from "../../../public/img/image 44 (1) (1).png";
import Partner9 from "../../../public/img/image 49 (2) (1).png";
import Partner10 from "../../../public/img/image 48 (1) (1).png";


import Marquee from "react-fast-marquee";

export default function OverviewPartners() {
  return (
    <div>
      <div className="container mx-auto mt-40 mb-20">
        <div>
          {" "}
          <div className="pl-20">
            <h1 className="text-4xl max-md:text-2xl font-extrabold">
              Bizga Ishongan{" "}
              <span className="bg-green px-3 py-[3px] inline-block transform -skew-x-12 rounded-lg">
                <span className="inline-block transform skew-x-12">
                  Hamkorlar
                </span>
              </span>
            </h1>
          </div>
          <div className="relative right-24 max-md:right-16 ml-2 bottom-12">
            <h2 className="bg-green px-3 py-[3px] text-xl inline-block -rotate-90 rounded-lg">
              Our Clients
            </h2>
          </div>
        </div>
        <div className="flex flex-col">
          <Marquee autoFill speed={40}>
            <Image src={Partner1} alt="img" className="w-full h-56 max-md:h-40"/>
            <Image src={Partner2} alt="img" className="w-full h-56 max-md:h-40"/>
            <Image src={Partner3} alt="img" className="w-full h-56 max-md:h-40"/>
            <Image src={Partner4} alt="img" className="w-full h-56 max-md:h-40"/>
            <Image src={Partner5} alt="img" className="w-full h-56 max-md:h-40"/>
          </Marquee>
          <Marquee autoFill direction speed={40}>
            <Image src={Partner6} alt="img" className="w-full h-56 max-md:h-40"/>
            <Image src={Partner7} alt="img" className="w-full h-56 max-md:h-40"/>
            <Image src={Partner8} alt="img" className="w-full h-56 max-md:h-40"/>
            <Image src={Partner9} alt="img" className="w-full h-56 max-md:h-40"/>
            <Image src={Partner10} alt="img" className="w-full h-56 max-md:h-40"/>
          </Marquee>
        </div>
      </div>
    </div>
  );
}
