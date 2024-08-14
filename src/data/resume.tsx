import { Icons } from "@/components/icons";
import { CodeIcon, HomeIcon, NotebookIcon, PencilLine } from "lucide-react";

export const DATA = {
  name: "Chima Ejiofor",
  initials: "CE",
  url: "https://dillion.io",
  location: "Lagos , Nigeria",
  locationLink: "",
  description:
    "Seasoned software engineer with 8+ years of experience designing and developing complex software solutions, guiding and mentoring younger developers. Possesses a B.Tech. in Geology & Mining Tech and have keen interest in Distributed System, System Designs and Scalability. ",
  summary:
    "I am a skilled software engineer with expertise in both object-oriented and functional programming methodologies. I am committed to following best practices and staying up to date with industry standards. I have experience and proficiency in Back-end service design and development as well as Full-stack development, and a bit of mobile. I have successfully delivered a range of applications from conception to deployment. I have a strong track record of working with modern frameworks such as NodeJS, Typescript, JavaScript, Laravel, NextJS, React etc. Tools such as Aws, PostgreSQL,MongoDB, Redis, Docker, Kubernetes, GraphQL, more are outlined below. [See my full resume here](https://drive.google.com/file/d/1xHizlqY2OLLHiKLoak47RLmcpakV-Mn7/view?usp=sharing)",
  avatarUrl: "/mb.jpeg",
  skills: [
    "React",
    "Node.js",
    "NextJs",
    "Laravel",
    "ExpressJs",
    "GraphQl",
    "Docker",
    "TailwindCSS",
    "MongoDB",
    "MySQL",
    "Typescript",
    "Python",
    "Machine Learning",
    "Java",
    "C",
    "Postman",
  ],
  navbar: [
    { href: "/", icon: HomeIcon, label: "Home" },
    // { href: "/blog", icon: NotebookIcon, label: "Blog" },
    { href: "/#projects", icon: CodeIcon, label: "Projects" },
    // { href: "#", icon: PencilLine, label: "Notes" },
  ],
  contact: {
    email: "chimobi.ejiofor@gmail.com",
    tel: "+2349130301443",
    social: {
      GitHub: {
        name: "GitHub",
        url: "https://github.com/mobiblunt",
        icon: Icons.github,

        navbar: true,
      },
      LinkedIn: {
        name: "LinkedIn",
        url: "https://www.linkedin.com/in/chima-ejiofor",
        icon: Icons.linkedin,

        navbar: true,
      },
      X: {
        name: "X",
        url: "https://x.com/chim0bi",
        icon: Icons.x,

        navbar: true,
      },
      Youtube: {
        name: "Youtube",
        url: "",
        icon: Icons.youtube,
        navbar: false,
      },
      email: {
        name: "Send Email",
        url: "mailto:chimobi.ejiofor@gmail.com",
        icon: Icons.email,

        navbar: true,
      },
    },
  },

  work: [
    
    
    {
      company: "Upwork",
      href: "https://upwork.com",
      badges: [],
      location: "Remote",
      title: "Full-stack Developer",
      logoUrl: "https://cdn.worldvectorlogo.com/logos/upwork-roundedsquare-1.svg",
      start: "Sept 2021",
      end: "present",
      description:
        "Leading a product team and contributed to building a sophisticated identity platform that can be used to generate any type of identifications, transport ticketing, events/concerts ticketing and creates access control and validations for the generated identification.",
    },
    {
      company: "Havilah and Hills Innovative Systems",
      href: "https://upwork.com",
      badges: [],
      location: "Port-Harcourt, Nigeria",
      title: "Team Lead - Full-Stack Developer",
      logoUrl: "",
      start: "Feb 2020",
      end: "Sept 2021",
      description:
        "Lead the development team in designing, developing, and delivering high-quality software applications using Laravel, AWS, and WordPress.",
    },
    {
      company: "Fillyatank",
      href: "",
      badges: [],
      location: "",
      title: "Software Developer",
      logoUrl: "",
      start: "Mar 2018",
      end: "Feb 2021",
      description:
        "Write clean, efficient, and well-documented front-end code (HTML, CSS, JavaScript, AngularJS).",
    },
    {
      company: "Teknohub Consult",
      href: "",
      badges: [],
      location: "",
      title: "Software Developer",
      logoUrl: "",
      start: "Nov 2017",
      end: "Mar 2018",
      description:
        "Utilized AWS, allowing our Agile Engineering team to be one of the first to implement its resources, reduce costs, and mitigate risks.",
    },
    {
      company: "Codeplus Academy",
      href: "",
      badges: [],
      location: "",
      title: "Software Apprentice",
      logoUrl: "",
      start: "Aug 2016",
      end: "Oct 2017",
      description:
        "Debugged and updated web application software using the Java springboot framework.",
    },
    
    
    
    
  ],
  education: [
    {
      school: "University Of Port Harcourt",
      href: "https://uniport.edu.ng/",
      degree: "BTech. Geology/Mining Tech",
      logoUrl: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRbGv7e7o6cwgl879ojDLsaAAK0TaMm1UCnvA&s",
      start: "2008",
      end: "2013",
    },
    
    
  ],
  projects: [
    {
      title: "Almost-reddit",
      href: "https://github.com/mobiblunt/reddit",
      dates: "July 2024",
      active: true,
      description:
        "Developed a Reddit-inspired web application using React, Tailwind CSS, and Appwrite. This project showcases core functionalities including user authentication, post creation, and commenting. Leveraged React for a dynamic frontend, Tailwind for responsive design, and Appwrite for backend services, demonstrating full-stack development skills in a modern web ecosystem.",
      technologies: [
        "React js",
        "Tailwind Css",
        "git",
        "Appwrite",
        "yarn",
      ],
      links: [
        // {
        //   type: "Website",
        //   href: "https://chatcollect.com",
        //   icon: <Icons.globe className="size-3" />,
        // },
        {
          type: "Source",
          href: "https://github.com/mobiblunt/reddit",
          icon: <Icons.github className="size-3" />,
        },
      ],
      image: "/redd.jpg",
      video:
        "",
    },
    {
      title: "Car Prediction Model",
      href: "https://github.com/mobiblunt/car_prediciton_model",
      dates: "July 2024",
      active: true,
      description:
        "Developed a predictive model to estimate car prices using linear regression, leveraging historical data to provide accurate cost forecasts. Implemented the backend with Flask to handle data processing and model inference, and created a user-friendly interface using HTML, CSS, and JavaScript. This project demonstrates my ability to integrate machine learning with web technologies to deliver practical and interactive solutions.",
      technologies: [
        "html",
        "css",
        "js",
        "Python",
        "PyCharm",
         "Flask",
         "Jupiter Notebook",
      ],
      links: [
        {
          type: "Source",
          href: "https://github.com/mobiblunt/car_prediciton_model",
          icon: <Icons.github className="size-3" />,
        },
      ],
      image: "/demo.png",
      video: "",
    },
    {
      title: "Password Generator",
      href: "https://github.com/mobiblunt/PasswordGenerator",
      dates: "October 2023",
      active: true,
      description:
        "Developed a React-based password generator with a sleek Tailwind CSS interface. Users can create custom, strong passwords with adjustable length and character types. Features include strength indicators and one-click copying, demonstrating proficiency in modern front-end development and UI design.",
      technologies: [
        "React.js",
        "TailwindCSS",
        "Git",
      ],
      links: [
        // {
        //   type: "Website",
        //   href: "https://llm.report",
        //   icon: <Icons.globe className="size-3" />,
        // },
        {
          type: "Source",
          href: "https://github.com/mobiblunt/PasswordGenerator",
          icon: <Icons.github className="size-3" />,
        },
      ],
      image: "/pass.jpg",
      // video: "https://cdn.llm.report/openai-demo.mp4",
    },
    {
      title: "News Web Application",
      href: "https://github.com/mobiblunt/News-web-app",
      dates: "September 2023",
      active: true,
      description:
        "Built a responsive news application that fetches and displays real-time articles using JavaScript and the Fetch API. Features include dynamic content updates, search functionality, and category filtering, showcasing skills in API integration and front-end development.",
      technologies: [
        "js",
        "Git",
        "Html",
        "Css",
        
      ],
      links: [
        {
          type: "Source",
          href: "https://github.com/mobiblunt/News-web-app",
          icon: <Icons.github className="size-3" />,
        },
      ],
      image: "/news.jpg",
      // video:
      //   "https://pub-83c5db439b40468498f97946200806f7.r2.dev/automatic-chat.mp4",
    },
  ],
  hackathons: [
    
    // {
    //   title: "DeveloperWeek Hackathon",
    //   dates: "February 3rd - 4th, 2018",
    //   location: "San Francisco, California",
    //   description:
    //     "Developed a web application which aggregates social media data regarding cryptocurrencies and predicts future prices.",
    //   image:
    //     "https://pub-83c5db439b40468498f97946200806f7.r2.dev/hackline/developer-week.jpg",
    //   links: [
    //     {
    //       title: "Github",
    //       icon: <Icons.github className="h-4 w-4" />,
    //       href: "https://github.com/cryptotrends/cryptotrends",
    //     },
    //   ],
    // },
    // {
    //   title: "HackDavis",
    //   dates: "January 20th - 21st, 2018",
    //   location: "Davis, California",
    //   description:
    //     "Developed a mobile application which allocates a daily carbon emission allowance to users to move towards a sustainable environment.",
    //   image:
    //     "https://pub-83c5db439b40468498f97946200806f7.r2.dev/hackline/hack-davis.png",
    //   win: "Best Data Hack",
    //   mlh: "https://s3.amazonaws.com/logged-assets/trust-badge/2018/white.svg",
    //   links: [
    //     {
    //       title: "Devpost",
    //       icon: <Icons.globe className="h-4 w-4" />,
    //       href: "https://devpost.com/software/my6footprint",
    //     },
    //     {
    //       title: "ML",
    //       icon: <Icons.github className="h-4 w-4" />,
    //       href: "https://github.com/Wallet6/my6footprint-machine-learning",
    //     },
    //     {
    //       title: "iOS",
    //       icon: <Icons.github className="h-4 w-4" />,
    //       href: "https://github.com/Wallet6/CarbonWallet",
    //     },
    //     {
    //       title: "Server",
    //       icon: <Icons.github className="h-4 w-4" />,
    //       href: "https://github.com/Wallet6/wallet6-server",
    //     },
    //   ],
    // },
    // {
    //   title: "ETH",
    //   dates: "October 13th - 15th, 2017",
    //   location: "Waterloo, Ontario",
    //   description:
    //     "Developed a blockchain application for doctors and pharmacists to perform trustless transactions and prevent overdosage in patients.",
    //   image:
    //     "https://pub-83c5db439b40468498f97946200806f7.r2.dev/hackline/eth-waterloo.png",
    //   links: [
    //     {
    //       title: "Organization",
    //       icon: <Icons.github className="h-4 w-4" />,
    //       href: "https://github.com/ethdocnet",
    //     },
    //   ],
    // },
    // {
    //   title: "Hack The North",
    //   dates: "September 15th - 17th, 2017",
    //   location: "Waterloo, Ontario",
    //   description:
    //     "Developed a virtual reality application allowing users to see themselves in third person.",
    //   image:
    //     "https://pub-83c5db439b40468498f97946200806f7.r2.dev/hackline/hack-the-north.png",
    //   mlh: "https://s3.amazonaws.com/logged-assets/trust-badge/2017/white.svg",
    //   links: [
    //     {
    //       title: "Streamer Source",
    //       icon: <Icons.github className="h-4 w-4" />,
    //       href: "https://github.com/justinmichaud/htn2017",
    //     },
    //     {
    //       title: "Client Source",
    //       icon: <Icons.github className="h-4 w-4" />,
    //       href: "https://github.com/dillionverma/RTSPClient",
    //     },
    //   ],
    // },
    // {
    //   title: "Hack The 6ix",
    //   dates: "August 26th - 27th, 2017",
    //   location: "Toronto, Ontario",
    //   description:
    //     "Developed an open platform for people shipping items to same place to combine shipping costs and save money.",
    //   image:
    //     "https://pub-83c5db439b40468498f97946200806f7.r2.dev/hackline/hack-the-6ix.jpg",
    //   mlh: "https://s3.amazonaws.com/logged-assets/trust-badge/2017/white.svg",
    //   links: [
    //     {
    //       title: "Source",
    //       icon: <Icons.github className="h-4 w-4" />,
    //       href: "https://github.com/ShareShip/ShareShip",
    //     },
    //     {
    //       title: "Site",
    //       icon: <Icons.globe className="h-4 w-4" />,
    //       href: "https://share-ship.herokuapp.com/",
    //     },
    //   ],
    // },
    // {
    //   title: "Stupid Hack Toronto",
    //   dates: "July 23rd, 2017",
    //   location: "Toronto, Ontario",
    //   description:
    //     "Developed a chrome extension which tracks which facebook profiles you have visited and immediately texts your girlfriend if you visited another girls page.",
    //   image:
    //     "https://pub-83c5db439b40468498f97946200806f7.r2.dev/hackline/stupid-hackathon.png",
    //   links: [
    //     {
    //       title: "Source",
    //       icon: <Icons.github className="h-4 w-4" />,
    //       href: "https://github.com/nsagirlfriend/nsagirlfriend",
    //     },
        
    //   ],
    // },
    // {
    //   title: "Global AI Hackathon - Toronto",
    //   dates: "June 23rd - 25th, 2017",
    //   location: "Toronto, Ontario",
    //   description:
    //     "Developed a python library which can be imported to any python game and change difficulty of the game based on real time emotion of player. Uses OpenCV and webcam for facial recognition, and a custom Machine Learning Model trained on a [Kaggle Emotion Dataset](https://www.kaggle.com/c/challenges-in-representation-learning-facial-expression-recognition-challenge/leaderboard) using [Tensorflow](https://www.tensorflow.org/Tensorflow) and [Keras](https://keras.io/). This project recieved 1st place prize at the Global AI Hackathon - Toronto and was also invited to demo at [NextAI Canada](https://www.nextcanada.com/next-ai).",
    //   image:
    //     "https://pub-83c5db439b40468498f97946200806f7.r2.dev/hackline/global-ai-hackathon.jpg",
    //   win: "1st Place Winner",
    //   links: [
    //     {
    //       title: "Article",
    //       icon: <Icons.globe className="h-4 w-4" />,
    //       href: "https://syncedreview.com/2017/06/26/global-ai-hackathon-in-toronto/",
    //     },
    //     {
    //       title: "Source",
    //       icon: <Icons.github className="h-4 w-4" />,
    //       href: "https://github.com/TinySamosas/",
    //     },
    //   ],
    // },
    // {
    //   title: "McGill AI for Social Innovation Hackathon",
    //   dates: "June 17th - 18th, 2017",
    //   location: "Montreal, Quebec",
    //   description:
    //     "Developed realtime facial microexpression analyzer using AI",
    //   image:
    //     "https://pub-83c5db439b40468498f97946200806f7.r2.dev/hackline/ai-for-social-good.jpg",
    //   links: [],
    // },
    // {
    //   title: "Open Source Circular Economy Days Hackathon",
    //   dates: "June 10th, 2017",
    //   location: "Toronto, Ontario",
    //   description:
    //     "Developed a custom admin interface for food waste startup <a href='http://genecis.co/'>Genecis</a> to manage their data and provide analytics.",
    //   image:
    //     "https://pub-83c5db439b40468498f97946200806f7.r2.dev/hackline/open-source-circular-economy-days.jpg",
    //   win: "1st Place Winner",
    //   links: [
    //     {
    //       title: "Source",
    //       icon: <Icons.github className="h-4 w-4" />,
    //       href: "https://github.com/dillionverma/genecis",
    //     },
    //   ],
    // },
    // {
    //   title: "Make School's Student App Competition 2017",
    //   dates: "May 19th - 21st, 2017",
    //   location: "International",
    //   description: "Improved PocketDoc and submitted to online competition",
    //   image:
    //     "https://pub-83c5db439b40468498f97946200806f7.r2.dev/hackline/make-school-hackathon.png",
    //   win: "Top 10 Finalist | Honourable Mention",
    //   links: [
    //     {
    //       title: "Medium Article",
    //       icon: <Icons.globe className="h-4 w-4" />,
    //       href: "https://medium.com/make-school/the-winners-of-make-schools-student-app-competition-2017-a6b0e72f190a",
    //     },
    //     {
    //       title: "Devpost",
    //       icon: <Icons.globe className="h-4 w-4" />,
    //       href: "https://devpost.com/software/pocketdoc-react-native",
    //     },
    //     {
    //       title: "YouTube",
    //       icon: <Icons.youtube className="h-4 w-4" />,
    //       href: "https://www.youtube.com/watch?v=XwFdn5Rmx68",
    //     },
    //     {
    //       title: "Source",
    //       icon: <Icons.github className="h-4 w-4" />,
    //       href: "https://github.com/dillionverma/pocketdoc-react-native",
    //     },
    //   ],
    // },
    
    // {
    //   title: "Waterloo Equithon",
    //   dates: "May 5th - 7th, 2017",
    //   location: "Waterloo, Ontario",
    //   description:
    //     "Developed Pocketdoc, an app in which you take a picture of a physical wound, and the app returns common solutions or cures to the injuries or diseases.",
    //   image:
    //     "https://pub-83c5db439b40468498f97946200806f7.r2.dev/hackline/waterloo-equithon.png",
    //   links: [
    //     {
    //       title: "Devpost",
    //       icon: <Icons.globe className="h-4 w-4" />,
    //       href: "https://devpost.com/software/pocketdoc-react-native",
    //     },
    //     {
    //       title: "YouTube",
    //       icon: <Icons.youtube className="h-4 w-4" />,
    //       href: "https://www.youtube.com/watch?v=XwFdn5Rmx68",
    //     },
    //     {
    //       title: "Source",
    //       icon: <Icons.github className="h-4 w-4" />,
    //       href: "https://github.com/dillionverma/pocketdoc-react-native",
    //     },
    //   ],
    // },
    
    // {
    //   title: "StartHacks I",
    //   dates: "March 4th - 5th, 2017",
    //   location: "Waterloo, Ontario",
    //   description:
    //     "Developed at StartHacks 2017, Recipic is a mobile app which allows you to take pictures of ingredients around your house, and it will recognize those ingredients using ClarifAI image recognition API and return possible recipes to make. Recipic recieved 1st place at the hackathon for best pitch and hack.",
    //   image:
    //     "https://pub-83c5db439b40468498f97946200806f7.r2.dev/hackline/starthacks.png",
    //   win: "1st Place Winner",
    //   mlh: "https://s3.amazonaws.com/logged-assets/trust-badge/2017/white.svg",
    //   links: [
    //     {
    //       title: "Source (Mobile)",
    //       icon: <Icons.github className="h-4 w-4" />,
    //       href: "https://github.com/mattBlackDesign/recipic-ionic",
    //     },
    //     {
    //       title: "Source (Server)",
    //       icon: <Icons.github className="h-4 w-4" />,
    //       href: "https://github.com/mattBlackDesign/recipic-rails",
    //     },
    //   ],
    // },
    // {
    //   title: "QHacks II",
    //   dates: "February 3rd - 5th, 2017",
    //   location: "Kingston, Ontario",
    //   description:
    //     "Developed a mobile game which enables city-wide manhunt with random lobbies",
    //   image:
    //     "https://pub-83c5db439b40468498f97946200806f7.r2.dev/hackline/qhacks.png",
    //   mlh: "https://s3.amazonaws.com/logged-assets/trust-badge/2017/white.svg",
    //   links: [
    //     {
    //       title: "Source (Mobile)",
    //       icon: <Icons.github className="h-4 w-4" />,
    //       href: "https://github.com/dillionverma/human-huntr-react-native",
    //     },
    //     {
    //       title: "Source (API)",
    //       icon: <Icons.github className="h-4 w-4" />,
    //       href: "https://github.com/mattBlackDesign/human-huntr-rails",
    //     },
    //   ],
    // },
    
    
  ],
} as const;
