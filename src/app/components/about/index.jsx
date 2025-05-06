import React from "react";
import clsx from "clsx";

const ItemLayout = ({ children, className }) => {
  return (
    <div
      className={clsx(
        "custom-bg p-8 rounded-xl flex items-center justify-center",
        className
      )}
    >
      {children}
    </div>
  );
};

const AboutDetails = () => {
  return (
    <section className="py-20 w-full">
      <div className="grid grid-cols-1 md:grid-cols-12 gap-8 w-full">
        {/* About Me */}
        <ItemLayout className="md:col-span-8 md:row-span-2 flex flex-col items-start space-y-4">
          <h2 className="text-4xl font-bold text-left w-full capitalize">
            About Me
          </h2>
          <div className="flex flex-col sm:flex-row items-center space-y-4 sm:space-y-0 sm:space-x-4">
            <img
              src="/background/mmee.png"
              alt="Tanisha"
              className="w-32 h-32 rounded-full object-cover"
            />
            <p className="font-light text-left text-muted">
              Hey, I’m an explorer — not of galaxies (yet), but of code,
              circuits, and creativity. Currently navigating my second year in
              Electrical Engineering, I’ve charted paths through web
              development, launched into app development, and am now orbiting
              the exciting world of machine learning. Like any good space
              mission, I believe in curiosity, collaboration, and building
              things that make a difference. If you’re up for creating something
              stellar, I’d love to connect.
            </p>
          </div>
        </ItemLayout>

        {/* Education */}
        <ItemLayout className="md:col-span-4 flex flex-col items-start space-y-4">
          <h2 className="text-3xl text-left w-full font-semibold capitalize">
            Education
          </h2>
          <p className="font-light text-left w-full text-muted">
            - Indian Institute of Technology Jodhpur <br />
            - Electrical Engineering Major <br />
            <span className="text-sm">(Expected Graduation 2027)</span>
          </p>
        </ItemLayout>

        {/* Code with Purpose */}
        <ItemLayout className="md:col-span-4">
          <h2 className="text-xl text-left w-full font-semibold capitalize">
            Code with purpose.
          </h2>
        </ItemLayout>

        {/* GitHub Languages */}
        <ItemLayout className="md:col-span-4 !p-0">
          <img
            className="w-full h-auto"
            src="https://github-readme-stats.vercel.app/api/top-langs/?username=Tanisha110&theme=transparent&hide_border=true&title_color=7573a5&hide=prs,issues&text_color=eeeeee&icon_color=7573a5&text_bold=false"
            alt="tanisha110"
            loading="lazy"
          />
        </ItemLayout>

        {/* GitHub Stats */}
        <ItemLayout className="md:col-span-8 !p-0">
          <img
            className="w-full h-auto"
            src="https://github-readme-stats.vercel.app/api?username=Tanisha110&theme=transparent&hide_border=true&title_color=7573a5&hide=prs,issues&text_color=eeeeee&icon_color=7573a5&text_bold=false"
            alt="tanisha110"
            loading="lazy"
          />
        </ItemLayout>

        {/* Technical Skills */}
        <ItemLayout className="md:col-span-8 flex flex-col items-start space-y-4">
          <h2 className="text-4xl font-bold text-left capitalize">
            Technical Skills
          </h2>
          <img
            className="w-full h-auto"
            src="https://skillicons.dev/icons?i=js,html,css,anaconda,bootstrap,c,cpp,java,matlab,nextjs,nodejs,py,react,sklearn,tailwind,threejs,vscode,git,github,pandas,numpy"
            alt="tanisha110 skills"
            loading="lazy"
          />
        </ItemLayout>

        {/* Non-Technical Skills */}
        <ItemLayout className="md:col-span-4 flex flex-col text-left items-start space-y-4">
          <h2 className="text-4xl font-semibold">Non-Technical Skills</h2>
          <p className="font-light text-xl text-muted">
            - Social Media Management <br />
            - DaVinci Resolve <br />
            - Graphic Design
          </p>
        </ItemLayout>
      </div>
    </section>
  );
};

export default AboutDetails;
