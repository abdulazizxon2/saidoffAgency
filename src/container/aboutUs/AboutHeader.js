import Image from "next/image";
import React, { useEffect } from "react";
import BackgrounIMG from "../../../public/img/Group 171.png";
import HeaderIMG1 from "../../../public/img/imgs(2).png";
import HeaderIMG2 from "../../../public/img/imgs(1).png";
import HeaderIMG3 from "../../../public/img/imgs.png";
import BackgrounIMG2 from "../../../public/img/Group 172.png";
import AOS from "aos";
import "aos/dist/aos.css";

export default function AboutHeader() {
  useEffect(() => {
    AOS.init({
      duration: 1500,
      once: false,
    });
  }, []);
  return (
    <div>
      <div className="relative h-[100vh]   md:h-100vh lg:max-h-[1038px] py-[100px]">
        <div className="container mx-auto max-w-[1440px]">
          <div className="flex justify-between max-md:flex-col max-md:justify-center items-center">
            <div className="flex flex-col  uppercase mt-8 ml-10" data-aos="fade-right">
              {" "}
              <div className="flex relative gap-5">
                <div >
                  <h1 className="text-white text-7xl max-md:text-2xl font-bold">
                    Biz shunchaki{" "}
                  </h1>
                </div>
              </div>
              <div>
                <h1 className="flex justify-center text-white text-6xl max-md:text-2xl font-bold">
                  kompaniya emas,
                </h1>
              </div>
              <div className="flex">
                <h1 className="flex justify-center text-white text-6xl max-md:text-2xl font-bold">
                  biz bir
                </h1>
                <div className="relative inline-block z-[1] ml-3">
                  <h1 className="text-6xl max-md:text-2xl font-bold">
                    &nbsp;oilamiz&nbsp;
                  </h1>
                  <div className="absolute bg-green top-1/2 -translate-y-1/2 h-[120%] w-full z-[-1] skew-x-[-15deg] rounded-[16px]" />
                </div>
              </div>
            </div>
            <div className="flex flex-col relative bottom-15 left-52 blur-x-sm "  data-aos="fade-left" >
              <Image
                src={HeaderIMG3}
                alt="img"
                className="h-full object-cover w-[145px] md:w-[240px] md:h-[240px] aspect-square mx-[14%] rounded-[15%] rotate-[14deg] -z-10"
                style={{
                  maskImage:
                    "linear-gradient(to top right, rgba(0, 0, 0, 1), rgba(0, 0, 0, 0))",
                  WebkitMaskImage:
                    "linear-gradient(to top left, rgba(0, 0, 0, 1), rgba(0, 0, 0, 0))",
                  background: "transparent",
                }}
              />
              <div className="rotate-[14deg] -z-10">
                <Image
                  src={HeaderIMG2}
                  alt="img"
                  className="h-full object-cover w-[145px] md:w-[290px] md:h-[290px] max-md:w-48 aspect-square rounded-[15%] -mx-[23%] -my-[12%] rotate-[-14deg]"
                />
              </div>
              <Image
                src={HeaderIMG1}
                alt="img"
                className="h-full object-cover w-[160px] md:w-[480px] max-md:w-72 aspect-square -my-[32%] -mx-[30%] rounded-[15%] rotate-[-14deg] -z-10"
              />
            </div>
          </div>
        </div>
      </div>
      <Image
        src={BackgrounIMG}
        alt="img"
        className="absolute w-full top-0 h-[750px] inset-0 object-fill z-[-1] max-md:hidden -z-30"
      />
      <Image
        src={BackgrounIMG2}
        alt="img"
        className="absolute w-full top-0 h-[750px] inset-0 object-fill z-[-1] md:hidden"
      />
    </div>
  );
}
