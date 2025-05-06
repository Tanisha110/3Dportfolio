import Image from "next/image";
import pkalast from "../../public/background/pkalast.png";
import RenderModel from "./components/RenderModel";
import { Uranus } from "./components/models/Uranus";
import Navigation from "./components/navigation";
import NavBar from "./components/navigation/Navbar";
import Footer from "./components/navigation/Footer";
import LeftIntroSec from "./components/LeftIntroSec";
import Starsbg from "./components/Starsbg";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between relative overflow-x-hidden">
      {/* ⭐ Stars background */}
      <Starsbg />

      {/* 🖼️ Background image */}
      <Image
        src={pkalast}
        alt="background-image"
        fill
        className="w-full h-full object-cover object-center opacity-100 z-[-20]"
      />

      <NavBar />

      {/* 🔀 Responsive Container */}
      <div className="w-full flex flex-col lg:flex-row items-center justify-between">
        {/* LeftIntroSec should go full width on mobile, 55% on desktop */}
        <div className="w-full lg:w-[55%] h-[50vh] lg:h-screen flex items-center justify-center">
          <LeftIntroSec />
        </div>

        {/* 3D Model and Navigation – full width on mobile, right half on desktop */}
        <div className="w-full lg:w-1/2 h-[50vh] lg:h-screen flex flex-col items-center justify-center relative z-[10]">
          <Navigation />
          <RenderModel>
            <Uranus />
          </RenderModel>
        </div>
      </div>

      <Footer />
    </main>
  );
}
