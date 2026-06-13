export interface Experience {
    Title: string;
    href?: string;

    Type: "Employment" | "Education";
    ID: number;
}

export type Employer = {
    Role: string;
    Duration: string;
    Points: string[];
}

export interface EmploymentItem extends Experience {
    Type: "Employment";
    Roles: Employer[];
}

export interface EducationItem extends Experience {
    Type: "Education";
    Grade: string;
    Course: string;
    Duration: string;
}

export type ExperienceItem = EmploymentItem | EducationItem;

export const ExperienceList: ExperienceItem[] = [
    {
        Type: "Education",
        ID: 0,
        Title: "Staffordshire University",
        Duration: "2023 - 2025",
        Course: "BSc (Hons) Games Development",
        Grade: "First Class"
    },
    {
        Type: "Education",
        ID: 1,
        Title: "South Staffs College",
        Duration: "2022 - 2023",
        Course: "HNC in Creative Media Design - Games Development",
        Grade: "Distinction"
    },
    {
        Type: "Education",
        ID: 2,
        Title: "South Staffs College",
        Duration: "2020 - 2022",
        Course: "UAL Level 3 Diploma in Creative Media Design",
        Grade: "Distinction"
    },
    {
        Type: "Employment",
        ID: 3,
        Title: "AliCodeMakers",
        Roles: [
            {
                Role: "Unreal Engine Developer - Community Project",
                Duration: "May 2026 - Present",
                Points: ["Develop modular gameplay systems for a community-driven Unreal Engine project.",
                    "Collaborate within a team of developers using Git source control workflows",
                    "Work within rapid development cycles to implement community-selected mechanics and features"]
            }
        ],
        href: "https://www.instagram.com/alicodemakers/",
    },
    {
        Type: "Employment",
        ID: 4,
        Title: "Software Academy",
        Roles: [
            {
                Role: "Course Lead - 3D Games Design & Development",
                Duration: "Aug 2025 - Present",
                Points: ["Promoted from Tutor to Course Lead within 9 months of joining the academy.",
                "Lead the development of NCFE-accredited Unreal Engine curriculum and educational projects.",
                "Designed and developed 6 Unreal Engine projects used within accredited courses (under NDA).",
                "Create tutorials, documentation, and learning resources.",
                "Collaborate with a team of Course Leads to maintain teaching standards and course quality.",
                "Manage multiple content development projects while consistently meeting production deadlines."]
            },
            {
                Role: "Tutor - 3D Games Design & Development",
                Duration: "Nov 2024 - Aug 2025",
                Points: ["Delivered NCFE-accredited Unreal Engine courses to over 100 students aged 8–16.",
                    "Provided technical support, mentoring, and project guidance to students and staff.",
                    "Assessed student progress and supported learners through the completion of full game projects."],
            },
        ],
    },
];