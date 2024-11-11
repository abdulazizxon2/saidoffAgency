import { ArrowS } from "@/public/icon/icon";
import Link from "next/link";

const services = {
  "Dizayner Xizmatlar": [
    { name: "Veb-sayt", link: "/Service?type=Veb-sayt" },
    { name: "Mobil ilova dizayni", link: "/Service?type=Mobil ilova dizayni" },
    { name: "Grafik dizayn", link: "/Service?type=Grafik dizayn" },
    { name: "UX dizayni", link: "" },
    { name: "Interfeys dizayni (UI)", link: "" },
    { name: "Dasturiy UI/UX audit", link: "" },
  ],
  "IT Xizmatlar": [
    { name: "Veb-hosting", link: "" },
    { name: "Bulutli saqlash", link: "" },
    { name: "Tarmoqni boshqarish", link: "" },
    { name: "IT konsalting", link: "" },
    { name: "Texnik yordam", link: "" },
    { name: "C.R.M tizimlar yaratish", link: "" },
  ],
  "Boshqa Xizmatlar": [
    { name: "Veb-dizayn", link: "/Service?type=Veb-dizayn" },
    { name: "Bulutli saqlash", link: "" },
    { name: "Tarmoqni boshqarish", link: "" },
    { name: "IT konsalting", link: "" },
    { name: "Texnik yordam", link: "" },
    { name: "C.R.M tizimlar yaratish", link: "" },
  ],
};

const ServiceModal = ({ toggleModal }) => {
  const handleBackgroundClick = (event) => {
    if (event.target === event.currentTarget) {
      toggleModal();
    }
  };

  return (
    <div>
      <div className="container mx-auto bg-suns">
        <div
          className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 h-[100vh]"
          onClick={handleBackgroundClick}
        >
          <div
            className="py-6 rounded-2xl flex justify-around w-full mx-20 bg-night max-md:flex-col max-md:p-10"
            onClick={(e) => e.stopPropagation()}
          >
            {Object.entries(services).map(([section, items]) => (
              <div key={section} className="flex flex-col py-16">
                <h2 className="text-green text-2xl pb-16 uppercase font-normal">
                  {section}
                </h2>
                <div className="flex flex-col gap-4">
                  {items.map(({ name, link }) => (
                    <Link href={link} passHref className="text-blue-500 text-white" key={name}>
                      <div
                        className="flex items-center gap-4 text-2xl"
                        onClick={link && toggleModal}
                      >
                        <h3>{name}</h3> <ArrowS />
                      </div>
                    </Link>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ServiceModal;
