import { useRouter } from "next/router";
import fon from "../../../public/img/image (9).png";
import Image from "next/image";
import Modal from "@/src/components/Modal";
import { useState } from "react";
import { StarS } from "@/public/icon/icon";

const Servicesection = () => {
  const router = useRouter();
  const { type } = router.query;
  const [showModal, setShowModal] = useState(false);

  const serviceData = [
    {
      type: "Veb-sayt",
      title1: "Web sayt",
      title2: "yaratish xizmati",
      description:
        "Biz veb-sayt bo'yicha professional foydalanish taklif qilamiz. Zamonaviy dizayn va yuqori sifatli funktsiyalar bilan o'z brendingizni sifatli yordam beradi.",
    },
    {
      type: "Mobil ilova dizayni",
      title1: "Mobil ilova",
      title2: "dizayn xizmati",
      description:
        "Bizning mobil ilova dizayn xizmati funksional va intuitiv interfeyslar yaratishga qaratilgan. Foydalanuvchi tajribasini yuksaltirishga yordam beramiz.",
    },
    {
      type: "Grafik dizayn",
      title1: "Grafik dizayn",
      title2: "yaratish xizmati",
      description:
        "Biz kreativ va professional grafik dizayn yaratish xizmatini taqdim etamiz. Brendingizni vizual jihatdan ta’sirchan qilishda yordam beramiz.",
    },
    {
      type: "Veb-dizayn",
      title1: "Web dizayn",
      title2: "yaratish xizmati",
      description:
        "Biz zamonaviy va funksional web dizayn yaratish xizmatini taklif qilamiz. Saytingizni jozibali va foydalanuvchilar uchun qulay qilishga yordam beramiz.",
    },
  ];

  const renderContent = () => {
    const selectedService = serviceData.find((service) => service.type === type);

    if (!selectedService) {
      return <div>Ma'lumot mavjud emas</div>;
    }

    return (
      <div>
        <div className="flex items-center justify-around max-md:flex-col">
          <div>
            <h2 className="text-white text-7xl uppercase max-md:text-5xl">
              {selectedService.title1}
            </h2>
            <h2 className="text-white text-[45px] uppercase max-md:text-[26px]">
              {selectedService.title2}
            </h2>
          </div>
          <div>
            <p className="text-white w-[440px] max-md:text-[15px] max-md:text-center">
              {selectedService.description}
            </p>
          </div>
        </div>
        <div className="md:float-right md:mr-52 max-md:flex max-md:justify-center">
          <button
            onClick={() => setShowModal(true)}
            className="bg-green px-8 py-2 text-2xl font-bold shadow-inner rounded-full mt-10"
          >
            Buyurtma bering
          </button>
        </div>
        <div className="relative top-6 left-16 inline-block">
          <StarS />
        </div>
      </div>
    );
  };
  
  return (
    <div>
      <div className="relative h-[120vh] md:h-100vh lg:max-h-[1038px] py-[100px] mb-10">
        <div className="container mx-auto py-16 max-w-full">
          <Image
            src={fon}
            alt="rasm"
            className="absolute w-full top-0 h-full inset-0 object-fill z-[-1]"
          />
      <Modal showModal={showModal} setShowModal={setShowModal} />
          <div className="pt-24">{renderContent()}</div>
        </div>
      </div>
    </div>
  );
};

export default Servicesection;
