import Image from "next/image";
import pkalast from "../../../public/background/pkalast.png";
import NavBar from "../components/navigation/Navbar";
import Footer from "../components/navigation/Footer";
import Starsbg from "../components/Starsbg";
import ProjectList from "../components/projects";
import { projectsData } from "../data";

export default function Home() {
  return (
    <div className="relative min-h-screen w-screen overflow-hidden">
      
      {/* 🔵 Fixed background image + stars */}
      <div className="fixed inset-0 z-[-20]">
        <Starsbg />
        <Image
          src={pkalast}
          alt="background-image"
          layout="fill"
          className="object-cover object-center"
        />
      </div>

      {/* 🔵 Scrollable content */}
      <div className="relative z-10 w-full min-h-screen pb-24 overflow-y-auto flex flex-col items-center">
        <NavBar />

        {/* Section content */}
        <div className="pt-24 px-6 w-full max-w-7xl flex flex-col items-center space-y-8">
          {/* 🔠 Section Heading */}
          <h1 className="text-4xl text-foreground special-gothic">MY PROJECTS</h1>

          {/* Project Grid */}
          <ProjectList projects={projectsData} />
        </div>

        <Footer />
      </div>
      
    </div>
  );
}

  