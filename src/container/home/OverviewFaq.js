import { Arrow, Arrow1 } from "@/public/icon/icon";
import { useState } from "react";

export default function OverviewFaq() {
  const [isOpen, setIsOpen] = useState(false);

 
  const [openIndex, setOpenIndex] = useState(0); 

  const faqs = [
    {
      question: "Loyihani amalga oshirish uchun qancha vaqt kerak bo'ladi?",
      answer:
        "Har bir loyiha o'ziga xos bo'lib, muddati loyihaning murakkabligiga bog'liq. Biz ishni maksimal tezlikda va sifatli bajarishga harakat qilamiz.",
    },
    {
      question: "Xizmatlaringiz narxi qanday aniqlanadi?",
      answer: "Narxlar loyihaning hajmi va talablariga ko'ra o'zgaradi.",
    },
    {
      question: "Siz qanday IT xizmatlarni taklif qilasiz?",
      answer:
        "Biz keng turdagi IT xizmatlarini taklif etamiz, jumladan, veb-saytlar yaratish, mobil ilovalar ishlab chiqish va boshqalar.",
    },
    {
      question: "Sizning xizmatlaringizga qanday qilib buyurtma berish mumkin?",
      answer:
        "Biz bilan bog'lanish uchun saytdagi bog'lanish formasi orqali murojaat qiling.",
    },
    {
      question: "Saytingizda texnik yordam ko'rsatasizmi?",
      answer: "Ha, biz doimiy texnik yordamni taqdim etamiz.",
    },
  ];

  const toggleFAQ = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div>
      <div className="container mx-auto">
        <div className="flex justify-center items-center w-3/4 mx-auto text-center">
          <div>
            <h1 className="font-extrabold text-4xl max-md:text-3xl">
              Sizda Savvollar Bo’lsa, Bizda{" "}
              <span className="bg-green px-3 py-[3px] inline-block transform -skew-x-12 rounded-lg">
                <span className="inline-block transform skew-x-12">
                  Javoblar Bor
                </span>
              </span>
            </h1>
          </div>
        </div>
        <div className="relative right-16 max-md:right-6 ml-2 bottom-16">
          <h2 className="bg-green px-3 py-[3px] text-xl inline-block -rotate-90 rounded-lg">
            FAQ
          </h2>
        </div>
        <div className="mt-10 mb-20">
          {/* FAQ Section */}
          <div className="space-y-4">
            {faqs.map((faq, index) => {
              return (
                <div
                  key={index}
                  className="flex flex-col justify-center w-2/4 max-md:w-2/3 mx-auto border-b-2"
                >
                  <div
                    className="flex justify-between items-center cursor-pointer "
                    onClick={() => toggleFAQ(index)}
                  >
                    <h2 className="text-xl max-md:text-base font-medium">{faq.question}</h2>
                    {openIndex === index ? <div className="max-md:h-[4px] md:h-3"><Arrow /></div> : <div className="max-md:h-[4px] md:h-3"><Arrow1 /></div>}
                  </div>
                  <div
                    className={`mt-2 transition-all duration-300 ${
                      openIndex === index
                        ? "max-h-96 opacity-100"
                        : "max-h-0 opacity-0"
                    } overflow-hidden`}
                  >
                    <p className="text-gray-600 text-lg max-md:text-sm pb-2">{faq.answer}</p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
}
