import Star, { Close, Globe, Hamburger } from "@/public/icon/icon";
import Link from "next/link";
import React, { useState } from "react";
import Modal from "./Modal"; 
import ServiceModal from "./ServiceModal";

export default function Navbar() {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const toggleModal = () => {
    setIsModalOpen(!isModalOpen);
  };

  const [showLanguages, setShowLanguages] = useState(false);
  const [selectedLanguage, setSelectedLanguage] = useState("");
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [showModal, setShowModal] = useState(false); 

  const handleLanguageClick = (language) => {
    setSelectedLanguage(language);
    setShowLanguages(false); 
  };

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  // Our service tugmasi alohida massivda
  const links = [
    { href: "/", label: "Home" },
    { href: "/AboutUs", label: "About Us" },
    { type: "button", label: "Our service", action: toggleModal }, 
    { href: "/Portfolio", label: "Portfolio" },
  ];

  return (
    <div>
      {/* LG NAVBAR */}
      <div className={`left-0 right-0 z-10 w-full transition-all duration-500 fixed top-0`}>
        <div>
          <div className={`z-10 max-md:hidden bg-inherit backdrop-blur`}>
            <div className="container max-w-[1440px] mx-auto">
              <div className="flex items-center justify-between px-20 py-2 rounded-full bg-green relative">
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
              <div className="flex items-center justify-between px-20 pt-8 pb-3">
                <div>
                  <Link href={"/"}>
                    <h2 className="text-5xl text-white">Saidoff</h2>
                  </Link>
                </div>
                <div className="flex items-center gap-20 text-lg text-white">
                  {links.map((link) =>
                    link.type === "button" ? (
                      <button key={link.label} onClick={link.action} className="hover:text-green">
                       <h2>{link.label}</h2> 
                      </button>
                    ) : (
                      <Link key={link.href} href={link.href}>
                        <h2 className="hover:text-green">{link.label}</h2>
                      </Link>
                    )
                  )}
                  
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
              </button>
            </div>
          </div>
          <div className="flex flex-col gap-6">
            {links.map((link) =>
              link.type === "button" ? (
                <button
                  key={link.label}
                  onClick={link.action}
                  className="hover:text-green border-b-[1px] border-foggy pb-5 "
                  >
                  {link.label}
                </button>
              ) : (
                <Link key={link.href} href={link.href}>
                  <h2 className="hover:text-green border-b-[1px] border-foggy pb-5 pl-20">
                    {link.label}
                  </h2>
                </Link>
              )
            )}

            <div className="flex flex-col gap-8 justify-center items-center">
              <h1 className="font-normal text-base">Contact us</h1>
              <div className="flex flex-col gap-3 justify-center items-center">
                <h2 className="text-3xl">+998 95 181 0330</h2>
                <h2 className="text-sm">saidoffagency@gmail.com</h2>
              </div>
            </div>
          </div>
        </div>

        <div className="flex items-center md:hidden justify-between px-3 py-3 mx-auto bg-inherit backdrop-blur">
          <button onClick={toggleMenu} className="bg-green rounded-lg p-[4px]">
            <Hamburger />
          </button>
          <div>
            <Link href={"/"}>
              <h2 className="text-3xl text-white bottom-4 -z-10">Saidoff</h2>
            </Link>
          </div>
          <div className="bg-green rounded-lg">
            <div className="bg-green rounded-lg flex items-center relative">
              <button
                onClick={() => setShowLanguages(!showLanguages)}
                className="px-[6px] cursor-pointer py-[4px]"
                >
                <Globe />
              </button>

              {showLanguages && (
                <div className="absolute right-0 top-full mt-1 bg-green rounded-lg shadow-lg z-50 flex flex-col gap-1">
                  {["Uz", "Ru", "Eng"].map((lang, index) => (
                    <button
                    key={index}
                    onClick={() => handleLanguageClick(lang)}
                    className={`${
                        selectedLanguage === lang
                          ? "bg-black text-white"
                          : "text-black"
                        } font-bold py-[5px] px-[8px] mx-[3px] my-[3px] rounded-lg hover:mx-[2px] hover:my-[2px] hover:border-[1px] hover:border-black transition duration-200`}
                    >
                      {lang}
                    </button>
                  ))}
                </div>
              )}
            </div>
          </div>
        </div>
      {isModalOpen && <ServiceModal toggleModal={toggleModal} />}
      </div>
    </div>
  );
}
