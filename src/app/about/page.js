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

        {/* Hero Section */}
<div className="relative w-full h-screen">
  {/* Fullscreen 3D Model */}
  <div className="absolute inset-0">
    <RenderModel>
      <Astronaut />
    </RenderModel>
  </div>
{/* Centered Text Overlay */}
<div className="relative w-full h-screen">
  <div className="absolute w-full  top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-[10%] text-center px-4">
    <h1 className="font-bold mt-12 text-6xl md:text-8xl text-[#7573a5]">
      Tanisha Sonkar
    </h1>
    <p className="mt-3 font-light text-foreground text-lg max-w-2xl mx-auto">
      An Electrical Engineering sophomore with a growing interest in software development.
    </p>
    <div className="relative mt-[-3rem]">  {/* Adjust value to shift up the About section */}
    <AboutDetail />
  </div>
  </div>

  {/* About Section with Reduced Gap */}
  
</div>


</div>
        <Footer />
      </div>
    </div>

  );
}

  