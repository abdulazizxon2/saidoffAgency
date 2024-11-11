import React from "react";
import Image from "next/image";
import fon from "../../../public/img/image (9).png";
import HeaderImg from "../../../public/img/image (15).png";

export default function PortfolioHeader() {
  return (
    <div>
      <div className="relative h-[120vh] md:h-100vh lg:max-h-[1038px] py-[100px] mb-10">
        <div className="container mx-auto py-16 max-w-full">
          <Image
            src={fon}
            alt="rasm"
            className="absolute w-full top-0 h-full inset-0 object-fill z-[-1]"
          />
          <div className="flex justify-center gap-10">
            <div className="mt-20">
              <h2 className="text-white text-6xl uppercase">bIZNING HAR BIR</h2>
              <h2 className="text-white text-6xl uppercase">
                LOYIHALARIMIZ BIZ
              </h2>
              <h2 className="text-white text-6xl uppercase"> UCHUN YANGI</h2>
              <div className="relative inline-block z-[1] ml-3">
                <h1 className="text-6xl max-md:text-2xl font-bold">
                  &nbsp;MAQSAd&nbsp;
                </h1>
                <div className="absolute bg-green top-1/2 -translate-y-1/2 h-[120%] w-full z-[-1] skew-x-[-15deg] rounded-[16px]" />
              </div>
            </div>
            <div>
              <Image src={HeaderImg} alt="rasm" className="w-[527px]" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
