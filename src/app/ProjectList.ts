export interface Project {
    ID: number;
    slug: string;
    YTID: string;
    ImgSrc: string;

    Name: string;
    ShortDescription: string;
    LongDescription: string;

    TeamSize?: number;
    Engine?: string;
    Date: string;
    Role: string;
    Gallery: string[];
    ReleaseDate?: string;
    Status: string;
}

export const ProjectList: Project[] = [
    {
        ID: 0,
        slug: "word-race",
        Name: "Word Race",
        ShortDescription: "Mobile word game built in UE5.",
        LongDescription: "Word Race is a prototype word game for mobile. Originally started as a University project, Word Race uses Unreal Engine 5 to combine to world of word games with that of motorsports. " +
            "Build your dream garage and race your way to victory! Currently setup on Android exclusively, I am the sole developer of this project, and I hope to revisit this soon to make it available on the Play Store!" +
            "\n\nNote: This project contains AI-generated 2D artwork in the logo!",
        YTID: "tuZerEOtcpQ",
        ImgSrc: "/WordRace-Logo.png",
        Engine: "Unreal Engine 5",
        Date: "July 2025",
        Role: "Solo Developer",
        Gallery: ["/WordRace/WordRace-Logo.png", "/WordRace/WordRace_MediaSS.png"],
        ReleaseDate: "TBD",
        Status: "Prototype",
    },
    {
        ID: 1,
        slug: "floor-54",
        Name: "Floor 54",
        ShortDescription: "Mech dungeon crawler built in UE5.",
        LongDescription: "This is still a looooooooooooooooooooooooooooooooooooooongggg description",
        TeamSize: 25,
        YTID: "9BcFfeiQkx0",
        ImgSrc: "/Floor54-TitleShot.png",
        Engine: "Unreal Engine 5",
        Date: "July 2025",
        Role: "Lead Programmer",
        Gallery: ["/file.svg"],
        Status: "Archived",
    },
    {
        ID: 2,
        slug: "pcg-road-builder-tool",
        Name: "PCG Road Builder Tool",
        ShortDescription: "Road builder tool in UE5.",
        LongDescription: "This is another looooooooooooooooooooooooooooooooooooooongggg description",
        YTID: "UuTlaV8B75E",
        ImgSrc: "/PCGTool-MainShot.png",
        Engine: "Unreal Engine 5",
        Date: "December 2024",
        Role: "Solo Developer",
        Gallery: ["/file.svg"],
        Status: "Archived",
    },
    {
        ID: 3,
        slug: "test",
        Name: "Test",
        ShortDescription: "This is yet another project description",
        LongDescription: "This is another looooooooooooooooooooooooooooooooooooooongggg description",
        YTID: "",
        ImgSrc: "/TestBG.png",
        Engine: "Unreal Engine 5",
        Date: "07-2025",
        Role: "Solo Developer",
        Gallery: ["/file.svg"],
        Status: "Archived",
    },
    {
        ID: 4,
        slug: "test-2",
        Name: "Test 2",
        ShortDescription: "This is yet another project description",
        LongDescription: "This is another looooooooooooooooooooooooooooooooooooooongggg description",
        YTID: "",
        ImgSrc: "/TestBG.png",
        Engine: "Unreal Engine 5",
        Date: "07-2025",
        Role: "Solo Developer",
        Gallery: ["/file.svg"],
        Status: "Archived",
    },
];
