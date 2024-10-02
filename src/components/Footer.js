import { Facebook, Instagram, LinkedIn, Telegram } from "@/public/icon/icon";
import Link from "next/link";
import React from "react";

export default function Footer() {
  const socialIcons = [
    { Icon: Facebook, hoverColor: "hover:bg-blue-500" },
    { Icon: Instagram, hoverColor: "hover:bg-blue-500" },
    { Icon: LinkedIn, hoverColor: "hover:bg-blue-500" },
    { Icon: Telegram, hoverColor: "hover:bg-red-600" },
  ];

  const footerLinks = [
    { name: "Home", href: "/" },
    { name: "About Us", href: "/AboutUs" },
    { name: "Our Service", href: "/OurService" },
    { name: "Portfolio", href: "/Portfolio" },
  ];

  return (
    <div>
      {/* Social Icons */}
      <div className="bg-black flex items-center justify-center max-md:gap-8 gap-24 pt-16 pb-24">
        {socialIcons.map(({ Icon, hoverColor }, index) => (
          <div
            key={index}
            className={`${hoverColor} hover:scale-110 hover:rounded-full p-2 transition duration-300 ease-in-out`}
          >
            <Icon />
          </div>
        ))}
      </div>

      {/* Footer Links */}
      <div className="flex justify-center items-center bg-black max-md:gap-8 max-md:text-base gap-28 text-lg pb-32 text-white">
        {footerLinks.map((link, index) => (
          <Link href={link.href} key={index}>
            <p className="hover:text-green transition duration-300 ease-in-out cursor-pointer">
              {link.name}
            </p>
          </Link>
        ))}
      </div>

      {/* Contact Info */}
      <div className="text-3xl text-white flex flex-col gap-12 bg-black justify-center items-center">
        <p className="max-md:text-xl">Bog'lanish</p>
        <h3 className="tracking-widest font-black text-4xl max-md:text-3xl">+998 95 181 0330</h3>
        <h1 className="max-md:text-xl">saidoffagency@gmail.com</h1>
      </div>

      {/* Footer Branding */}
      <div className="flex flex-col justify-center items-center bg-black text-white pt-16">
        <p className="max-md:text-base">© 2024 All Rights Reserved</p>
        <h1 className="text-9xl max-md:text-4xl font-bold pb-5 pt-5">Saidoff Group</h1>
      </div>
    </div>
  );
}
