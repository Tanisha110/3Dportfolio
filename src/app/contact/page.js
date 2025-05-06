import Image from "next/image";
import pkalast from "../../../public/background/pkalast.png";
import NavBar from "../components/navigation/Navbar";
import Footer from "../components/navigation/Footer";
import Starsbg from "../components/Starsbg";
import Form from "../components/contact/Form";

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
        <div className="flex items-center justify-center w-full h-screen">
         <article className="relative w-full flex flex-col items-center justify-center space-y-6">
          <div className=" flex flex-col items-center justify-center space-y-6 w-3/4"> 
           <h1 className="text-[#7573a5] font-semibold text-center text-4xl capitalize">
            Connect with me!
           </h1>
           <p className=" text-center font-light  w-3/4 ">
           Across the vast expanse of ideas and creativity, I’m always open to new cosmic connections. Whether you're orbiting with a question, a collaboration, or simply stargazing for inspiration — let’s align our paths and create something truly celestial.
           </p>
          </div>
          <Form />
         </article>
         
        <Footer />
      </div>
    </div>
    </div>
  );
}