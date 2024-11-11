import Image from "next/image";
import React, { useEffect } from "react";
import Sertifikat from "../../../public/img/image 43 (2).png";
import AOS from "aos";
import "aos/dist/aos.css";

export default function AboutSertificate() {
  useEffect(() => {
    AOS.init({
      duration: 1500,
      once: false,
    });
  }, []);
  return (
    <div>
      <div className="container mx-auto max-w-[1440px]">
      <div className="shadow-lg p-10 rounded-3xl mt-44 m-12">
        <div className="flex justify-center items-center gap-4 max-md:flex-col">
          <div className="w-full flex flex-col gap-6 w-2/3" data-aos="fade-right">
            <h1 className="text-5xl max-md:text-4xl max-md:text-center">Bizning Sertifikatimiz</h1>
            <p className="text-lg w-2/3 max-md:w-full max-md:text-center  ">
              Sertifikat bu mahorat va bilimlaringizni tasdiqlovchi rasmiy
              hujjatdir. U bilan siz o'z sohangizdagi yutuqlaringizni namoyish
              etasiz. Bizning sertifikatlarimiz sifatli ta’lim va malakani
              kafolatlaydi.
            </p>
          </div>
          <div className="w-[432px]" data-aos="fade-left">
            <Image src={Sertifikat} alt="img" className="z-100" />
          </div>
        </div>
      </div>
      </div>
    </div>
  );
}
