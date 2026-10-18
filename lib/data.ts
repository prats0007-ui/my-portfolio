// Edit this file to update the site's content. Components read everything from here.
// Wrap words in **double asterisks** inside bullet points to make them bold.

export const profile = {
  name: "Pratik Vimalbalaji",
  first: "Pratik",
  last: "Vimalbalaji",
  initials: "PV",
  location: "Boston, MA",
  email: "vimalbalaji.p@northeastern.edu",
  phone: "+1 (857) 361-9452",
  phoneHref: "tel:+18573619452",
  github: "https://github.com/lolipie007",
  linkedin: "https://linkedin.com/in/pratikkkk",
  resume: "/Pratik_Vimalbalaji_Resume.pdf",
  availability: "Open to Summer 2027 SDE & AI/ML internships",
  roles: ["Software Engineer", "Full-Stack Developer", "AI Engineer", "SDET"],
  lede:
    "I'm a software engineer who builds full-stack products with AI inside them, and tests them like they matter. I've shipped Next.js apps with RAG pipelines, published two IEEE papers in ML, and spent eighteen months as an SDET at LTIMindtree.",
  aboutTagline: "Build it. Test it. Make it smarter.",
};

export const navItems = [
  { id: "about", label: "About" },
  { id: "experience", label: "Experience" },
  { id: "projects", label: "Projects" },
  { id: "skills", label: "Skills" },
  { id: "research", label: "Research" },
  { id: "contact", label: "Contact" },
];

export type Tone = "accent" | "pass" | "warn";

export const aboutCards: { icon: string; label: string; title: string; sub: string; tone: Tone }[] = [
  { icon: "🎯", label: "Seeking", title: "Summer 2027 Internships", sub: "SDE · AI/ML · Full-stack", tone: "accent" },
  { icon: "💼", label: "Experience", title: "SDET, LTIMindtree", sub: "Feb 2025 – Jul 2026", tone: "pass" },
  { icon: "🎓", label: "Education", title: "MS Information Systems", sub: "Northeastern · Sep 2026 – Dec 2028", tone: "warn" },
  { icon: "📄", label: "Research", title: "IEEE Published Author", sub: "2 papers · Best Paper, ICRTAC-2023", tone: "warn" },
  { icon: "📍", label: "Based in", title: "Boston, MA", sub: "Building full-stack & AI products", tone: "accent" },
  { icon: "🧠", label: "Focus", title: "Full-Stack · AI · Testing", sub: "Next.js apps, RAG pipelines, test automation", tone: "pass" },
];

export type Job = {
  art: "sdet" | "apprentice";
  icon: string;
  when?: string;
  title: string;
  org: string;
  points: string[];
  tags: string[];
};

export const experience: Job[] = [
  {
    art: "sdet",
    icon: "🧪",
    when: "Feb 2025 – Jul 2026",
    title: "Software Development Engineer in Test",
    org: "LTIMindtree · Bengaluru",
    points: [
      "Consolidated the VPACS test suite from **756 feature files to 25**, removing redundant scenarios and cutting regression time.",
      "Automated Gherkin feature files, step definitions, and manual test cases with **GitHub Copilot–powered GenAI testing agents**.",
      "Set up **Selenium Hybrid & BDD** frameworks with Robot Framework and **CI/CD pipelines** for regression across Agile sprints.",
    ],
    tags: ["Selenium", "Robot Framework", "BDD", "CI/CD", "Postman"],
  },
  {
    art: "apprentice",
    icon: "🚀",
    // when: "Add dates here",
    title: "Full-Stack Apprentice · Team Lead",
    org: "LTIMindtree Apprentice Program",
    points: [
      "Led a **10-person team** through the company's Full-Stack Apprentice Program.",
      "Ranked in the **top 3 of 60** employees in the program.",
      "Built a **Java Library Management System** with checkout, inventory, and member management under Agile sprint planning.",
    ],
    tags: ["Java", "Agile", "Team Leadership"],
  },
];

export type Project = {
  // "email" | "slrcnn" | "polyp" | "library" have custom artwork; any other slug gets a generated cover
  slug: string;
  title: string;
  when: string;
  badge?: string;
  summary: string;
  tags: string[];
  link?: string; // leave out to hide the link
  linkLabel?: string; // defaults to "GitHub"
};

// To add a project, copy this block into the list below:
// {
//   slug: "my-new-project",          // unique id; gets a generated cover image
//   title: "Project name",
//   when: "Jan 2027 – Mar 2027",
//   summary: "One or two sentences on what it does and the result.",
//   tags: ["Python", "FastAPI"],
//   link: "https://github.com/lolipie007/my-new-project",
// },
export const projects: Project[] = [
  {
    slug: "email",
    title: "AI-Email Bot",
    when: "Sept 2024 – Feb 2025",
    badge: "Featured",
    summary:
      "Full-stack email client in Next.js 14 with an AI smart-compose copilot, a Cmd-K command bar, and Stripe billing. A multimodal LangChain RAG pipeline answers questions from PDFs, spreadsheets, and Word files, with GPT-4o prompts tuned through DSPy.",
    tags: ["Next.js", "LangChain", "ChromaDB", "DSPy", "Stripe"],
    link: "https://github.com/lolipie007",
  },
  {
    slug: "slrcnn",
    title: "Super Long Range CNN for Video Enhancement",
    when: "Dec 2023 – May 2024",
    badge: "IEEE",
    summary:
      "Two-stage LRCNN + SRCNN pipeline that classifies handball actions at 91.43% accuracy and raises enhanced-frame PSNR by up to 9.3 dB over the low-quality input.",
    tags: ["TensorFlow", "Keras", "OpenCV"],
    link: "https://ieeexplore.ieee.org/document/10574588",
    linkLabel: "Read the paper",
  },
  {
    slug: "polyp",
    title: "Polyp Segmentation with UNet & ENet",
    when: "Jul – Dec 2023",
    badge: "Best Paper",
    summary:
      "Compared UNet and ENet for locating polyps in endoscopy images on IoU, accuracy, and inference time, improving segmentation efficiency by 20% over baseline.",
    tags: ["UNet", "ENet", "TensorFlow", "OpenCV"],
    link: "https://ieeexplore.ieee.org/document/10480851",
    linkLabel: "Read the paper",
  },
];

export const whatIDo = {
  lead: "Software engineer focused on building reliable full-stack products with AI inside them.",
  points: [
    "Build **full-stack web apps** with Next.js, React, and REST APIs",
    "Ship **RAG pipelines & LLM features** grounded in real documents",
    "Design **test automation frameworks** and CI/CD pipelines that keep releases safe",
    "Train and benchmark **deep learning models** for vision tasks",
  ],
};

export const skillGroups: { icon: string; title: string; items: string[] }[] = [
  { icon: "💻", title: "Languages & Web", items: ["Python", "Java", "TypeScript", "JavaScript", "C++", "C", "Bash", "Next.js", "React", "Tailwind CSS", "Shadcn", "REST APIs", "OAuth", "Stripe"] },
  { icon: "🧠", title: "AI & Machine Learning", items: ["TensorFlow", "Keras", "scikit-learn", "LangChain", "DSPy", "OpenCV", "NumPy", "NLP", "ChromaDB"] },
  { icon: "🗄️", title: "Data & Cloud", items: ["MySQL", "PostgreSQL", "AWS S3", "AWS EMR", "Apache Spark", "Hadoop", "Hive", "Sqoop", "Kafka", "Databricks"] },
  { icon: "🧪", title: "Testing & DevOps", items: ["Selenium", "Robot Framework", "BDD / Gherkin", "CI/CD", "Git", "JMeter", "Postman", "Agile / Scrum"] },
];

export const certifications = [
  { name: "OCI Generative AI Professional", issuer: "Oracle" },
  { name: "OCI Data Science Professional", issuer: "Oracle" },
  { name: "Azure AI Fundamentals (AI-900)", issuer: "Microsoft" },
  { name: "Azure Data Fundamentals (DP-900)", issuer: "Microsoft" },
];

export const papers = [
  {
    badge: "🏆 IEEE · Best Paper Award",
    venue: "ICRTAC-2023",
    title: "Polyp Segmentation Using UNet and ENet",
    tagline: "A comparative study of two segmentation architectures for locating polyps in endoscopy images.",
    abstract:
      "Trained UNet and ENet models in TensorFlow/Keras with an OpenCV pipeline for preprocessing and mask generation, then compared them on IoU, accuracy, and inference time. Hyperparameters were tuned with grid and random search to raise validation accuracy and shorten training.",
    metrics: [
      { value: "20%", label: "Efficiency gain" },
      { value: "2", label: "Architectures compared" },
      { value: "3", label: "Evaluation metrics" },
      { value: "Best", label: "Paper award" },
    ],
    tags: ["Python", "TensorFlow", "Keras", "OpenCV", "Medical Imaging"],
    url: "https://ieeexplore.ieee.org/document/10480851",
  },
  {
    badge: "📄 IEEE Published",
    venue: "VIT Capstone",
    title: "Super Long Range CNN for Video Enhancement",
    tagline: "A two-stage CNN that classifies handball actions and sharpens low-quality video frames.",
    abstract:
      "Designed an LRCNN + SRCNN pipeline in TensorFlow/Keras, with OpenCV handling frame extraction, normalization, and sequencing. Benchmarked against Mask R-CNN and optical-flow baselines using PSNR and SSIM.",
    metrics: [
      { value: "91.43%", label: "Classification accuracy" },
      { value: "+9.3 dB", label: "PSNR gain" },
      { value: "0.3178", label: "Training loss" },
      { value: "2", label: "Stage pipeline" },
    ],
    tags: ["Python", "TensorFlow", "Keras", "OpenCV", "CNNs"],
    url: "https://ieeexplore.ieee.org/document/10574588",
  },
];
