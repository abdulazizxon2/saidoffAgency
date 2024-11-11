import React, { useEffect, useState } from "react";
import fon from "../../../public/img/Frame 107 (1).png";
import Image from "next/image";
import grupIMG from "../../../public/img/headerimg1.png";
import grupIMG2 from "../../../public/img/headerimg2.png";
import grupIMG3 from "../../../public/img/headerimg3.png";
import grupIMG4 from "../../../public/img/headerimg4.png";
import Modal from "@/src/components/Modal";
import AOS from "aos";
import "aos/dist/aos.css";

export default function OverviewHeader() {
  const [showModal, setShowModal] = useState(false);
  useEffect(() => {
    AOS.init({
      duration: 1500,
      once: false,
    });
  }, []);

  return (
    <div>
      <div className="relative h-[120vh] md:h-100vh lg:max-h-[1038px] py-[100px]">
        <div className="container mx-auto h-full">
          <div className="flex flex-col justify-center items-center h-full gap-8">
            <div data-aos="fade-right">
              <div className="flex flex-col gap-8 max-md:hidden">
                <div className="flex justify-center items-center relative gap-5">
                  <div className="relative inline-block z-[1]">
                    <h1 className="text-8xl font-bold">&nbsp;Saidoff&nbsp;</h1>
                    <div className="absolute bg-green top-1/2 -translate-y-1/2 h-[120%] w-full z-[-1] rotate-[-2deg] skew-x-[-15deg] rounded-[16px]" />
                  </div>
                  <div>
                    <h1 className="text-white text-8xl font-bold">Bilan</h1>
                  </div>
                </div>
                <div>
                  <h1 className="flex justify-center text-white text-6xl font-bold">
                    Birga hammasi oson
                  </h1>
                </div>
              </div>
              <div className="flex flex-col gap-2 md:hidden">
                <div className="flex flex-col justify-center items-center relative gap-5">
                  <div className="relative inline-block z-[1]">
                    <h1 className="text-5xl font-bold">&nbsp;Saidoff&nbsp;</h1>
                    <div className="absolute bg-green top-1/2 -translate-y-1/2 h-[120%] w-full z-[-1]  skew-x-[-15deg] rounded-[16px]" />
                  </div>
                  <div>
                    <h1 className="text-white text-4xl font-bold">
                      Bilan Birga{" "}
                    </h1>
                  </div>
                </div>
                <div>
                  <h1 className="flex justify-center text-white text-3xl font-bold">
                    hammasi oson
                  </h1>
                </div>
              </div>
              <div className="text-white flex justify-center mt-8">
                <p className="text-lg w-4/6 text-center">
                  Sizning gʻoyangiz va bizning ijodkorligimiz! Biznesingizni IT
                  texnologiyalari bilan birgalikda xalqaro darajaga olib
                  chiqamiz!
                </p>
              </div>
            </div>
            <div>
              <button
                onClick={() => setShowModal(true)}
                className="bg-green md:hidden px-14 py-4 text-base font-bold shadow-inner rounded-3xl custom-shadow"
              >
                Bog’lanish
              </button>
            </div>
          </div>
          <div
            data-aos="fade-up"
            className="relative w-full flex items-center justify-center top-20 max-md:top-28"
          >
            <div className="flex justify-center items-center absolute h-[175px] md:h-[320px]">
              <Image
                src={grupIMG4}
                alt="img"
                className="h-full object-cover w-[175px] md:w-[340px] aspect-square -mx-[2%] rounded-[15%] rotate-[8deg]"
              />
              <Image
                src={grupIMG3}
                alt="img"
                className="h-full object-cover w-[175px] md:w-[340px] aspect-square -mx-[2%] rounded-[15%] rotate-[-8deg]"
              />
              <Image
                src={grupIMG}
                alt="img"
                className="h-full object-cover w-[175px] md:w-[340px] aspect-square -mx-[2%] rounded-[15%] rotate-[8deg]"
              />
              <Image
                src={grupIMG2}
                alt="img"
                className="h-full object-cover w-[175px] md:w-[340px] aspect-square -mx-[2%] rounded-[15%] rotate-[-8deg]"
              />
            </div>
          </div>
          <div>
            <Image
              src={fon}
              alt="rasm"
              className="absolute w-full top-0 h-full inset-0 object-fill z-[-1]"
            />
          </div>
          {/* <div className="hidden">
          <Image
            src={fon1}
            alt="rasm"
            className="absolute w-full top-0 h-full inset-0 object-fill z-[-1]"
          />
        </div> */}
          <Modal showModal={showModal} setShowModal={setShowModal} />
        </div>
      </div>
    </div>
  );
}
