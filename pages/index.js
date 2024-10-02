import Footer from "@/src/components/Footer";
import Modal from "@/src/components/Modal";
import Navbar from "@/src/components/Navbar";
import OverviewChoose from "@/src/container/home/OverviewChoose";
import OverviewFaq from "@/src/container/home/OverviewFaq";
import OverviewHeader from "@/src/container/home/OverviewHeader";
import OverviewPartners from "@/src/container/home/OverviewPartners";
import OverviewServices from "@/src/container/home/OverviewServices";
import OverviewSuggestions from "@/src/container/home/OverviewSuggestions";
import OverviuwGroup from "@/src/container/home/OverviuwGroup";
// import localFont from "next/font/local";

export default function Home() {
  
  return (
    <div>
      <main>
        <div className="conatiner mx-auto overflow-hidden ">
          <Navbar />
          <OverviewHeader />
          <OverviewChoose />
          <OverviewServices/>
          <OverviewPartners/>
          <OverviewSuggestions/>
          <OverviuwGroup/>
          <OverviewFaq/>
          <Footer/>
        </div>
      </main>
    </div>
  );
}
