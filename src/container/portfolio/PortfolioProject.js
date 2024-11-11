import Image from "next/image";
import React from "react";
import { IoMdArrowUp } from "react-icons/io";
import CardImg from "../../../public/img/Rectangle 216.png";
import { BtnStar } from "@/public/icon/icon";

const cards = [
  { title: "Chere 1", imgSrc: CardImg },
  { title: "Chere 2", imgSrc: CardImg },
  { title: "Chere 3", imgSrc: CardImg },
  { title: "Chere 1", imgSrc: CardImg },
  { title: "Chere 2", imgSrc: CardImg },
  { title: "Chere 3", imgSrc: CardImg },
  { title: "Chere 1", imgSrc: CardImg },
  { title: "Chere 2", imgSrc: CardImg },
  { title: "Chere 3", imgSrc: CardImg },
];

export default function PortfolioProject() {
  return (
    <div>
      <div className="container mx-auto">
        <div className="mb-20 mt-56">
          <div className="mb-20 ml-14">
            <h2 className="uppercase text-4xl">
              bIZ BILAN BIRGA{" "}
              <div className="relative inline-block z-[1] ml-3">
                <span className="text-4xl max-md:text-2xl font-bold">
                  &nbsp;MAQSAd&nbsp;
                </span>
                <div className="absolute bg-green top-1/2 -translate-y-1/2 h-[120%] w-full z-[-1] skew-x-[-15deg] rounded-[16px]" />
              </div>
            </h2>
            <h2 className="text-4xl uppercase">Yaratish</h2>
            <p className="w-[580px] mt-8">
              Birgalikda yangi imkoniyatlar sari qadam tashlaymiz. Har bir
              qadamingizda biz yoningizda turib, sizning muvaffaqiyatli
              kelajagingizni yaratishda qo'llab-quvvatlaymiz. Orzularingizga biz
              bilan birga erishing!
            </p>
          </div>

          <div className="grid grid-flow-col grid-rows-3 justify-center gap-24">
            {cards.map((card, index) => (
              <div
                key={index}
                className="w-80 h-[540px] bg-gray-100 rounded-3xl overflow-hidden hover:bg-blacc bg-cloud shadow-lg transition-transform duration-300 mb-10"
              >
                <div className="relative h-full w-full group">
                  <div>
                    <Image
                      src={card.imgSrc}
                      alt={card.title}
                      className="h-full w-full object-cover transform transition-transform duration-500 group-hover:translate-x-12 group-hover:-translate-y-14 group-hover:scale-105"
                    />
                  </div>
                  <div className="flex justify-around uppercase mt-5">
                    <button className="flex items-center bg-green rounded-full text-lg font-bold p-2">web sayt <span className="mt-[4px]"><BtnStar /></span></button>
                    <button className="flex items-center bg-green rounded-full  text-lg font-bold p-2">Rebrending<span className="mt-[4px]"><BtnStar /></span></button>
                  </div>
                  <div className="flex justify-center items-center mt-6 flex-col  group-hover:bg-opacity-80 group-hover:text-white p-2 rounded-lg transition-all duration-500">
                    <h2 className="text-3xl">{card.title}</h2>
                    <div className="opacity-0 group-hover:opacity-100 transform group-hover:translate-y-2 transition-all duration-500 bg-green rounded-full rotate-45">
                      <IoMdArrowUp className="text-3xl text-black" />
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
