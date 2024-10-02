import React from "react";
import Backgrounds from "../../../public/img/Background (1).png";
import Backgroundd from "../../../public/img/Group 142.png";
import Image from "next/image";
import { Complate } from "@/public/icon/icon";

export default function OverviewSuggestions() {
  const plans = [
    {
      name: "Basic Plan",
      price: "$10",
      per: "per users",
      int: "per month",
      features: "Features",
      first: "First, add your mobile number",
      plus: "Everything in the free plan plus ...",
      feature: [
        "Access to basic features",
        "Access to basic features",
        "Access to basic features",
        "Access to basic features",
        "Access to basic features",
      ],
    },
    {
      name: "Business Plan",
      price: "$20",
      per: "per users",
      int: "per month",
      features: "Features",
      first: "First, add your mobile number",
      plus: "Everything in the free plan plus ...",
      feature: [
        "Access to basic features",
        "Access to basic features",
        "Access to basic features",
        "Access to basic features",
        "Access to basic features",
      ],
      isHighlighted: true,
    },
    {
      name: "Enterprise Plan",
      price: "$50",
      per: "per users",
      int: "per month",
      features: "Features",
      first: "First, add your mobile number",
      plus: "Everything in the free plan plus ...",
      feature: [
        "Access to basic features",
        "Access to basic features",
        "Access to basic features",
        "Access to basic features",
        "Access to basic features",
      ],
    },
  ];

  return (
    <div className="relative">
      {/* Background Image */}
      <div className="container relative mx-auto max-w-[1440px] mt-40">
        <div className="absolute w-full top-0 h-full inset-0 object-fill z-[-1]">
          <Image src={Backgrounds} alt="img" className="hidden md:block" />
          <Image src={Backgroundd} alt="img" className="block md:hidden w-full" />
        </div>
      </div>

      {/* Content Section */}
      <div className="relative z-[1]">
        <div className="relative top-60 max-md:top-80 max-md:right-10">
          <div className="pl-20 flex flex-col justify-center items-center">
            <h1 className="text-5xl max-md:text-3xl font-extrabold text-white">
              Bizda siz uchun{" "}
            </h1>
            <h1 className="bg-green text-black text-6xl max-md:text-4xl font-extrabold px-3 py-[3px] inline-block transform -skew-x-12 rounded-lg">
              <span className="inline-block transform skew-x-12">
                Takliflar bor
              </span>
            </h1>
            <div className="text-white w-2/4 text-lg max-md:text-base max-md:w-full max-md:pb-10 text-center mt-20">
              <p>
                To‘g‘ri tanlangan yechim – muvaffaqiyat kaliti. Har bir biznes
                o‘ziga mos ko‘makni topishi kerak, va biz sizning
                ehtiyojlaringizni mukammal qondiradigan tariflarni taklif
                qilamiz.
              </p>
            </div>
          </div>
        </div>

        {/* Pricing Section */}
        <div className="relative z-[1] top-80">
          <div className="max-md:grid md:flex justify-center items-center gap-8">
            {plans.map((plan, index) => (
              <div
                key={index}
                className={`p-6 w-80 rounded-3xl shadow-lg ${
                  plan.isHighlighted
                    ? "bg-black text-white border-2 border-green"
                    : "bg-white text-black"
                }`}
              >
                <div className="flex gap-10 items-center">
                  <h2
                    className={`text-xl font-bold ${
                      plan.isHighlighted ? "text-green" : "text-black"
                    }`}
                  >
                    {plan.name}
                  </h2>
                  <h2
                    className={`${
                      plan.isHighlighted
                        ? "inline bg-green text-black py-[1px] px-2 rounded-full"
                        : "hidden"
                    }`}
                  >
                    Popular
                  </h2>
                </div>
                <div className="flex items-center gap-10">
                  <h2 className="text-6xl my-8">{plan.price}</h2>
                  <div>
                    <p className="text-sm">{plan.per}</p>
                    <p className="text-sm">{plan.int}</p>
                  </div>
                </div>
                <div className="pb-5">
                  <p>{plan.first}</p>
                </div>
                <button
                  className={`w-full py-2 mt-4 ${
                    plan.isHighlighted
                      ? "bg-green text-black"
                      : "bg-black text-white"
                  }  rounded`}
                >
                  Get started
                </button>
                <div className="pt-12 pb-8">
                  <h2>{plan.features}</h2>
                  <p>{plan.plus}</p>
                </div>
                <ul className="mt-6">
                  {plan.feature.map((feature, i) => (
                    <li key={i} className="flex items-center gap-2 mb-2">
                      <span>
                        <Complate />
                      </span>{" "}
                      {feature}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>

        {/* Add extra padding to prevent overlap */}
        <div className=""></div>
      </div>
    </div>
  );
}