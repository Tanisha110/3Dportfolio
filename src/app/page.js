import Image from "next/image";
import pkalast from "../../public/background/pkalast.png";
import RenderModel from "./components/RenderModel";
import { Uranus } from "./components/models/Uranus";
import Navigation from "./components/navigation";
import NavBar from "./components/navigation/Navbar";
import Footer from "./components/navigation/Footer";
import LeftIntroSec from "./components/LeftIntroSec";
import Starsbg from "./components/Starsbg"; // Import here

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between relative">
      {/* ⭐ Stars background */}
      <Starsbg />

      {/* 🖼️ Background image */}
      <Image
        src={pkalast}
        alt="background-image"
        fill
        className="w-full h-full object-cover object-center opacity-100 z-[-20]" // Set lower z-index
      />

      <NavBar />
      <div className="w-full flex">
        <LeftIntroSec />
        <div className="w-1/2 h-screen flex justify-start items-center ml-auto z-[10]">
          <Navigation />
          <RenderModel>
            <Uranus/>
          </RenderModel>
        </div>
      </div>
      <Footer />
    </main>
  );
}
