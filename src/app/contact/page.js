import Image from "next/image";
import pkalast from "../../../public/background/pkalast.png";
import NavBar from "../components/navigation/Navbar";
import Footer from "../components/navigation/Footer";
import Starsbg from "../components/Starsbg";

export default function Contact() {
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
   
        </div>
        <Footer />
      </div>
    </div>

  );
}