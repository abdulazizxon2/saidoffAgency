import Image from "next/image";
import React, { useEffect } from "react";
import ChooseIMG from "../../../public/img/Rectangle 187 (1).png";
import ChooseIMG2 from "../../../public/img/Rectangle 188 (1).png";
import { Star1, Star2 } from "@/public/icon/icon";
import AOS from "aos";
import "aos/dist/aos.css";

export default function OverviewChoose() {
  useEffect(() => {
    AOS.init({
      duration: 2000,
    });
  }, []);
  return (
    <div>
      <div className="container mx-auto mb-20">
        <div className="flex max-md:flex-col max-md:gap-5 mt-60 justify-around items-center md:px-20 ">
          <div  data-aos="fade-right">
            {/* <h2 className="relative right-12 md:hidden bg-green px-3 py-[3px] text-xl max-md:text-base inline-block -rotate-90 rounded-lg">
              About us
            </h2> */}
            <h1 className="font-extrabold text-4xl max-md:text-xl">
              Nima Uchun{" "}
              <span className="bg-green px-3 py-[3px] inline-block transform -skew-x-12 rounded-lg">
                <span className="inline-block transform skew-x-12">Bizni</span>
              </span>
              <span className="max-md:hidden">Tanlashinggiz kerak</span>
            </h1>
            <h1 className="flex gap-3 font-extrabold md:hidden text-4xl max-md:text-xl">
              <span>Tanlashinggiz</span> <span>kerak</span>
            </h1>
          </div>
          <div data-aos="fade-left" className="md:w-4/5 max-md:px-3 max-md:w-full max-md:text-center">
            <p className="text-lg max-md:text-base">
              Har bir loyihada yangi yondashuv, yuqori sifat, tezkor va
              ishonchli xizmat ko‘rsatamiz. Biz bilan ishlash sizga
              muvaffaqiyatni va innovatsion dunyoni ochadi.
            </p>
          </div>
        </div>
        <div  data-aos="fade-right" className=" relative right-20 max-md:right-8 md:bottom-16 max-md:bottom-48">
          <h2 className="bg-green px-3 py-[3px] text-xl max-md:text-base inline-block -rotate-90 rounded-lg">
            About us
          </h2>
        </div>
    <div data-aos="zoom-out">
    <div className="relative max-md:hidden top-20 right-5">
          <Star2 />
        </div>
        <div className="flex max-md:grid gap-4 px-10">
          <div>
            <Image src={ChooseIMG} alt="img" className="max-md:hidden" />
          </div>
          <div className="relative md:hidden top-64 right-5">
            <Star1 />
          </div>
          <div  className="flex flex-col gap-4">
            <Image src={ChooseIMG2} alt="img" />
            <Image src={ChooseIMG} alt="img" className="md:hidden" />
            <Image src={ChooseIMG2} alt="img" />
          </div>
        </div>
    </div>
      </div>
    </div>
  );
}
