import { useRouter } from "next/router";
import WebImg1 from "../../../public/img/image (10).png";
import WebImg2 from "../../../public/img/image 56.png";
import WebImg3 from "../../../public/img/image (11).png";
import WebImg4 from "../../../public/img/image (12).png";
import WebImg5 from "../../../public/img/image (13).png";
import WebImg6 from "../../../public/img/image (14).png";
import Image from "next/image";

const ServiceAbout = () => {
  const router = useRouter();

  const { type } = router.query;

  const renderContent = () => {
    switch (type) {
      case "Veb-sayt":
        return (
          <div>
            <div className="mx-4">
              <Image src={WebImg1} alt="img" className="-z-10 max-md:mx-2" />
              <div className="md:w-[480px] max-md:w-[320px] md:p-7 max-md:p-5  shadow-xl rounded-3xl float-right relative -top-28 md:-left-28  bg-white ">
                <div className="relative inline-block z-[1] mb-4">
                  <h1 className="md:text-2xl max-md:text-base font-bold">
                    &nbsp;Asli Web sayt nima?&nbsp;
                  </h1>
                  <div className="absolute bg-green top-1/2 -translate-y-1/2 h-[120%] w-full z-[-1] skew-x-[-15deg] rounded-[16px]" />
                </div>
                <p className="md:text-xl max-md:text-sm">
                  Bu internetda joylashgan sahifalar to‘plami bo‘lib,
                  foydalanuvchilarga ma'lumot, xizmatlar yoki kontent (matn,
                  rasm, video) taqdim etadi. U turli maqsadlar uchun yaratiladi.
                </p>
              </div>
            </div>
            <div className="mx-4">
              <div className="md:w-[480px] max-md:w-[320px] md:p-7 max-md:p-5  shadow-xl rounded-3xl relative top-24 md:left-28 mt-36 drop-shadow-md bg-white">
                <div className="relative inline-block z-[1] mb-5">
                  <h1 className="md:text-2xl max-md:text-base font-bold ">
                    &nbsp;Web saytdan foyda?&nbsp;
                  </h1>
                  <div className="absolute bg-green top-1/2 -translate-y-1/2 h-[120%] w-full z-[-1] skew-x-[-15deg] rounded-[16px]" />
                </div>
                <p className="md:text-xl max-md:text-sm">
                  Bu biznesni kengaytirish, mijozlar bilan bog‘lanish, ma’lumot
                  tarqatish va mahsulot yoki xizmatlarni onlayn ravishda sotish
                  orqali daromad olishdir.
                </p>
              </div>
              <Image src={WebImg2} alt="img" className="-z-10" />
            </div>
          </div>
        );
      case "Mobil ilova dizayni":
        return (
          <div>
            <div className="mx-4">
              <Image src={WebImg5} alt="img" className="-z-10 max-md:mx-2" />
              <div className="md:w-[480px] max-md:w-[320px] md:p-7 max-md:p-5  shadow-xl rounded-3xl float-right relative -top-28 md:-left-28  bg-white ">
                <div className="relative inline-block z-[1] mb-4">
                  <h1 className="md:text-2xl max-md:text-base font-bold">
                    &nbsp;Asli Web sayt nima?&nbsp;
                  </h1>
                  <div className="absolute bg-green top-1/2 -translate-y-1/2 h-[120%] w-full z-[-1] skew-x-[-15deg] rounded-[16px]" />
                </div>
                <p className="md:text-xl max-md:text-sm">
                  Bu internetda joylashgan sahifalar to‘plami bo‘lib,
                  foydalanuvchilarga ma'lumot, xizmatlar yoki kontent (matn,
                  rasm, video) taqdim etadi. U turli maqsadlar uchun yaratiladi.
                </p>
              </div>
            </div>
            <div className="mx-4">
              <div className="md:w-[480px] max-md:w-[320px] md:p-7 max-md:p-5  shadow-xl rounded-3xl relative top-24 md:left-28 mt-36 drop-shadow-md bg-white">
                <div className="relative inline-block z-[1] mb-5">
                  <h1 className="md:text-2xl max-md:text-base font-bold">
                    &nbsp;Web saytdan foyda?&nbsp;
                  </h1>
                  <div className="absolute bg-green top-1/2 -translate-y-1/2 h-[120%] w-full z-[-1] skew-x-[-15deg] rounded-[16px]" />
                </div>
                <p className="md:text-xl max-md:text-sm">
                  Bu biznesni kengaytirish, mijozlar bilan bog‘lanish, ma’lumot
                  tarqatish va mahsulot yoki xizmatlarni onlayn ravishda sotish
                  orqali daromad olishdir.
                </p>
              </div>
              <Image src={WebImg6} alt="img" className="-z-10" />
            </div>
          </div>
        );
      case "Grafik dizayn":
        return (
          <div>
            <div className="mx-4">
              <Image src={WebImg5} alt="img" className="-z-10 max-md:mx-2" />
              <div className="md:w-[480px] max-md:w-[320px] md:p-7 max-md:p-5  shadow-xl rounded-3xl float-right relative -top-28 md:-left-28  bg-white ">
                <div className="relative inline-block z-[1] mb-4">
                  <h1 className="md:text-2xl max-md:text-base font-bold">
                    &nbsp;Asli Web sayt nima?&nbsp;
                  </h1>
                  <div className="absolute bg-green top-1/2 -translate-y-1/2 h-[120%] w-full z-[-1] skew-x-[-15deg] rounded-[16px]" />
                </div>
                <p className="md:text-xl max-md:text-sm">
                  Bu internetda joylashgan sahifalar to‘plami bo‘lib,
                  foydalanuvchilarga ma'lumot, xizmatlar yoki kontent (matn,
                  rasm, video) taqdim etadi. U turli maqsadlar uchun yaratiladi.
                </p>
              </div>
            </div>
            <div className="mx-4">
              <div className="md:w-[480px] max-md:w-[320px] md:p-7 max-md:p-5  shadow-xl rounded-3xl relative top-24 md:left-28 mt-36 drop-shadow-md bg-white">
                <div className="relative inline-block z-[1] mb-5">
                  <h1 className="md:text-2xl max-md:text-base font-bold ">
                    &nbsp;Web saytdan foyda?&nbsp;
                  </h1>
                  <div className="absolute bg-green top-1/2 -translate-y-1/2 h-[120%] w-full z-[-1] skew-x-[-15deg] rounded-[16px]" />
                </div>
                <p className="md:text-xl max-md:text-sm">
                  Bu biznesni kengaytirish, mijozlar bilan bog‘lanish, ma’lumot
                  tarqatish va mahsulot yoki xizmatlarni onlayn ravishda sotish
                  orqali daromad olishdir.
                </p>
              </div>
              <Image src={WebImg6} alt="img" className="-z-10" />
            </div>
          </div>
        );
        case "Veb-dizayn":
        return (
          <div>
            <div className="mx-4">
              <Image src={WebImg3} alt="img" className="-z-10" />
              <div className="md:w-[480px] max-md:w-[320px] md:p-7 max-md:p-5  shadow-xl rounded-3xl float-right relative -top-28 md:-left-28  bg-white ">
                <div className="relative inline-block z-[1] mb-4">
                  <h1 className="md:text-2xl max-md:text-base font-bold">
                    &nbsp;Asli Web sayt nima?&nbsp;
                  </h1>
                  <div className="absolute bg-green top-1/2 -translate-y-1/2 h-[120%] w-full z-[-1] skew-x-[-15deg] rounded-[16px]" />
                </div>
                <p className="md:text-xl max-md:text-sm">
                  Bu internetda joylashgan sahifalar to‘plami bo‘lib,
                  foydalanuvchilarga ma'lumot, xizmatlar yoki kontent (matn,
                  rasm, video) taqdim etadi. U turli maqsadlar uchun yaratiladi.
                </p>
              </div>
            </div>
            <div className="mx-2">
              <div className="md:w-[480px] max-md:w-[320px] md:p-7 max-md:p-5  shadow-xl rounded-3xl relative top-28 md:left-28 mt-36 drop-shadow-md bg-white">
                <div className="relative inline-block z-[1] mb-5">
                  <h1 className="md:text-2xl max-md:text-base font-bold ">
                    &nbsp;Web saytdan foyda?&nbsp;
                  </h1>
                  <div className="absolute bg-green top-1/2 -translate-y-1/2 h-[120%] w-full z-[-1] skew-x-[-15deg] rounded-[16px]" />
                </div>
                <p className="md:text-xl  max-md:text-sm">
                  Bu biznesni kengaytirish, mijozlar bilan bog‘lanish, ma’lumot
                  tarqatish va mahsulot yoki xizmatlarni onlayn ravishda sotish
                  orqali daromad olishdir.
                </p>
              </div>
              <Image src={WebImg3} alt="img" className="-z-10" />
            </div>
          </div>
        );
      default:
        return <div>Ma'lumot mavjud emas</div>;
    }
  };

  return (
    <div>
      <div>
        <div className="container mx-auto py-16">
          <div className="-mt-64">{renderContent()}</div>
        </div>
      </div>
    </div>
  );
};

export default ServiceAbout;
