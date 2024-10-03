import React from "react";
import Group1 from "../../../public/img/agent.png";
import Group2 from "../../../public/img/agent(1).png";
import Group3 from "../../../public/img/agent(2).png";
import Group4 from "../../../public/img/agent(3).png";
import Marquee from "react-fast-marquee";
import Image from "next/image";

export default function OverviuwGroup() {
  return (
    <div>
      <div className="container  mx-auto mt-52">
        {/* <div className="max-md:absolute"> */}
          <div>
            {" "}
            <div className="pl-20">
              <h1 className="text-4xl max-md:text-2xl font-extrabold">Bizni Professional </h1>
              <h1 className="text-4xl max-md:text-2xl  bg-green px-3 pb-3 font-extrabold inline-block transform -skew-x-12 rounded-lg">
                <span className="inline-block transform skew-x-12">
                  Jamoamiz
                </span>
              </h1>
            </div>
            <div className="relative right-24  max-md:right-12 ml-2 max-md:ml-[5px] bottom-28">
              <h2 className="bg-green px-3 py-[3px] text-xl  max-md:text-base inline-block -rotate-90 rounded-lg">
                Coworkers
              </h2>
            </div>
          </div>
          <Marquee
            pauseOnHover
            autoFill
            gradient
            speed={40}
            className="mt-24 mb-24"
          >
            <div className="flex gap-5 t-24">
              <div>
                <div className="hover:bg-green ml-5 w-52 pt-4 h-60 object-cover rounded-xl shadow-2xl ">
                  <Image src={Group1} alt="img" className="w-full px-3  h-56" />
                </div>
                <div className="flex flex-col justify-center items-center">
                  <p className="text-xs pt-2">Senior Web Designer</p>
                  <h2 className="text-xl">Saidov Said</h2>
                </div>
              </div>
              <div>
                <div className="hover:bg-green rounded-xl w-52 h-60 object-cover shadow-2xl ">
                  <Image
                    src={Group2}
                    alt="img"
                    className="w-full h-full object-cover px-3 h-56"
                  />
                </div>
                <div className="flex flex-col  justify-center items-center">
                  <p className="text-xs pt-2">Senior Web Designer</p>
                  <h2 className="text-xl">Saidov Said</h2>
                </div>
              </div>
              <div>
                <div className="hover:bg-green w-52 h-60 object-cover rounded-xl shadow-2xl ">
                  <Image
                    src={Group3}
                    alt="img"
                    className="w-full h-full object-cover px-3 h-56"
                  />
                </div>
                <div className="flex flex-col justify-center items-center">
                  <p className="text-xs pt-2">Senior Web Designer</p>
                  <h2 className="text-xl">Saidov Said</h2>
                </div>
              </div>
              <div>
                <div className="hover:bg-green w-52 h-60 object-cover rounded-xl shadow-2xl ">
                  <Image
                    src={Group4}
                    alt="img"
                    className="w-full h-full object-cover px-3 h-56"
                  />
                </div>
                <div className="flex flex-col justify-center items-center">
                  <p className="text-xs pt-2">Senior Web Designer</p>
                  <h2 className="text-xl">Saidov Said</h2>
                </div>
              </div>
            </div>
          </Marquee>
        {/* </div> */}
      </div>
    </div>
  );
}
