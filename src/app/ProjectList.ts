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
    Gallery: string[]

    Showcase?: ShowcaseLocations[];

    ProgressionPhases?: InfoSection[];
}

export interface GameProject extends Project {
    Type: "Game";
    TeamSize?: number;
    Engine?: string;
    Status: string;
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
        Gallery: ["/WordRace/WordRace-Logo.png", "/WordRace/WordRace_MediaSS.png"],
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
        Gallery: ["/UI/Up_Arrow.png"],
        Status: "Archived",
        ProgressionPhases: [
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
        ]
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
        Gallery: ["/UI/Up_Arrow.png"],
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
                Title: "Features",
                Body: "Here is a feature...",
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
        Gallery: ["/UI/Up_Arrow.png"],
        Status: "Archived",
    },
    {
        Type: "Game",
        ID: 4,
        slug: "vr-escape-room",
        Name: "VR Escape Room",
        ShortDescription: "An escape room demo for VR, built in UE5.",
        LongDescription: "This is another looooooooooooooooooooooooooooooooooooooongggg description",
        YTID: "yBJtqFcVv4s",
        ImgSrc: "/VREscapeRoom/VREscapeRoom_IGScreenShot1.jpg",
        Engine: "Unreal Engine 5",
        Date: "December 2024",
        Role: "Solo Developer",
        Gallery: ["/UI/Up_Arrow.png"],
        Status: "Archived",
    },
    {
        Type: "Web",
        ID: 5,
        slug: "portfolio",
        Name: "Portfolio",
        ShortDescription: "This website!",
        LongDescription: "This is another looooooooooooooooooooooooooooooooooooooongggg description",
        ImgSrc: "/Portfolio/Portfolio_Hero.png",
        Framework: "NextJS",
        Date: "May 2026",
        Gallery: ["/UI/Up_Arrow.png"],
        URL: "https://dy1bert.dev/",
    },
];
