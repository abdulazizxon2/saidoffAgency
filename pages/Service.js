import Footer from "@/src/components/Footer";
import Navbar from "@/src/components/Navbar";
import OverviewFaq from "@/src/container/home/OverviewFaq";
import OverviewSuggestions from "@/src/container/home/OverviewSuggestions";
import ServiceAbout from "@/src/container/ourService/ServiceAbout";
import Servicesection from "@/src/container/ourService/Servicesection";
import React from "react";

export default function OurSevrice() {
  return (
    <div>
      <div className="conatiner mx-auto overflow-hidden ">
        <Navbar />
        <Servicesection />
        <ServiceAbout />
        <OverviewSuggestions />
        <OverviewFaq />
        <Footer />
      </div>
    </div>
  );
}
