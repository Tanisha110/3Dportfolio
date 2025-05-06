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
        <div className="flex items-center justify-center w-full min-h-screen px-4 py-10">
          <article className="w-full flex flex-col items-center justify-center space-y-6 max-w-5xl">
            <div className="flex flex-col items-center justify-center space-y-6 w-full px-4 sm:px-6">
              <h1 className="text-[#7573a5] font-semibold text-center text-3xl sm:text-4xl capitalize">
                Connect with me!
              </h1>
              <p className="text-center font-light text-base sm:text-lg max-w-2xl text-muted">
                Across the vast expanse of ideas and creativity, I am always open to new cosmic connections. Whether you are orbiting with a question, a collaboration, or simply stargazing for inspiration — Let&apos;s align our paths
                create something truly celestial.
              </p>
            </div>
            <Form />
          </article>
        </div>
        <Footer />
      </div>
    </div>
  );
}
