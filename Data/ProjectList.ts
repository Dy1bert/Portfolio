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
}

export interface GameProject extends Project {
    Type: "Game";
    TeamSize?: number;
    Engine?: string;
    ReleaseDate?: string;
    Role: string;
    Platform?: string;
    Features?: InfoSection[];
}

export interface WebProject extends Project {
    Type: "Web";
    Framework: string;
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
            "Findings demonstrated that physically integrated inventory systems significantly improve immersion and user engagement within virtual reality environments.",
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
                    "• Developed two functioning inventory systems for comparative testing.\n" +
                    "• Implemented object interaction, in-game tool handling, and task progression systems.\n" +
                    "• Designed and implemented a complete VR car maintenance gameplay loop.\n\n" +
                    "~~ Task Progression ~~\n" +
                    "Participants completed a series of vehicle maintenance activities designed to require frequent tool usage:\n" +
                    "• Wheel removal\n" +
                    "• Window cleaning\n" +
                    "• Oil drainage\n" +
                    "• Oil replacement\n" +
                    "• Headlight replacement\n" +
                    "This task structure ensured both inventory systems were exercised repeatedly throughout testing.\n\n" +
                    "~~ VRE Plugin ~~\n" +
                    "To enhance VR interaction quality, I integrated the VR Expansion Plugin, extending the capabilities of " +
                    "Unreal Engine's default VR template and improving object interaction fidelity.\n\n" +
                    "~~ Inventory Implementation ~~\n" +
                    "• Developed a base tool system to interact with the main car maintenance loop.\n" +
                    "• Implemented both a UI-based, and physical inventory system that both made use of the tool system to keep testing fair."
            },
            {
                Title: "Technical Challenges",
                Body: "~~ Challenge: Fairness ~~\n" +
                    "The project required two fundamentally different inventory systems to provide identical functionality, while maintaining their distinct interaction methods.\n\n" +
                    "To ensure a fair comparison, both systems were designed around the same gameplay tasks and toolset, allowing differences in player experiences to be attributed to the inventory design instead of gameplay variation.\n\n" +
                    "~~ Challenge: VR Interaction Design ~~\n" +
                    "Unlike traditional games, VR interactions require players to physically manipulate objects within a three-dimensional space, generally using some form of physics.\n\n" +
                    "To support this, I implemented physics-based interactions and leveraged the VR Expansion Plugin to improve object handling, player comfort, and interaction reliability throughout the experience.\n\n" +
                    "~~ Challenge: Gameplay Consistency ~~\n" +
                    "Due to the application being used for academic research, every participant needed to experience the same tasks under the same conditions.\n\n" +
                    "I designed the gameplay loop as a controlled sandbox environment, ensuring all participants completed identical maintenance tasks regardless of which inventory system was being evaluated."
            },
            {
                Title: "User Testing and Research",
                Body: "• Designed a controlled testing environment for participant studies.\n" +
                    "• Collected and analysed questionnaire data from user testing sessions.\n" +
                    "• Evaluated immersion, usability, and player preference across both inventory systems.",
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
        LongDescription: "A PCG tool for UE5, built in C++ with the PCG plugin for Unreal Engine. Create modular road systems with customisable props; just place down a spline! Built with designers in mind, the main purpose is to streamline the world-building process.",
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
                Title: "Feature Breakdown",
                Body: "• Fully customisable road layouts using splines\n• All controlled through a single blueprint\n• Works with default UE landscape system\n• Modular parameters (Meshes, Foliage, Props)" +
                    "\n• Complete with user guide\n• Full technical breakdown available upon request!",
            },
            {
                Title: "Technical Overview",
                Body: "Starting with the landscape tool, the user needs to place splines in the desired path for the road. The manager blueprint then generates the road and prop meshes along each spline point. Once a PCG volume has been applied, the manager blueprint assigns " +
                    "the tree mesh/es to it. The PCG tool then reads the area around the spline, and generates a basic forest. It also adds roadside props using a global Z offset dependant on whether the curb is displayed or not. These 2 areas that the PCG volume utilises " +
                    "are the only 'random' elements throughout the tool.",
                YTID: "O6RDTR_qnIU"
            },
            {
                Title: "Main Takeaways & Challenges",
                Body: "For the most part, this tool does exactly what I had intended for and designed. It required me to dive deeper into the spline and landscape systems within the engine in order to create a tool that worked with them seamlessly. " +
                    "The main challenges that I ran into for this project were mostly scope-related. I had originally severely over-estimated how much was possible using a tool that was brand new to me in 8 weeks. The main challenge that I would like to " +
                    "try to tackle moving forward is to create the ability to have crossroads; whether that be with a separate intersection mesh, or using the junction system already built-in to the landscape tool. Currently, if 2 roads were to cross, the meshes just clash."
            }
        ]
    },
    {
        Type: "Game",
        ID: 4,
        slug: "twisted-trek",
        Name: "Twisted Trek",
        ShortDescription: "3D platformer set in a stylised forest using UE5.",
        LongDescription: "Twisted Trek is a 3D platformer set in a stylised forest environment. Unlock your inner explorer as you traverse the land brimming with engaging mechanics and challenging level design. Over the 8-week development cycle, the main " +
            "focus was rapid prototyping, something that I still personally hail as one of my strongest skills.",
        YTID: "OeaUOSI9_lI",
        ImgSrc: "/TwistedTrek/TwistedTrek_IGScreenShot1.png",
        Engine: "Unreal Engine 5",
        Duration: "8 Weeks",
        Role: "Solo Developer",
        Platform: "PC",
        Gallery: ["/TwistedTrek/TwistedTrek_IGScreenShot1.png", "/TwistedTrek/TwistedTrek_IGScreenShot2.png", "/TwistedTrek/TwistedTrek_IGScreenShot3.png", "/TwistedTrek/TwistedTrek_IGScreenShot4.png"],
        Status: "Archived",
        ProgressionPhases: [
            {
                Title: "Section 1 - Ideation",
                Body: "Twisted Trek started out as a brain-storm of features that I wanted to develop. This very quickly turned into a list of features that you would typically see in a platformer. Due to this project " +
                    "being created as part of a University module, my only requirements were that the project utilised rapid prototyping (exclusively in blueprint), and the end product was engaging. A platformer ticked both " +
                    "of these boxes.",
            },
            {
                Title: "Section 2 - Planning",
                Body: "To design Twisted Trek, I needed to ensure that I had a clear plan heading into development. This meant that I needed to know exactly what I was going to create, and how I was going to it. " +
                    "This meant created several UML diagrams and flow-charts alongside collecting several assets, all before placing a single blueprint node. This entire process took the best part of a week, and in relfection, " +
                    "this was the best decision that I made throughout the entire duration of the project, as it ensured a smooth transition from planning to development.",
            },
            {
                Title: "Section 3 - Designing",
                Body: "The game design itself is fairly straight-forward as my main focus was on the prototyping instead of the level itself. The player spawns in at the start, and there a 3 main sections with their own challenges, " +
                    "scaling with difficulty as you go through the level. The player can choose to collect keys to open different chests throughout the level, with the main aim being to complete the level faster that the best time.",
            },
            {
                Title: "Section 4 - Prototype & Iteration",
                Body: "Once in engine, I started by creating my 3D side-scroller character and the complimentary input system. The level pieces themselves took many forms, from moving platforms to lasers. The full list of features are above. " +
                    "Over the course of the 6 total weeks of development, I had successfully managed to create a full and engaging platformer experience utilising my years of blueprinting experience. Overall, it was a success, but I did also run into a " +
                    "few challenges along the way. The biggest lesson that I learnt from this project is that with less time for development, there needs to be a compromise with either the amount of content, " +
                    "or the polish of the content that already exists. I thought that I could balance both, so ended up without either a wide variety of features, or any heavily polished features.",
            },
            {
                Title: "Section 5 - Future Development?",
                Body: "As it stands, I have no plans to further develop this project. This project helped me out a lot with the overall flow of creating a usable prototype under a deadline, but I have no " +
                    "reason or motivation to build on the foundations.",
            },
        ],
        Features: [
            {
                Title: "Level Features",
                Body: "• Lifts\n• Chest/Key System\n• Lasers\n• Spikes\n• Coins\n• Cinematic Camera Transitions",
            },
            {
                Title: "External Game Features",
                Body: "• Save/Load System (High Score)\n• Fully Operational Settings Menu",
            }
        ]
    },
    {
        Type: "Web",
        ID: 5,
        slug: "portfolio",
        Name: "Portfolio",
        ShortDescription: "This website!",
        LongDescription: "A necessity turned passion project. This portfolio website is my maiden voyage into the world of web-development and the React framework. Built with NextJS, I planned, designed, and iterated the website until I achieved what you see in front of you!" +
            "\n\nSource code available on request!",
        ImgSrc: "/Portfolio/Portfolio_Hero.png",
        Framework: "NextJS",
        Duration: "12 Weeks",
        URL: "https://dy1bert.dev/",
        Status: "Active",
        ProgressionPhases: [
            {
                Title: "Section 1 - Necessity",
                Body: "Being a budding Game Dev, as is the case with the vast majority of creative fields, a portfolio is a must. Whether that be in the form of a simple list, an itch.io page, or a fully custom-built website. I had created several portfolios in the past, " +
                    "mostly using templates and tools from websites such as Wix, and Netlify (who I am currently using to host this site!). As I graduated University and started getting serious about breaking into the industry, I realised that the free templates and " +
                    "website builders just weren't going to cut it anymore. At heart, I am a creator; I love making things. So here we are, after a couple of months of solo research (and plenty of mistakes), I am the proud owner of my own bespoke portfolio website.",
                Image: {src: "/Portfolio/CollegePortfolio_SS.png", alt: "Old College Portfolio"}
            },
            {
                Title: "Section 2 - Design",
                Body: "Once I had decided it was time to learn how to do this, I then took to the well of knowledge that is YouTube and searched 'how to create a website'. After going down that rabbit hole for a little while, I stumbled across the channel 'JavaScript Mastery'. " +
                    "This was my first step in starting my journey as a web developer. As is the case with any good project, the next stage was to start to design the layouts and plan the content that I wanted on each page. For this, I used Figma to mock up a basic layout. " +
                    "My main intention was to keep the website layout concise, with no confusing paths or unclear sections. Naturally, some aspects were adapted during development, but overall, the design was successful.",
                Image: {src: "/Portfolio/FigmaPlan.png", alt: "Figma Plan"}
            },
            {
                Title: "Section 3 - Learning & Making Mistakes",
                Body: "As is the case when learning something new, the process didn't go 100% to plan, nor did it go anywhere near as smooth as I would've liked. I had to recreate the entire project once as I managed to break something in the dependencies whilst trying to " +
                    "import a 'shadcn' component. There are also components and sections that I built at the start of the project that I would love to adapt with my new-found knowledge, but my priority is publishing the site before any minor tweaks. The experience has been " +
                    "far from doom and gloom though! I have managed to go from zero JavaScript and web development knowledge, to creating a usable, clean, and effective personal portfolio. I have been able to implement all of the features that I wanted. Up to this point, " +
                    "I have used:\n" +
                    "\n" +
                    "• NextJS -> React (TypeScript, HTML, CSS with Tailwind)\n• Figma\n• shadcn\n• JetBrains WebStorm\n• GitHub",
            },
            {
                Title: "Section 4 - What Now?",
                Body: "As it stands, the website is finished in terms of content and layout. I am pleased with the end result, and the things that I have learnt over the time that I have been developing this website. Of course, as I evolve, there will " +
                    "be more projects to add/change. Potentially, in the future, I may either overhaul, or re-create the website.",
            },
        ]
    },
];
