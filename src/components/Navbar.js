import Star, { Close, Globe, Hamburger } from "@/public/icon/icon";
import Link from "next/link";
import React, { useState } from "react";
import Modal from "./Modal";

export default function Navbar() {
  const [showLanguages, setShowLanguages] = useState(false);
  const [selectedLanguage, setSelectedLanguage] = useState(""); // Tanlangan til
  const [isMenuOpen, setIsMenuOpen] = useState(false); // Menyu ochilish/yopilish holati

  const handleLanguageClick = (language) => {
    setSelectedLanguage(language);
    setShowLanguages(false); // Til tanlanganda yana globus qaytadi
  };

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen); // Menyuni ochish/yopish
  };

  const links = [
    { href: "/", label: "Home" },
    { href: "/AboutUs", label: "About Us" },
    { href: "/OurService", label: "Our service" },
    { href: "/Portfolio", label: "Portfolio" },
  ];

  const [showModal, setShowModal] = useState(false);

  return (
    <div>
      {/* LG NAVBAR */}
      <div
        className={`left-0 right-0  z-10 w-full transition-all duration-500 fixed top-0`}
      >
        <div>
          <div className={`z-10 max-md:hidden  bg-inherit backdrop-blur`}>
            <div className="container max-w-[1440px] mx-auto">
              <div className="flex items-center  justify-between px-20 py-2 rounded-full bg-green relative">
                <div className="flex gap-10 items-center">
                  <h3 className="text-2xl">+998 90 123 4567</h3>
                  <Star />
                  <h3 className="text-xl">saidoffagency@gmail.com</h3>
                </div>
                <div className="flex gap-5">
                  {["Uz", "Ru", "Eng"].map((lang, index) => (
                    <button
                      key={index}
                      onClick={() => handleLanguageClick(lang)}
                      className={`${
                        selectedLanguage === lang
                          ? "bg-black text-white"
                          : "text-black"
                      } font-bold py-2 px-2 rounded-lg hover:px-[7px] hover:py-[7px] hover:border-[1px] hover:border-black transition duration-200`}
                    >
                      {lang}
                    </button>
                  ))}
                </div>
              </div>
              <div className="flex items-center  justify-between px-20 pt-8 pb-3">
                <div>
                  <Link href={"/"}>
                    <h2 className="text-5xl text-white">Saidoff</h2>
                  </Link>
                </div>
                <div className="flex items-center gap-20 text-lg text-white">
                  {links.map((link) => (
                    <Link key={link.href} href={link.href}>
                      <h2 className="hover:text-green">{link.label}</h2>
                    </Link>
                  ))}
                </div>
                <div>
                  <button
                    onClick={() => setShowModal(true)}
                    className="bg-green px-14 py-4 text-base font-bold shadow-inner rounded-3xl custom-shadow"
                  >
                    Bog’lanish
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* MD NAVBAR */}
      <div
        className={`container mx-auto fixed top-0 z-10 z-[1000]${
          showModal ? "" : "-z-10"
        }`}
      >
        <Modal showModal={showModal} setShowModal={setShowModal} />

        <div
          className={`${
            isMenuOpen ? "flex" : "hidden"
          } flex-col md:hidden absolute z-10 h-[100vh] w-full bg-blacc gap-8 text-lg text-white`}
        >
          <div className="flex items-center justify-around">
            <div className="pl-10 pt-10">
              <h2 className="text-3xl">
                <Link href={"/"}>Saidoff</Link>
              </h2>
              <h2 className="text-xs">Biznesingizni birga quramiz</h2>
            </div>
            <div>
              <button onClick={toggleMenu}>
                <Close />
              </button>{" "}
              {/* Close button */}
            </div>
          </div>
          <div className="flex flex-col gap-6">
            {links.map((link) => (
              <Link key={link.href} href={link.href}>
                <h2 className="hover:text-green border-b-[1px] border-foggy pb-5 pl-20">
                  {link.label}
                </h2>
              </Link>
            ))}
            <div className="flex flex-col gap-8 justify-center items-center">
              <h1 className="font-normal text-base">Contact us</h1>
              <div className="flex flex-col gap-3 justify-center items-center">
                <h2 className="text-3xl">+998 95 181 0330 </h2>
                <h2 className="text-sm">saidoffagency@gmail.com </h2>
              </div>
            </div>
          </div>
        </div>
        <div className="flex items-center md:hidden justify-between px-3 py-3 mx-auto bg-inherit backdrop-blur ">
          <button onClick={toggleMenu} className="bg-green rounded-lg p-[4px]">
            <Hamburger />
          </button>
          <div>
            <Link href={"/"}>
              <h2 className="text-3xl text-white">Saidoff</h2>
            </Link>
          </div>
          <div className="bg-green rounded-lg">
            {!showLanguages ? (
              <button
                onClick={() => setShowLanguages(!showLanguages)}
                className="px-[4px] cursor-pointer py-[4px]"
              >
                <Globe />
              </button>
            ) : (
              <div
                className={`flex  origin-top transition-transform transform ${
                  showLanguages ? "scale-y-100" : "scale-y-0"
                } duration-300 ease-out`}
              >
                {["Uz", "Ru", "Eng"].map((lang, index) => (
                  <button
                    key={index}
                    onClick={() => handleLanguageClick(lang)}
                    className={`${
                      selectedLanguage === lang
                        ? "bg-black text-white"
                        : "text-black"
                    } font-bold py-[5px] px-[5px] m-[5px] rounded-lg hover:px-[4px] hover:py-[4px] hover:border-[1px] hover:border-black transition duration-200`}
                  >
                    {lang}
                  </button>
                ))}
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
