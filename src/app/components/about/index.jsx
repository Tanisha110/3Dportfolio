/*hekekoj hehehe 


const experience = [
  {
    role: "Head — Digital Design",
    org: "IGNUS 2026",
    period: "Dec 2025 – Feb 2026",
    skills: ["Graphic Design", "Figma", "Adobe Illustrator"],
  },
  {
    role: "Head — Digital Design",
    org: "Prometeo 2026, IIT Jodhpur",
   nopes
    skills: ["Graphic Design", "Adobe Illustrator", "Figma"],
  },
  {
    role: "Social Media Manager",
    org: "Frame-X, IIT Jodhpur",
    period: "Aug 2024 – Jul 2025",
    skills: [
      "Social Media", "Content Strategy", "Graphic Design",
      "Figma", "Video Editing", "Da Vinci Resolve", "Adobe Premiere Pro",
    ],
  },
  {
    role: "Core Member",
    org: "Society of Alumni Affairs, IIT Jodhpur",
    period: "Aug 2024 – Apr 2025",
    skills: ["Community Management"],
  },
  {
    role: "Assistant Head Media",
    org: "IGNUS 2025",
    period: "Dec 2024 – Feb 2025",
    skills: ["Social Media", "Video Editing", "Da Vinci Resolve", "Adobe Premiere Pro"],
  },
];

const AboutDetails = () => {
  const [activeExp, setActiveExp] = useState(null);

  return (
    <section className="py-20 w-full">
      <div className="grid grid-cols-1 md:grid-cols-12 gap-8 w-full">

        {/* About Me */}
        <ItemLayout index={0} className="md:col-span-8 md:row-span-2 flex flex-col items-start space-y-4">
          <h2 className="text-4xl font-bold text-left w-full capitalize">About Me</h2>
          <div className="flex flex-col sm:flex-row items-center space-y-4 sm:space-y-0 sm:space-x-4">
            <img
              src="/background/mmee.png"
              alt="Tanisha"
              className="w-32 h-32 rounded-full object-cover"
            />
            <p className="font-light text-left text-muted">
              Hey, I&apos;m an explorer — not of galaxies (yet), but of code,
              circuits, and creativity. Currently navigating my second year in
              Electrical Engineering, I&apos;ve charted paths through web
              development, launched into app development, and am now orbiting
              the exciting world of machine learning. Like any good space
              mission, I believe in curiosity, collaboration, and building
              things that make a difference. If you&apos;re up for creating something
              stellar, I&apos;d love to connect.
            </p>
          </div>
        </ItemLayout>

        {/* Education */}
        <ItemLayout index={1} className="md:col-span-4 flex flex-col items-start space-y-4">
          <h2 className="text-3xl text-left w-full font-semibold capitalize">Education</h2>
          <p className="font-light text-left w-full text-muted">
            - Indian Institute of Technology Jodhpur <br />
            - Electrical Engineering Major <br />
            <span className="text-sm">(Expected Graduation 2027)</span>
          </p>
        </ItemLayout>

        {/* Code with Purpose */}
        <ItemLayout index={2} className="md:col-span-4">
          <h2 className="text-xl text-left w-full font-semibold capitalize">
            Code with purpose.
          </h2>
        </ItemLayout>

        {/* GitHub Languages */}
        <ItemLayout index={3} className="md:col-span-4 !p-0">
          <img
            className="w-full h-auto"
            src="https://github-readme-stats.vercel.app/api/top-langs/?username=Tanisha110&theme=transparent&hide_border=true&title_color=7573a5&hide=prs,issues&text_color=eeeeee&icon_color=7573a5&text_bold=false"
            alt="tanisha110"
            loading="lazy"
          />
        </ItemLayout>

        {/* GitHub Stats */}
        <ItemLayout index={4} className="md:col-span-8 !p-0">
          <img
            className="w-full h-auto"
            src="https://github-readme-stats.vercel.app/api?username=Tanisha110&theme=transparent&hide_border=true&title_color=7573a5&hide=prs,issues&text_color=eeeeee&icon_color=7573a5&text_bold=false"
            alt="tanisha110"
            loading="lazy"
          />
        </ItemLayout>

        {/* Technical Skills */}
        <ItemLayout index={5} className="md:col-span-8 flex flex-col items-start space-y-4">
          <h2 className="text-4xl font-bold text-left capitalize">Technical Skills</h2>
          <img
            className="w-full h-auto"
            src="https://skillicons.dev/icons?i=js,html,css,anaconda,bootstrap,c,cpp,java,matlab,nextjs,nodejs,py,react,sklearn,tailwind,threejs,vscode,git,github,pandas,numpy"
            alt="tanisha110 skills"
            loading="lazy"
          />
        </ItemLayout>

        {/* Non-Technical Skills */}
        <ItemLayout index={6} className="md:col-span-4 flex flex-col text-left items-start space-y-4">
          <h2 className="text-4xl font-semibold">Non-Technical Skills</h2>
          <p className="font-light text-xl text-muted">
            - Social Media Management <br />
            - DaVinci Resolve <br />
            - Graphic Design
          </p>
        </ItemLayout>

        {/* Position of Responsibilities */}
        <ItemLayout index={7} className="md:col-span-12 flex flex-col items-start space-y-6">
          <h2 className="text-4xl font-bold text-left w-full capitalize">
            Position of responsibilities
          </h2>
          <div className="w-full divide-y divide-white/10">
            {experience.map((item, i) => (
              <motion.div
                key={i}
                className="flex flex-col sm:flex-row sm:items-center gap-2 py-4 cursor-pointer group"
                onClick={() => setActiveExp(activeExp === i ? null : i)}
                initial={{ opacity: 0, x: -60 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, amount: 0.3 }}
                transition={{
                  duration: 0.5,
                  ease: [0.22, 1, 0.36, 1],
                  delay: i * 0.07,
                }}
              >
                <div
                  className="w-2 h-2 rounded-full flex-shrink-0 mt-1 sm:mt-0 transition-all duration-200"
                  style={{
                    background: activeExp === i ? "#7dd3fc" : "#7573a5",
                    boxShadow: activeExp === i ? "0 0 8px #7dd3fc" : "0 0 4px #7573a5",
                  }}
                />
                <div className="flex-1 sm:ml-4">
                  <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-1">
                    <span className="font-semibold text-base text-white/90 group-hover:text-white transition-colors">
                      {item.role}
                    </span>
                    <span className="text-xs font-mono text-white/35">{item.period}</span>
                  </div>
                  <span className="text-sm text-[#7573a5]">{item.org}</span>

                  {activeExp === i && (
                    <motion.div
                      className="flex flex-wrap gap-2 mt-3"
                      initial={{ opacity: 0, y: -8 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.28, ease: "easeOut" }}
                    >
                      {item.skills.map((s) => (
                        <span
                          key={s}
                          className="text-xs px-3 py-1 rounded-full font-mono"
                          style={{
                            background: "rgba(117,115,165,0.18)",
                            border: "1px solid rgba(117,115,165,0.35)",
                            color: "#b0aed4",
                          }}
                        >
                          {s}
                        </span>
                      ))}
                    </motion.div>
                  )}
                </div>
              </motion.div>
            ))}
          </div>
        </ItemLayout>

      </div>
    </section>
  );
};

export default AboutDetails;