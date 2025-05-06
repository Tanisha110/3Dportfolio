import Image from "next/image";
import pkalast from "../../../public/background/pkalast.png";
import NavBar from "../components/navigation/Navbar";
import Footer from "../components/navigation/Footer";
import Starsbg from "../components/Starsbg";
import RenderModel from "../components/RenderModel";
import Astronaut from "../components/models/Little_mrastronaut";
import AboutDetail from "../components/about";

export default function Home() {
  return (
    <div className="relative min-h-screen w-screen overflow-x-hidden">
      
      {/* 🔵 Fixed background layer */}
      <div className="fixed inset-0 z-[-20]">
        <Starsbg />
        <Image
          src={pkalast}
          alt="background-image"
          layout="fill"
          className="object-cover object-center"
        />
      </div>

      {/* 🔵 Scrollable Content */}
      <div className="relative z-10">
        <NavBar />
        <div className="relative w-full h-screen">
  {/* Fullscreen 3D Model */}
  <div className="absolute inset-0">
    <RenderModel>
      <Astronaut />
    </RenderModel>
  </div>

  {/* Slightly lower Text Overlay */}
  <div className="absolute w-full top-[50%] left-1/2 transform -translate-x-1/2 -translate-y-0 text-center px-4">
    <h1 className="font-bold text-5xl md:text-8xl text-[#7573a5]">
      Tanisha Sonkar
    </h1>
    <p className="mt-4 font-light text-foreground text-lg max-w-2xl mx-auto">
      An enthusiastic Electrical Engineering sophomore with a passion for software development, actively expanding my skills in web and app development.
    </p>

    {/* About Section with less top margin */}
    <div className="mt-6 md:mt-10 w-full">
      <AboutDetail />
    </div>
  </div>
</div>


        <Footer />
      </div>
    </div>

  );
}

  