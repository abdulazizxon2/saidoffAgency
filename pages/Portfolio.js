import Footer from "@/src/components/Footer";
import Navbar from "@/src/components/Navbar";
import OverviewFaq from "@/src/container/home/OverviewFaq";
import PortfolioHeader from "@/src/container/portfolio/PortfolioHeader";
import PortfolioProject from "@/src/container/portfolio/PortfolioProject";
import React from "react";

export default function Portfolio() {
  return (
    <div>
      <div className="conatiner mx-auto overflow-hidden ">
        <Navbar />
        <PortfolioHeader/>
        <PortfolioProject/>
        <OverviewFaq />
        <Footer />
      </div>
    </div>
  );
}
