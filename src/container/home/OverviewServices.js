import { Arrow3, Arrow4, Arrow5, Arrow6 } from "@/public/icon/icon";
import Image from "next/image";
import React, { useRef, useState } from "react";
import Quality from "../../../public/img/Rectangle 191 (1).png";

const services = [
  {
    id: 0,
    title: "IT xizmatlari",
    items: [
      "Web saytlar yaratish",
      "Mobil ilovalar yaratish",
      "Telegram bot yaratish",
      "C.R.M & E.R.P integratsiyasi",
    ],
  },
  {
    id: 1,
    title: "HR xizmati",
    items: [
      "Ishga yollash xizmati",
      "Kadrlarni tayyorlash & rivojlantirish",
      "Xodimlarni tanlash & baholash",
      "TurishHR-noldan tizimlari",
    ],
  },
  {
    id: 2,
    title: "Marketing xizmati",
    items: [
      "Marketing strategiya yaratish",
      "Reklama byudjetini yaratish",
      "Maqsadli auditoriya yaratish",
      "Savdo hajmini oshirish",
    ],
  },
  {
    id: 3,
    title: "Moliya xizmati",
    items: [
      "Xavfsizlik auditini yaratish",
      "Korparativ ma’lumotlarni himoya qilish",
    ],
  },
];

export default function OverviewServices() {
  const [openMenu, setOpenMenu] = useState(null);
  const accordionRef = useRef([]);

  const toggleMenu = (menuId) => {
    if (openMenu === menuId) {
      setOpenMenu(null);
    } else {
      setOpenMenu(menuId);
    }
  };

  const isOpen = (menuId) => openMenu === menuId;

  return (
    <div>
      <div className="container mx-auto mt-24 mb-20">
          <div>
            <div className="pl-20">
              <div className="w-2/4">
                <h1 className="font-extrabold text-4xl max-md:text-2xl">
                 <span className="max-md:flex">
                 Bizning{" "}
                  <span className="bg-green px-3 py-[3px] inline-block transform -skew-x-12 rounded-lg">
                    <span className="inline-block transform skew-x-12">
                      Sifatli
                    </span>
                  </span>
                 </span>
                  <span className="font-extrabold text-4xl max-md:text-2xl">Xizmatlar</span>
                </h1>
              </div>
            </div>
            <div className="relative right-24 max-md:right-16 ml-2 max-md:ml-3 bottom-16">
              <h2 className="bg-green px-3 py-[3px] text-xl inline-block -rotate-90 rounded-lg">
                Coworkers
              </h2>
            </div>
          </div>
          <div className="flex justify-center gap-14 max-md:flex-col">
            <div className="flex flex-col w-3/4 pl-20">
              <div className="w-[490px] max-md:w-full text-xl font-medium">
                <p className="max-md:hidden">
                  G‘oyadan boshlab biznes rejani amalga oshirishgacha bo‘lgan
                  davrda sizning biznesingizni muvaffaqiyatli boshlab,
                  boshqarish uchun barcha xizmatlarni taklif etamiz.
                </p>
                <p className="md:hidden">
                Biznesingizni muvaffaqiyatli boshlash va boshqarish uchun barcha xizmatlarni taklif etamiz.
                </p>
              </div>
              <div className="services-list mt-10 flex flex-col gap-4">
                {services.map((service) => (
                  <div
                    key={service.id}
                    className="service-item rounded-[35px] border shadow-md overflow-hidden"
                  >
                    <button
                      onClick={() => toggleMenu(service.id)}
                      className={`flex relative z-10 justify-between items-center rounded-[35px] w-full px-4 ${
                        isOpen(service.id) ? "bg-black" : "bg-transparent"
                      } transition-colors duration-300`}
                    >
                      <div className="flex md:gap-3 text-3xl max-md:py-4 max-md:text-lg">
                        <h1
                          className={`${
                            isOpen(service.id) ? "text-green" : "text-inherit"
                          }`}
                        >
                          {String(service.id + 1).padStart(2, "0")}
                        </h1>
                        <h2
                          className={`text-[#BBB7B7] max-md:pl-2 ${
                            isOpen(service.id) ? "text-slate-50" : ""
                          }`}
                        >
                          {service.title}
                        </h2>
                      </div>
                      {isOpen(service.id) ? <div> <Arrow3 /></div> : <Arrow4 />}
                    </button>
                    {/* accordion-options */}
                    <div
                      className="menu-content duration-300 overflow-hidden z-[-1] text-xl max-md:text-sm"
                      ref={(e) => (accordionRef.current[service.id] = e)}
                      style={{
                        height:
                          openMenu === service.id
                            ? `${
                                accordionRef.current[service.id]?.scrollHeight
                              }px`
                            : "0px",
                      }}
                    >
                      <div className={`p-4`}>
                        {service.items.map((item, index) => (
                          <h1
                            key={index}
                            className="shadow -mx-4 p-4 rounded-full border-black"
                          >
                            {item}
                          </h1>
                        ))}
                        <h1 className="text-green p-2 mt-2 rounded-md text-center">
                          Batafsil
                        </h1>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            <div className="flex gap-5 max-md:p-4">
              <div >
                <Image src={Quality} alt="img" className="object-cover rounded-3xl h-[485px] max-md:h-full"/>
              </div>
              <div className="flex flex-col gap-6 w-full">
                <div className="flex flex-col bg-black text-white rounded-3xl">
                  <p className="px-6 pt-10 text-md max-md:text-[13px]">
                    Lorem ipsum dolor sit amet consectetur. Aliquet at don
                  </p>
                  <button className="flex px-8 pt-16 max-md:pt-10 pb-7 items-center justify-between">
                    <h1 className="text-xl">Batafsil</h1>
                    <div className="bg-italy rounded-full">
                      <Arrow5 />
                    </div>
                  </button>
                </div>
                <div className="flex  flex-col bg-green text-white rounded-3xl">
                  <p className="px-6 pt-10 text-black text-md max-md:text-[13px]">
                    Lorem ipsum dolor sit amet consectetur. Aliquet at don
                  </p>
                  <button className="flex px-5 pt-16 max-md:pt-10 pb-7 items-center justify-between">
                    <h1 className="text-black text-xl">Partfolio</h1>
                    <div className="bg-white rounded-full">
                      <Arrow6 />
                    </div>
                  </button>
                </div>
              </div>
            </div>
        </div>
      </div>
    </div>
  );
}