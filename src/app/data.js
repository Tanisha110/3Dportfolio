import p1 from '../../public/background/p1.png';
import p2 from '../../public/background/p2.png';
import p3 from '../../public/background/p3.png';
import p4 from '../../public/background/p4.png';
import p5 from '../../public/background/p5.png';
export const projectsData = [
  {
    id: 1,
    name: "MUSIC RECOMMENDER SYSTEM",
    description: "A content-based multilingual song recommendation system developed using unsupervised machine learning techniques.Designed to support five languages—Hindi ,Tamil ,Korean, English ,and a miscellaneous type—the system takes a user’s input of a language and a specific song title, and identifies similar songs within that language to ensure linguistic and cultural relevance. ",
    demoLink: "https://philnumpy.github.io/ContentBased_Music_Recommender_System/",
    imageUrl: p1,
  },
  {
    id: 2,
    name: " Ink2Pic Website",
    description: "Ink2Pic is a text-to-image conversion web app designed to transform written content into compelling visuals. Built using React.js for the frontend and integrated with a custom image generation backend, it offers a seamless user experience with a clean, gradient-themed UI. The app uses advanced prompt parsing and styling logic to render high-quality images from user input. Developed as a developer portfolio project, Ink2Pic highlights real-world application of frontend/backend integration, responsive design, and dynamic image rendering.",
    demoLink: "https://ink2pic.vercel.app/",
    imageUrl: p5
  },
  {
    id: 3,
    name: " 3D Interactive Portfolio Website",
    description: "A visually immersive portfolio built using Next.js and Three.js, combining modern web development with 3D interactivity. The site showcases projects through smooth navigation, responsive design, and a creative user experience that reflects both technical skill and personal style.",
    demoLink: "https://tanishasonkarportfolio.vercel.app/",
    imageUrl: p4
  },
  {
    id: 4,
    name: " Trading Website",
    description: "A Expert Training Hub is a responsive, modern web portfolio. It was developed by converting a Figma design into a fully functional interface using React.js for component-based structure and Tailwind CSS for utility-first styling. The site features an interactive carousel, structured content sections, and a polished contact form with integrated icons using Lucide React, ensuring both performance and aesthetic appeal.",
    demoLink:"https://trading-website-eta.vercel.app/",
    imageUrl: p4
  },
  {
    id: 5,
    name: "Audio Source Separation & Visualization",
    description: "A web-based application that performs Blind Source Separation (BSS) using the FastICA algorithm. Users upload two mixed audio files, and the system separates them into their original source signals. It features audio playback, signal visualizations, and comparison plots. The backend is built with FastAPI and scikit-learn, while an additional Jupyter notebook explores a custom FastICA implementation from scratch for deeper insight.",
    demoLink: "https://github.com/Tanisha110/dc",
    imageUrl: p3
  },
  {
    id: 6,
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
    link: "/resume.pdf",
    icon: "resume",
    newTab: true,
  },
];


