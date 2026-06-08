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

    Date: string;
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
        slug: "word-race",
        Name: "Word Race",
        ShortDescription: "Mobile word game built in UE5.",
        LongDescription: "Word Race is a prototype word game for mobile. Originally started as a University project, Word Race uses Unreal Engine 5 to combine the world of word games with that of motorsports. " +
            "Build your dream garage and race your way to victory! Currently set up on Android exclusively, I am the sole developer of this project, and I hope to revisit this soon to make it available on the Play Store!" +
            "\n\nNote: This project contains AI-generated 2D artwork in the logo!",
        YTID: "tuZerEOtcpQ",
        ImgSrc: "/WordRace/WordRace-Logo.png",
        Engine: "Unreal Engine 5",
        Date: "July 2025",
        Role: "Solo Developer",
        Gallery: ["/WordRace/WordRace-Logo.png", "/WordRace/WordRace_MediaSS.png", "/WordRace/WordRace_Gameplay1.png", "/WordRace/WordRace_Gameplay2.png"],
        ReleaseDate: "TBD",
        Status: "Prototype",
        ProgressionPhases:[
            {
                Title: "Section 1 - Ideation",
                Body: "Word Race started as a University project for a module titled 'Mobile Games Development'. I first iterated through several ideas, starting with a hangman-style game, all the way to an idle clicker!" +
                    " Eventually, I landed on bringing my favourite thing (outside of games), cars, together with my favourite genre of mobile games, word games. I pitched it to my group and received very positive feedback.",
            },
            {
                Title: "Section 2 - Planning",
                Body: "Planning started with research into current games that I wanted to take inspiration from, including but not limited to: Wordscapes, Wordle, and Scrabble. I eventually decided that I wanted to focus more " +
                    "on the car side of it, so I ended up choosing a hangman-esque guessing system that takes lives for every incorrect guess. I then began the creation of my design documentation, alongside some early UI layouts.",
                Image: {src: "/WordRace/WordRace_UIPlanning.jpg", alt: "WordRace UI Design"},
            },
            {
                Title: "Section 3 - Prototyping",
                Body: "When I got into the engine, I started to use my plan in order to bring my idea to life. I created a basic menu navigation system as well as a system to pick random words from a data table asset. " +
                    "This taught me a lot about the flow of UI and the difference in the thought process that is required for Mobile games. At this point, the project was runnable exclusively through the built-in mobile emulation.",
                YTID: "7CVoalzfxIc",
            },
            {
                Title: "Section 4 - First Build",
                Body: "After approximately 4 weeks of development, I had my first build running on an old Huawei. This version of the project had a start menu and a basic gameplay loop that allowed the user to pick a word length, " +
                    "generate a random word from a data table, and then guess a letter. The foundations had been laid, and, from here, the pace really picked up.",
                YTID: "Z_XHINFKv0s",
            },
            {
                Title: "Section 5 - Current State",
                Body: "As it stands, the game itself is in an early alpha build. I used this version of the game as my final submission during week 9 of development, then roughly 1 month after that for GradEx 2025, held at the University of Staffordshire. " +
                    "During GradEx, Word Race was shortlisted as Top 5 in the Games Design & Development category! This game me the motivation to continue working on this post-graduation. To this day, Word Race has taken a back seat to some other exciting " +
                    "projects with both Software Academy, and my own studio UnderWaterGames. The most recent developments are with the new backend that I am rebuilding in C++. Word Race was 99% blueprint at its inception, so with some time on my hands, I " +
                    "managed to recreate (and improve) most of my original systems, which is where the game sits today!",
                Image: { src: "/WordRace/WordRace_GradEx.png", alt: "GradEx Set Up" },
            },
            {
                Title: "Section 6 - More Development?",
                Body: "As mentioned, Word Race is currently undergoing a complete back-end overhaul into C++. It has been some time since this started, and a lot of that original motivation has vanished. I still intend for this to be my first publicly released game, " +
                    "and if the stars align, before the end of the year (2026). My main goal is to implement peer-to-peer multiplayer to offset any server costs, but still make the game more favourable by including multiplayer features.",
            },
        ]
    },
    {
        Type: "Game",
        ID: 1,
        slug: "floor-54",
        Name: "Floor 54",
        ShortDescription: "Mech dungeon crawler built in UE5.",
        LongDescription: "Floor 54 is a rogue-like inspired dungeon crawler built in UE5. Created with a team of 25 people, I led the programming team on a project that earned the top 3 spot out of nearly 30 projects that were submitted! Created during a 3rd year " +
            "university module, Floor 54 remains one of the biggest learning experiences of my game development journey to date. Whether I was mentoring younger students, handling the GitHub repository, or building systems from the ground up, I was sure to " +
            "give it my all! Development took less than 9 weeks total, from ideation to polish and submission.\n\nSource code available on request.",
        TeamSize: 25,
        YTID: "9BcFfeiQkx0",
        ImgSrc: "/Floor54/Floor54-TitleShot.png",
        Engine: "Unreal Engine 5",
        Date: "July 2025",
        Role: "Lead Programmer",
        Gallery: ["/Floor54/Floor54_Gameplay1.png", "/Floor54/Floor54_Gameplay2.png", "/Floor54/Floor54_Gameplay3.png", "/Floor54/Floor54_Gameplay4.png", "/Floor54/Floor54_Menu.png"],
        Status: "Archived",
        Features: [
            {
                Title: "Personal Contributions",
                Body: "Throughout the project, I created several mechanics for the project. See the video below for an isolated run-through." +
                    "\n- Doors\n- Interactive Level building pieces\n- Key cards\n- Bespoke level system\n- UI integration\n- Enemy parent class\n- Enemy spawner (Deprecated)",
                YTID:"ET5Gr_4zJiE",
            },
            {
                Title: "Additional Responsibilities (Lead Programmer)",
                Body: "Within the group, I had the most experience with Unreal Engine. This, alongside my willingness to succeed in any position, landed me as the lead programmer and tech guru for the group. This meant that alongside my personal contributions, " +
                    "I had to make sure that every other developer had a task, knew how to complete the task, and then ensured that they all integrated seamlessly. I liaised with the other leads from the remaining disciplines to meet any and all targets and " +
                    "criteria required for our game to succeed. I thoroughly enjoyed this experience, and I would love to take on a similar challenge someday!",
            },
        ],
    },
    {
        Type: "Game",
        ID: 2,
        slug: "pcg-road-tool",
        Name: "PCG Road Tool",
        ShortDescription: "Road builder tool in UE5 using PCG.",
        LongDescription: "A PCG tool for UE5, built in C++ with the PCG plugin for Unreal Engine. Create modular road systems with customisable props; just place down a spline! Built with designers in mind, the main purpose is to streamline the world-building process.",
        YTID: "UuTlaV8B75E",
        ImgSrc: "/PCG/PCGTool-MainShot.png",
        Engine: "Unreal Engine 5",
        Date: "December 2024",
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
        ID: 3,
        slug: "twisted-trek",
        Name: "Twisted Trek",
        ShortDescription: "3D platformer set in a stylised forest using UE5.",
        LongDescription: "Twisted Trek is a 3D platformer set in a stylised forest environment. Unlock your inner explorer as you traverse the land brimming with engaging mechanics and challenging level design. Over the 8-week development cycle, the main " +
            "focus was rapid prototyping, something that I still personally hail as one of my strongest skills.",
        YTID: "OeaUOSI9_lI",
        ImgSrc: "/TwistedTrek/TwistedTrek_IGScreenShot1.png",
        Engine: "Unreal Engine 5",
        Date: "February 2025",
        Role: "Solo Developer",
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
        Type: "Game",
        ID: 4,
        slug: "vr-inventories-dissertation",
        Name: "Dissertation",
        ShortDescription: "'Comparison of Inventory Designs in Virtual Reality Games'",
        LongDescription: "Designed and developed a VR car mechanic sandbox in Unreal Engine 5 to investigate the impact of inventory design on player immersion. The project implemented and compared two distinct inventory systems, an in-world metaphoric tool bench " +
            "and an abstract hand-mounted menu, and was used to conduct user testing as part of my dissertation research. Findings demonstrated that physically integrated inventory systems significantly improve immersion and player engagement in virtual reality environments.",
        YTID: "U9DXn0CxDuM",
        ImgSrc: "/VREscapeRoom/VREscapeRoom_IGScreenShot1.jpg",
        Engine: "Unreal Engine 5",
        Date: "March 2025",
        Role: "Solo Developer",
        Gallery: ["/Dissertation/FYP_GameSS1.png", "/Dissertation/FYP_GameSS2.png", "/Dissertation/FYP_GameSS3.png", "/Dissertation/FYP_GameSS4.png", "/Dissertation/FYP_GameSS5.png"],
        Status: "Archived",
        Features: [
            {
                Title: "Overview",
                Body: "For my dissertation, I investigated how different inventory design philosophies affect player immersion in virtual reality games. To support the research, I independently designed and developed a VR car mechanic sandbox prototype in Unreal Engine 5, " +
                    "featuring two fully functional inventory systems: a metaphoric, in-world tool bench and an abstract hand-mounted menu." +
                    "\n\n" +
                    "The project was created as a controlled testing environment where participants completed a series of maintenance tasks using both inventory systems. Through user testing and questionnaire-based analysis, I evaluated how each approach influenced " +
                    "immersion, engagement, usability, and player preference. The findings showed a strong preference for the metaphoric design, highlighting the importance of natural interactions and physical world integration in VR experiences." +
                    "\n\n" +
                    "This project combined VR gameplay programming, interaction design, UI/UX research, user testing, and technical implementation, providing practical insight into how immersive interfaces can improve player experience in virtual reality applications.",
            },
            {
                Title: "Technical Breakdown",
                Body: "The project itself consisted of one main level that each participant would play twice. The main section of the game, the car repair, is mostly contained inside of a single blueprint. There are a total of 5 tasks:\n\n" +
                    "1. Remove the wheels\n" +
                    "2. Clean the windows\n" +
                    "3. Empty oil pan\n" +
                    "4. Refill oil level\n" +
                    "5. Replace a faulty headlight\n\n" +
                    "For the metaphoric system, which made use of physical tools, these tasks were heavily based on the physics system built into the VR template, as is the case for the majority of VR interactions within a game engine. For the character and some " +
                    "enhanced template features, I made use of the VR Expansion Plugin (VRE), an open source plugin designed to enhance VR interactions and gameplay elements (https://vreue4.com).\n\n" +
                    "For the abstract system, the interaction with the car was exactly the same, but to gain access to the tools, I created a VR interactable UI menu. This could be used with the thumbstick of the hand that the menu was opened on, or using a pointer " +
                    "on the opposite hand.",
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
        Date: "March 2026",
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
