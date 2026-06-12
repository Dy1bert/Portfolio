export interface Experience {
    Title: string;
    Duration: string;
    Body: string[];
    href?: string;

    Type: "Employment" | "Education";
    ID: number;
}

export interface EmploymentItem extends Experience {
    Type: "Employment";
    JobTitle: string;
}

export interface EducationItem extends Experience {
    Type: "Education";
}

export type ExperienceItem = EmploymentItem | EducationItem;

export const ExperienceList: ExperienceItem[] = [
    {
        Type: "Education",
        ID: 0,
        Title: "Staffordshire University",
        Duration: "(2023 - 2025)",
        Body: ["BSc (Hons) Games Development (First Class)"]
    },
    {
        Type: "Education",
        ID: 1,
        Title: "South Staffs College",
        Duration: "(2022 - 2023)",
        Body: ["HNC in Creative Media Design - Games Development (Distinction*)"]
    },
    {
        Type: "Education",
        ID: 2,
        Title: "South Staffs College",
        Duration: "(2020 - 2022)",
        Body: ["UAL Level 3 Diploma in Creative Media Design (Distinction*)"]
    },
    {
        Type: "Employment",
        ID: 3,
        Title: "AliCodeMakers",
        Duration: "(May 2026 - Present)",
        JobTitle: "Content Creator - Instagram (>75k Followers!)",
        Body: ["As part of a team of 3 developers, we aim to regularly upload devlogs for a project full of user-led ideas!"],
        href: "https://www.instagram.com/alicodemakers/",
    },
    {
        Type: "Employment",
        ID: 4,
        Title: "Software Academy",
        Duration: "(August 2025 - Present)",
        JobTitle: "Course Lead - 3D Games Design & Development",
        Body: ["I help create and maintain several NCFE-accredited curricula, alongside having the responsibility of ensuring that the quality of teaching is kept to " +
            "a very high standard. I work as part of a team of 3 to create relevant and challenging projects for our students to learn college-level game development as early as 8 years old!",
            "Note: All projects are under an NDA, but more information is available upon request."]
    },
    {
        Type: "Employment",
        ID: 5,
        Title: "Software Academy",
        Duration: "(November 2024 - August 2025)",
        JobTitle: "Tutor - 3D Games Design & Development",
        Body: ["From the start of my time with the academy, I have been mastering the fundamentals of Unreal Engine by teaching it to nearly 100 students aged between 8 and 16!"]
    },
];