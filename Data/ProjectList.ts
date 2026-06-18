export type InfoSection = {
    Title: string;
    Body: string;
    Image?: { src: string; alt: string };
    YTID?: string;
}

export type ShowcaseLocations = {
    Name: string;
    Icon: string;
    Link: string;
}

export interface Project {
    Type: "Game" | "Web";
    ID: number;
    slug: string;

    YTID?: string;
    ImgSrc: string;

    Name: string;
    ShortDescription: string;
    LongDescription: string;

    Duration: string;
    Gallery?: string[]
    Status: string;

    Showcase?: ShowcaseLocations[];

    ProgressionPhases?: InfoSection[];
    Features?: InfoSection[];
}

export interface GameProject extends Project {
    Type: "Game";
    TeamSize?: number;
    Engine?: string;
    ReleaseDate?: string;
    Role: string;
    Platform?: string;
}

export interface WebProject extends Project {
    Type: "Web";
    Framework: string;
    Language: string;
    Styling: string;
    Hosting: string;
    URL?: string;
}

export type ProjectItem = GameProject | WebProject;

export const ProjectList: ProjectItem[] = [
    {
        Type: "Game",
        ID: 0,
        slug: "floor-54",
        Name: "Floor 54",
        ShortDescription: "Mech dungeon crawler built in UE5.",
        LongDescription: "Floor 54 is a roguelike-inspired dungeon crawler developed in Unreal Engine 5 by a team of 25 developers over a 9-week production cycle.\n\n" +
        "As Lead Programmer, I coordinated programming efforts across the team while developing core gameplay systems, repository workflows, and level progression mechanics.",
        TeamSize: 25,
        YTID: "9BcFfeiQkx0",
        ImgSrc: "/Floor54/Floor54-TitleShot.png",
        Engine: "Unreal Engine 5",
        Duration: "9 Weeks",
        Role: "Lead Programmer",
        Platform: "PC",
        Gallery: ["/Floor54/Floor54_Gameplay1.png", "/Floor54/Floor54_Gameplay2.png", "/Floor54/Floor54_Gameplay3.png", "/Floor54/Floor54_Gameplay4.png", "/Floor54/Floor54_Menu.png"],
        Status: "Archived",
        Features: [
            {
                Title: "Personal Contributions",
                Body: "~~ Gameplay Systems ~~\n" +
                    "• Developed modular door and keycard systems using Blueprint inheritance.\n" +
                    "• Implemented level progression systems controlling player advancement.\n" +
                    "• Created interactive environmental gameplay objects.\n\n" +
                    "~~ Enemy Architecture ~~\n" +
                    "• Developed enemy base class architecture for shared functionality.\n" +
                    "• Designed spawning systems for encounter management and balancing.\n\n" +
                    "~~ UI Integration ~~\n" +
                    "• Connected gameplay systems to UI feedback and progression indicators.",
            },
            {
                Title: "Additional Responsibilities as a Lead Programmer",
                Body: "~~ Leadership/Team Coordination ~~\n" +
                    "• Managed programming tasks across the development team.\n" +
                    "• Coordinated integration of gameplay systems.\n" +
                    "• Maintained the GitHub repository and source control workflows.\n" +
                    "• Collaborated with design, art, and production leads.\n" +
                    "• Mentored less experienced Unreal developers.",
            },
            {
                Title: "Technical Challenges",
                Body: "~~ Challenge: Creating Reusable C++ Base Classes ~~\n" +
                    "One of the project's key technical goals was ensuring gameplay systems were modular and reusable, allowing designers to implement and iterate on content without requiring constant programmer support.\n\n" +
                    "To achieve this, I developed a series of C++ base classes that established consistent functionality across gameplay objects through the use of events and interfaces. Variables intended for designer configuration were " +
                    "exposed to Blueprint, reducing dependency on programmers during implementation and iteration. Each object archetype could be traced back to a common parent class, promoting standardisation, reducing duplicated logic, " +
                    "and simplifying future expansion.\n\n" +
                    "To further support implementation, I produced written documentation for newly developed systems, enabling designers and other programmers to integrate features independently and consistently.\n\n" +
                    "~~ Challenge: Modular Gameplay Systems ~~\n" +
                    "Gameplay assets needed to be reusable across multiple levels and scenarios. Not only that, but they needed to be easy enough to understand and use for when designers implemented them.\n\n" +
                    "I created several modular base classes in C++, which were later used to implement the Blueprint systems for the doors, keycards, environmental assets, and level interactions. This allowed designers to rapidly create new " +
                    "encounters without requiring programmer intervention.\n\n" +
                    "~~ Challenge: Team Integration ~~\n" +
                    "As my first main experience as a lead with multiple programmers working simultaneously, maintaining compatibility and efficiency between various gameplay systems became " +
                    "increasingly difficult.\n\n" +
                    "To tackle this, I established workflows for both GitHub and Microsoft Planner to help coordinate system integration. I oversaw this first-hand, ensuring features could be merged efficiently throughout development.\n\n",
            },
            {
                Title: "Results",
                Body: "• Worked as a programming lead in a team of 25.\n" +
                    "• Managed source control within the team.\n" +
                    "• Developed several modular systems.\n" +
                    "• Created in a 9-week development cycle.",
                YTID:"ET5Gr_4zJiE",
            }
        ],
    },
    {
        Type: "Game",
        ID: 1,
        slug: "word-race",
        Name: "Word Race",
        ShortDescription: "Mobile word game built in UE5.",
        LongDescription: "Word Race is a mobile word game developed in Unreal Engine 5 for Android.\n\n" +
            "As a solo developer, I designed and implemented all gameplay systems, UI, progression mechanics, monetisation integration, and mobile deployment workflows. The project combines traditional word-guessing gameplay with vehicle-themed " +
            "progression, allowing players to unlock and expand their garage through successful gameplay.\n\n" +
            "The project was initially developed using Blueprints before later undergoing a C++ refactor to improve maintainability, scalability, and performance.\n\n" +
            "Note: This project contains AI-generated 2D artwork in the logo!",
        YTID: "tuZerEOtcpQ",
        ImgSrc: "/WordRace/WordRace-Logo.png",
        Engine: "Unreal Engine 5",
        Duration: "12 Weeks",
        Role: "Solo Developer",
        Platform: "Mobile",
        Gallery: ["/WordRace/WordRace-Logo.png", "/WordRace/WordRace_MediaSS.png", "/WordRace/WordRace_Gameplay1.png", "/WordRace/WordRace_Gameplay2.png"],
        ReleaseDate: "TBD",
        Status: "Prototype",
        Features: [
            {
                Title: "Features",
                Body: "~~ Gameplay Systems ~~\n" +
                    "• Developed a data-driven word generation system using Unreal Data Tables in preparation for localisation.\n" +
                    "• Implemented life, scoring, and resource management systems tied to gameplay progression.\n" +
                    "• Created garage progression systems tied to gameplay performance.\n" +
                    "• Developed an endless gameplay mode with milestone-based rewards to encourage replayability.\n" +
                    "• Designed a thematic fuel-based energy system to support progression and session pacing.\n\n" +
                    "~~ UI Systems ~~\n" +
                    "• Developed mobile-centric UI and navigation systems.\n" +
                    "• Developed a data-driven UI theming system using Unreal Engine Data Assets, allowing future seasonal events and visual updates without UI rewrites.\n" +
                    "• Structured UI widgets using reusable parent classes and consistent hierarchy patterns to simplify future expansion.\n\n" +
                    "~~ Android Compatibility ~~\n" +
                    "• Implemented Android deployment and testing workflows.\n" +
                    "• Integrated Google AdMob monetisation systems in preparation for production deployment."
            },
            {
                Title: "Technical Challenges",
                Body: "~~ Challenge: Data-Driven Content ~~\n" +
                    "Game depth and world quantity needed to be easily expandable, without requiring any game code modification.\n\n" +
                    "To solve this, I made use of Unreal Engine's Data Tables. This allowed me to add new content in the structure that I had created, either manually or in bulk using an CSV file. The architecture was designed to support future expansion " +
                    "through alternative data sources, including JSON-based content pipelines and online services to further remove reliability on in-engine changes.\n\n" +
                    "~~ Challenge: Blueprint to C++ Migration ~~\n" +
                    "The original prototype was developed almost entirely in blueprint, minus minor XML code to deal with Android storage permissions.\n\n" +
                    "As the project grew, maintaining increasingly complex gameplay systems (especially if I were to pivot to some form of multiplayer in the near future) would become more difficult. To ensure that scalability and maintainability were " +
                    "prioritised, I began migrating the core gameplay systems in C++. This allowed me to preserve existing functionality, while creating a more robust backend. This also had the added benefit of significantly improving my first hand " +
                    "experience with the engine's relationship between C++ and Blueprint, and its hybrid workflow.\n\n" +
                    "~~ Challenge: Mobile UI Design ~~\n" +
                    "Unlike desktop games, mobile gameplay required a bigger focus and careful consideration when it came to user experience; specifically screen space and controls.\n\n" +
                    "I iterated through several designs and layouts for the content on each page to create an interface that was equally as readable and responsive as it was intuitive and aesthetic. All of this remained true whilst still providing " +
                    "an efficient vessel for the gameplay itself."
            },
            {
                Title: "Results",
                Body: "• Demonstrated at GradEx 2025 (Staffordshire University).\n" +
                    "• Successfully tested on Android devices.\n" +
                    "• Currently undergoing a C++ backend refactor.",
            }
        ]
    },
    {
        Type: "Game",
        ID: 2,
        slug: "vr-inventories-dissertation",
        Name: "Dissertation",
        ShortDescription: "'Comparison of Inventory Designs in Virtual Reality Games'",
        LongDescription: "Designed and developed a VR car mechanic sandbox in Unreal Engine 5 to investigate the impact of inventory design on player immersion. The project implemented and compared two distinct inventory systems, an in-world metaphoric tool bench " +
            "and an abstract hand-mounted menu, and was used to conduct user testing as part of my dissertation research.\n\n" +
            "Findings demonstrated that physically integrated inventory systems significantly improved immersion and user engagement within virtual reality environments.",
        YTID: "U9DXn0CxDuM",
        ImgSrc: "/Dissertation/FYP_GameSS2.png",
        Engine: "Unreal Engine 5",
        Duration: "20 Weeks",
        Role: "Solo Developer",
        Platform: "VR",
        Gallery: ["/Dissertation/FYP_GameSS1.png", "/Dissertation/FYP_GameSS2.png", "/Dissertation/FYP_GameSS3.png", "/Dissertation/FYP_GameSS4.png", "/Dissertation/FYP_GameSS5.png"],
        Status: "Archived",
        Features: [
            {
                Title: "Gameplay Systems",
                Body: "~~ VR Interactions ~~\n" +
                    "• Developed two fully functioning inventory systems for comparative testing.\n" +
                    "• Implemented object interaction, in-game tool handling, and task progression systems.\n" +
                    "• Designed and implemented a complete VR car maintenance gameplay loop.\n\n" +
                    "~~ Task Progression ~~\n" +
                    "Participants completed a series of vehicle maintenance activities designed to require frequent tool usage:\n" +
                    "• Wheel removal\n" +
                    "• Window cleaning\n" +
                    "• Oil drainage\n" +
                    "• Oil replacement\n" +
                    "• Headlight replacement\n\n" +
                    "This task structure ensured both inventory systems were exercised repeatedly throughout testing.\n\n" +
                    "~~ VRE Plugin ~~\n" +
                    "To enhance VR interaction quality, I integrated the VR Expansion Plugin, extending the capabilities of " +
                    "Unreal Engine's default VR template and improving object interaction fidelity.\n\n" +
                    "~~ Inventory Implementation ~~\n" +
                    "• Developed a base tool system to interact with the main car maintenance loop.\n" +
                    "• Implemented both a UI-based, and physical inventory system, each built around the same underlying tool framework to ensure consistent testing conditions."
            },
            {
                Title: "Technical Challenges",
                Body: "~~ Challenge: Experimental Consistency ~~\n" +
                    "The project required two fundamentally different inventory systems to provide identical functionality, while maintaining their distinct interaction methods.\n\n" +
                    "To ensure a fair comparison, both systems were designed around the same gameplay tasks and toolset, allowing differences in player experiences to be attributed to the inventory design instead of gameplay variation.\n\n" +
                    "~~ Challenge: VR Interaction Design ~~\n" +
                    "Unlike traditional games, VR interactions require players to physically manipulate objects within a three-dimensional space, generally using some form of physics.\n\n" +
                    "To support this, I implemented physics-based interactions and leveraged the VR Expansion Plugin to improve object handling, player comfort, and interaction reliability throughout the experience.\n\n" +
                    "~~ Challenge: Controlled User Testing ~~\n" +
                    "Due to the application being used for academic research, every participant needed to experience the same tasks under the same conditions.\n\n" +
                    "I designed the gameplay loop as a controlled sandbox environment, ensuring all participants completed identical maintenance tasks regardless of which inventory system was being evaluated."
            },
            {
                Title: "User Testing and Research",
                Body: "• Designed a controlled testing environment for participant studies.\n" +
                    "• Collected and analysed questionnaire data from user testing sessions.\n" +
                    "• Evaluated immersion, usability, engagement, and player preference across both inventory systems.",
            },
            {
                Title: "Results",
                Body: "• Successfully developed and evaluated two complete VR inventory systems.\n" +
                    "• Conducted testing and questionnaire-based analysis.\n" +
                    "• Results indicated a strong preference for diegetic, physically integrated inventory design.\n" +
                    "• Achieved a First-Class grade as my undergraduate dissertation project."
            }
        ]
    },
    {
        Type: "Game",
        ID: 3,
        slug: "pcg-road-tool",
        Name: "PCG Road Tool",
        ShortDescription: "Road builder tool in UE5 using PCG.",
        LongDescription: "A procedural road generation tool developed in Unreal Engine 5 using C++ and the Procedural Content Generation (PCG) framework. The tool enables designers to rapidly generate modular " +
            "road networks, roadside props, and surrounding foliage by simply defining a spline path.\n\n" +
            "Designed with usability and iteration speed in mind, the project focuses on reducing manual world-building effort while maintaining a high degree of customisation and artistic control.",
        YTID: "UuTlaV8B75E",
        ImgSrc: "/PCG/PCGTool-MainShot.png",
        Engine: "Unreal Engine 5",
        Duration: "8 Weeks",
        Role: "Solo Developer",
        Gallery: ["/PCG/PCG_SS1.png", "/PCG/PCG_SS2.png", "/PCG/PCG_SS3.png", "/PCG/PCG_SS4.png", "/PCG/PCG_SS5.png", "/PCG/PCG_Settings.png"],
        Status: "Archived",
        Showcase: [
            {
                Name: "GitHub",
                Icon: "/UI/GitHub_Logo.png",
                Link: "https://github.com/Dy1bert/PCG_Artefact",
            }
        ],
        Features: [
            {
                Title: "Key Features",
                Body: "~~ Road Generation ~~\n" +
                    "• Generated complete road layouts from user-defined splines.\n" +
                    "• Supported modular road meshes and configurable visual variations.\n" +
                    "• Integrated directly with Unreal Engine's landscape system.\n\n" +
                    "~~ Procedural Environment Generation ~~\n" +
                    "• Generated surrounding foliage using Unreal Engine's PCG framework.\n" +
                    "• Populated roadside areas with configurable props and decorative assets.\n" +
                    "• Supported randomised placement, while maintaining consistent world composition.\n\n" +
                    "~~ Designer Workflow ~~\n" +
                    "• Centralised tool configuration through a single manager Blueprint, reducing setup complexity and improving usability.\n" +
                    "• Exposed modular parameters for meshes, foliage, props, and generation behaviour.\n" +
                    "• Included comprehensive documentation and user guidance.\n\n" +
                    "~~ Technical Architecture ~~\n" +
                    "• Developed core tool functionality in C++.\n" +
                    "• Exposed designer-facing parameters through Blueprint, enabling rapid iteration without code changes.\n" +
                    "• Leveraged Unreal Engine's PCG framework for procedural generation.",
            },
            {
                Title: "Technical Challenges",
                Body: "~~ Challenge: Integrating Splines with PCG ~~\n" +
                    "The road system needed to combine Unreal Engine's spline tools with procedural generation workflows.\n\n" +
                    "To achieve this, I developed a manager system in C++ that interpreted spline data and used it to drive both mesh placement and PCG generation, ensuring roads, props, and foliage remained synchronised throughout the level.\n\n" +
                    "~~ Challenge: Designer-Friendly Tooling ~~\n" +
                    "The primary objective of the tool was to support designers rather than programmers.\n\n" +
                    "To streamline workflows, all key functionality was exposed through configurable parameters, allowing users to customise meshes, foliage types, roadside props, and generation behaviour without modifying code.\n\n" +
                    "~~ Challenge: Procedural Environment Placement ~~\n" +
                    "Roadside environments needed to appear natural while remaining performant and predictable.\n\n" +
                    "Using Unreal Engine's PCG framework, I developed generation rules that analysed the space surrounding spline paths and populated the environment with foliage and props while respecting road boundaries and placement constraints.",
            },
            {
                Title: "Results",
                Body: "• Successfully developed a functional procedural road generation tool in Unreal Engine 5.\n" +
                    "• Reduced road and environment creation to a spline-based workflow.\n" +
                    "• Integrated procedural foliage and roadside prop placement using PCG.\n" +
                    "• Produced supporting documentation and user guides for designers.\n" +
                    "• Open-sourced the project on GitHub.",
                YTID: "O6RDTR_qnIU"
            }
        ]
    },
    {
        Type: "Game",
        ID: 4,
        slug: "twisted-trek",
        Name: "Twisted Trek",
        ShortDescription: "3D platformer set in a stylised forest using UE5.",
        LongDescription: "Twisted Trek is a 3D platformer developed in Unreal Engine 5 as a solo project focused on rapid prototyping and gameplay iteration. Over an eight-week development cycle, " +
            "I designed and implemented a complete gameplay experience featuring traversal mechanics, environmental hazards, progression systems, and player feedback systems.\n\n" +
            "The project provided valuable experience balancing scope, feature implementation, and production deadlines while delivering a complete playable experience from concept to completion.",
        YTID: "OeaUOSI9_lI",
        ImgSrc: "/TwistedTrek/TwistedTrek_IGScreenShot1.png",
        Engine: "Unreal Engine 5",
        Duration: "8 Weeks",
        Role: "Solo Developer",
        Platform: "PC",
        Gallery: ["/TwistedTrek/TwistedTrek_IGScreenShot1.png", "/TwistedTrek/TwistedTrek_IGScreenShot2.png", "/TwistedTrek/TwistedTrek_IGScreenShot3.png", "/TwistedTrek/TwistedTrek_IGScreenShot4.png"],
        Status: "Archived",
        Features: [
            {
                Title: "Gameplay Systems",
                Body: "~~ Core Gameplay ~~\n" +
                    "• Developed a complete 3D platforming gameplay loop.\n" +
                    "• Implemented custom player movement and traversal systems.\n" +
                    "• Designed progression through multiple difficulty-scaled level sections.\n\n" +
                    "~~ Interactive Elements ~~\n" +
                    "• Developed moving platforms and lift systems.\n" +
                    "• Implemented environmental hazards including lasers and spikes.\n" +
                    "• Developed collectible and reward systems incorporating keys, chests, and coin pickups.\n\n" +
                    "~~ Player Experience ~~\n" +
                    "• Implemented cinematic camera transitions.\n" +
                    "• Developed save/load functionality for player records and high scores.\n" +
                    "• Created a fully functional settings menu.",
            },
            {
                Title: "Technical Challenges",
                Body: "~~ Challenge: Rapid Development ~~\n" +
                    "The project was developed within an eight-week timeframe, requiring careful prioritisation of features and development effort.\n\n" +
                    "To maintain progress, I focused on rapidly prototyping gameplay systems using Blueprints before refining them through iteration, allowing key mechanics to be tested and validated early in development.\n\n" +
                    "~~ Challenge: Scope Management ~~\n" +
                    "The initial design scope exceeded what could realistically be delivered within the available development time.\n\n" +
                    "Throughout development, I continuously evaluated feature priorities and adjusted scope to ensure a complete and playable experience could be delivered without compromising core gameplay functionality.\n\n" +
                    "~~ Challenge: Gameplay Readability ~~\n" +
                    "Platforming challenges needed to be immediately understandable while still providing increasing difficulty.\n\n" +
                    "To achieve this, level sections were structured around progressively more complex obstacles and traversal challenges, allowing players to gradually learn and master mechanics.\n\n"
            },
            {
                Title: "Results",
                Body: "• Developed a complete playable game within an eight-week production cycle.\n" +
                    "• Delivered a full gameplay loop from concept through final implementation.\n" +
                    "• Successfully applied rapid prototyping workflows to gameplay development.\n" +
                    "• Gained practical experience balancing scope, iteration, and production deadlines.\n" +
                    "• Implemented and integrated all gameplay systems as a solo developer."
            }
        ]
    },
    {
        Type: "Web",
        ID: 5,
        slug: "portfolio",
        Name: "Portfolio",
        ShortDescription: "This website!",
        LongDescription: "A necessity turned passion project. This portfolio website was developed using Next.js and TypeScript as my introduction to modern web development.\n\n" +
            "Designed, developed, and maintained independently, the website serves as a central hub for showcasing projects, technical skills, and professional experience. The project " +
            "provided valuable experience with React-based development, responsive design, component architecture, and deployment workflows." +
            "\n\nSource code available on request!",
        ImgSrc: "/Portfolio/Portfolio_Hero.png",
        Framework: "NextJS",
        Language: "TypeScript",
        Styling: "TailwindCSS",
        Hosting: "Netlify",
        Duration: "12 Weeks",
        URL: "https://dy1bert.dev/",
        Status: "Active",
        Features: [
            {
              Title: "Website Features",
              Body: "~~ Project Showcase ~~\n" +
                  "• Developed dynamic project pages driven by structured data.\n" +
                  "• Created reusable components for displaying project information, media, and technical breakdowns.\n" +
                  "• Implemented project categorisation and carousel navigation.\n\n" +
                  "~~ User Experience ~~\n" +
                  "• Designed responsive layouts for desktop and mobile devices.\n" +
                  "• Created clear navigation and content hierarchy to improve discoverability.\n" +
                  "• Integrated media galleries, embedded video content, and external project links.\n\n" +
                  "~~ Content Management ~~\n" +
                  "• Structured project data through reusable TypeScript objects.\n" +
                  "• Simplified future project additions through a scalable content architecture.\n" +
                  "• Designed the website to support ongoing portfolio growth and maintenance.\n\n" +
                  "~~ Deployment ~~\n" +
                  "• Deployed and maintained the website using Netlify.\n" +
                  "• Integrated GitHub-based version control workflows.\n" +
                  "• Implemented iterative updates through continuous deployment."
            },
            {
                Title: "Technical Challenges",
                Body: "~~ Challenge: Learning an Unfamiliar Technology Stack ~~\n" +
                    "The project required learning modern web development technologies from scratch, including React, Next.js, TypeScript, and Tailwind CSS.\n\n" +
                    "To accelerate development, I focused on building practical features while simultaneously learning the underlying concepts, allowing the project itself to serve as both a learning platform and a production application.\n\n" +
                    "~~ Challenge: Scalable Project Architecture ~~\n" +
                    "The website needed to support future portfolio growth without requiring major structural changes.\n\n" +
                    "To achieve this, project information was separated from presentation logic using structured TypeScript data models and reusable React components, allowing new projects to be added with minimal development effort.\n\n" +
                    "~~ Challenge: Responsive Design ~~\n" +
                    "The website needed to provide a consistent experience across desktop, tablet, and mobile devices.\n\n" +
                    "I designed reusable layouts and responsive UI components that adapt to different screen sizes while maintaining readability and usability."
            },
            {
                Title: "Results",
                Body: "• Successfully designed, developed, and deployed a custom portfolio website.\n" +
                    "• Learned and applied Next.js, React, TypeScript, Tailwind CSS, and component-based development principles.\n" +
                    "• Created a scalable platform for showcasing projects and professional experience.\n" +
                    "• Established a foundation for future web development projects and continued learning."
            }
        ]
    },
];
