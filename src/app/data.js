import p1 from '../../public/background/p1.png';
import p2 from '../../public/background/p2.png';
import p3 from '../../public/background/p3.png';
import p4 from '../../public/background/p4.png';
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
    name: "FUZZY AUTOCOMPLETE SYSTEM",
    description: "A dynamic fuzzy autocomplete system with enhanced phrase matching and user-driven suggestions having trie data structure implementation. It leverages fuzzy string matching algorithms to provide accurate and relevant suggestions as users type.The project includes a file upload feature to expand the autocomplete dictionary, ranks suggestions based on frequency and edit distance, and offers pagination for large result sets. ",
    demoLink: "https://github.com/Tanisha110/Trie_implementation",
    imageUrl: p2
  },
  {
    id: 3,
    name: "Audio Source Separation & Visualization",
    description: "A web-based application that performs Blind Source Separation (BSS) using the FastICA algorithm. Users upload two mixed audio files, and the system separates them into their original source signals. It features audio playback, signal visualizations, and comparison plots. The backend is built with FastAPI and scikit-learn, while an additional Jupyter notebook explores a custom FastICA implementation from scratch for deeper insight.",
    demoLink: "https://github.com/Tanisha110/dc",
    imageUrl: p3
  },
  {
    id: 4,
    name: " 3D Interactive Portfolio Website",
    description: "A visually immersive portfolio built using Next.js and Three.js, combining modern web development with 3D interactivity. The site showcases projects through smooth navigation, responsive design, and a creative user experience that reflects both technical skill and personal style.",
    demoLink: "https://github.com/Tanisha110",
    imageUrl: p4
  },
  {
    id: 5,
    name: "RecipeFinder",
    description: "Discover new recipes",
    date: "2022-07-12",
    demoLink: "https://recipefinder.example.com",
    imageUrl: p1
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
    label: "X",
    link: "https://www.x.com/code_bucks",
    icon: "twitter",
    newTab: true,
  },
  {
    label: "Resume",
    link: "/resume.pdf",
    icon: "resume",
    newTab: true,
  },
];


