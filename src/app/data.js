import p1 from '../../public/background/p1.png';
import p2 from '../../public/background/p2.png';
import p3 from '../../public/background/p3.png';
import p4 from '../../public/background/p4.png';
import p5 from '../../public/background/p5.png';
import p8 from '../../public/background/p8.jpg';
import p9 from '../../public/background/p9.jpeg';
import p10 from '../../public/background/p10.jpg';
import ai from '../../public/background/ai.jpg';
export const projectsData = [
  {
  id: 1,
  name: "REAL-TIME CARDIAC ULTRASOUND SYSTEM OPTIMIZATION",
  description:
    "Contributed to the optimization and runtime performance improvement of a real-time cardiac ultrasound guidance application designed for PLAX (Parasternal Long Axis) view assistance in clinical environments. Worked on reducing processing overhead and improving responsiveness through memory optimization, multi-threaded execution strategies, CPU-focused pipeline improvements, dynamic UI scaling, and thread-safe workflow handling. Implemented optimizations such as pre-allocated buffers, reduced NumPy/OpenCV conversion overhead, prediction smoothing logic, responsive patient-information management, and efficient recording management, contributing to significantly lower CPU utilization and more stable real-time operation on resource-constrained hardware.",
  demoLink: "https://drive.google.com/file/d/1zuH2FQ11SGR8uhXNmG_rIekRM7i7w3hl/view?usp=sharing",
  imageUrl: p9,
},
  {
    id: 2,
    name: " AI Overstock Liquidation Dashboard",
    description: "(still working)This AI-powered dashboard helps predict and clear overstock in real time using trained machine learning models. Built on Walmart’s M5 Forecasting dataset—spanning over 42,000 SKUs and millions of daily sales records across 10 U.S. states—the system identifies excess inventory before it becomes dead stock. It features dedicated panels for forecasting, smart binning of similar SKUs, and generating hyper-local clearance campaigns tailored to regional demand. The dashboard provides actionable insights to supply chain and retail teams, enabling faster liquidation, reduced markdown losses, and improved sell-through efficiency.",
    demoLink: "https://github.com/mahi1038/Overstock-Liquidation-",
    imageUrl: ai
  },

{
  id: 3,
  name: "DSP-BASED INTERFERENCE ANALYSIS & MITIGATION IN QPSK",
  description:
    "A communication systems and DSP laboratory project focused on analyzing and mitigating narrowband interference in QPSK communication systems using both hardware experimentation and MATLAB-based digital signal processing. Contributed to MATLAB implementation for adaptive notch filter design, BER computation, FFT-based jammer frequency detection, theoretical analysis, and performance visualization. The system implemented coherent QPSK demodulation, pole-zero based IIR notch filtering, spectral jammer localization, BER-vs-SNR evaluation, constellation recovery, and eye-diagram analysis using real waveform data acquired from DSOs and QPSK modulator hardware setups.",
  demoLink: "https://drive.google.com/file/d/120FoaoLV8NbNcNb1NvLv-5wEJzGeUZzB/view?usp=sharing",
  imageUrl: p10,
},

  {
    id: 4,
    name: "MUSIC RECOMMENDER SYSTEM",
    description: "A content-based multilingual song recommendation system developed using unsupervised machine learning techniques.Designed to support five languages—Hindi ,Tamil ,Korean, English ,and a miscellaneous type—the system takes a user’s input of a language and a specific song title, and identifies similar songs within that language to ensure linguistic and cultural relevance. ",
    demoLink: "https://philnumpy.github.io/ContentBased_Music_Recommender_System/",
    imageUrl: p1,
  },

{
  id: 5,
  name: "RELIABILITY-AWARE MONOCULAR VISUAL ODOMETRY",
  description:
    "A computer vision based monocular visual odometry system developed for real-time indoor trajectory estimation and motion analytics using a single camera stream. Built using FAST feature detection, Lucas–Kanade optical flow tracking, essential matrix pose estimation, and reprojection-error-based drift analysis. The system introduced a drift-aware confidence visualization module that color-coded trajectory reliability in real time and a motion heatmap analytics module that identified high-traffic behavioral zones using occupancy-grid based analytics. Extended the pipeline to support live webcam and Wi-Fi phone camera streams with interactive checkerboard calibration and real-time sparse 3D point cloud visualization, while maintaining CPU-efficient operation without GPU acceleration.",
  demoLink: "",
  imageUrl: p4,
},

  {
    id: 6,
    name: " Ink2Pic Website",
    description: "Ink2Pic is a text-to-image conversion web app designed to transform written content into compelling visuals. Built using React.js for the frontend and integrated with a custom image generation backend, it offers a seamless user experience with a clean, gradient-themed UI. The app uses advanced prompt parsing and styling logic to render high-quality images from user input. Developed as a developer portfolio project, Ink2Pic highlights real-world application of frontend/backend integration, responsive design, and dynamic image rendering.",
    demoLink: "https://ink2pic.vercel.app/",
    imageUrl: p5
  },
  {
    id: 7,
    name: " 3D Interactive Portfolio Website",
    description: "A visually immersive portfolio built using Next.js and Three.js, combining modern web development with 3D interactivity. The site showcases projects through smooth navigation, responsive design, and a creative user experience that reflects both technical skill and personal style.",
    demoLink: "https://tanishasonkarportfolio.vercel.app/",
    imageUrl: p4
  },
  {
    id: 9,
    name: " Trading Website",
    description: "A Expert Training Hub is a responsive, modern web portfolio. It was developed by converting a Figma design into a fully functional interface using React.js for component-based structure and Tailwind CSS for utility-first styling. The site features an interactive carousel, structured content sections, and a polished contact form with integrated icons using Lucide React, ensuring both performance and aesthetic appeal.",
    demoLink:"https://trading-website-eta.vercel.app/",
    imageUrl: p8
  },
  {
    id: 8,
    name: "Audio Source Separation & Visualization",
    description: "A web-based application that performs Blind Source Separation (BSS) using the FastICA algorithm. Users upload two mixed audio files, and the system separates them into their original source signals. It features audio playback, signal visualizations, and comparison plots. The backend is built with FastAPI and scikit-learn, while an additional Jupyter notebook explores a custom FastICA implementation from scratch for deeper insight.",
    demoLink: "https://github.com/Tanisha110/dc",
    imageUrl: p3
  },
  {
    id: 9,
    name: "SENTENCE AUTOCOMPLETION SYSTEM",
    description: "This project is a dynamic autocomplete system developed as part of a Data Structures and Algorithms (DSA) project. It utilizes a Trie data structure for efficient phrase matching and provides user-driven suggestions. The system supports file uploads to expand the autocomplete dictionary and ranks suggestions based on frequency and recency. It also implements pagination to handle large result sets smoothly, offering fast and relevant completions as users type.",
    demoLink: "https://github.com/Tanisha110/Sentance_Completion_Dsa_Project",
    imageUrl: p2
  },
];

export const BtnList = [
  { label: "Home", link: "/", icon: "home", newTab: false },
  { label: "About", link: "/about", icon: "about", newTab: false },
  { label: "Projects", link: "/projects", icon: "projects", newTab: false },
  { label: "Contact", link: "/contact", icon: "contact", newTab: false },
  {
    label: "Github",
    link: "https://www.github.com/Tanisha110",
    icon: "github",
    newTab: true,
  },
  {
    label: "LinkedIn",
    link: "https://www.linkedin.com/in/tanisha-sonkar-19a489289",
    icon: "linkedin",
    newTab: true,
  },
  {
    label: "Resume",
    link: "https://drive.google.com/file/d/1JCBSCXMC4K7a-biOwMsQUrz7xtfxi-cJ/view?usp=drive_link",
    icon: "resume",
    newTab: true,
  },
];


