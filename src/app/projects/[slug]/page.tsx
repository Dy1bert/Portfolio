import { ProjectList } from "@/app/ProjectList";
import Image from "next/image";
import { notFound } from "next/navigation";
import VideoPlayer from "@/components/VideoPlayer";
import ProjectCarousel from "@/components/ProjectCarousel";

interface PageProps {
    params: Promise<{
        slug: string;
    }>;
}

export default async function ProjectPage({ params }: PageProps) {
    const { slug } = await params;

    const project = ProjectList.find(
        (p) => p.slug === slug
    );

    if (!project) {
        notFound();
    }

    return (
        <main className="min-h-screen w-full flex flex-col items-center bg-background-a text-background-b px-6 py-16">

                {/* Title */}
                <h1 className="text-8xl font-bold mt-16">
                    {project.Name}
                </h1>


                {/* Project Metadata -- General */}
                <div className="flex flex-wrap gap-4 mt-8 text-sm text-gray-400">

                    {project.Date && (
                        <span className="bg-neutral-800 px-3 py-1 rounded-lg">
                            Development Started: {project.Date}
                        </span>
                    )}

                    {/* Project Metadata -- Games */}

                    {project.Type === "Game" && project.Status && (
                        <span className="bg-neutral-800 px-3 py-1 rounded-lg">
                            Status: {project.Status}
                        </span>
                    )}

                    {project.Type === "Game" && project.ReleaseDate && (
                        <span className="bg-neutral-800 px-3 py-1 rounded-lg">
                            Release Date: {project.ReleaseDate}
                        </span>
                    )}

                    {project.Type === "Game" && project.Engine && (
                        <span className="bg-neutral-800 px-3 py-1 rounded-lg">
                            Engine: {project.Engine}
                        </span>
                    )}

                    {project.Type === "Game" && project.Role && (
                        <span className="bg-neutral-800 px-3 py-1 rounded-lg">
                            Role: {project.Role}
                        </span>
                    )}

                    {project.Type === "Game" && project.TeamSize && (
                        <span className="bg-neutral-800 px-3 py-1 rounded-lg">
                            Team Size: {project.TeamSize}
                        </span>
                    )}

                    {/* Project Metadata -- Web */}

                    {project.Type === "Web" && project.Framework && (
                        <span className="bg-neutral-800 px-3 py-1 rounded-lg">
                            Framework: {project.Framework}
                        </span>
                    )}

                </div>


                {/* Hero Image */}
                <div className="mt-8 border-t border-background-b/25 max-w-6xl w-full pt-8 flex flex-col items-center">
                    <Image
                        src={project.ImgSrc}
                        alt={project.Name}
                        width={500}
                        height={300}
                        className="rounded-xl object-cover"
                        priority
                    />
                </div>


                {/* Description */}
                <div className="mt-8 text-lg text-gray-300 leading-relaxed max-w-6xl w-full whitespace-pre-line">
                    {project.LongDescription}
                </div>


                {/* Video Section */}
                <div className="mt-8 border-t border-background-b/25 max-w-6xl w-full"/>
                <div className="mt-8 flex flex-col md:items-start items-center">
                    <h2 className="text-2xl font-semibold mb-6">
                        Gameplay
                    </h2>
                        <VideoPlayer VideoID={project.YTID}/>
                </div>

                {/* Progression Phases */}
                {project.ProgressionPhases && (
                    <div className="mt-8 border-t border-background-b/25 max-w-6xl w-full"/>
                )}

                {project.ProgressionPhases && (
                    project.ProgressionPhases.map((phase, index) => (
                        <div className="mt-8 flex flex-col md:items-start items-center">
                            <div>{phase.Title}</div>
                            <div>{phase.Body}</div>
                        </div>
                    ))
                )}


                {/* Screenshot Gallery */}
                <div className="mt-8 border-t border-background-b/25 max-w-6xl w-full"/>
                <div className="mt-8 flex flex-col md:items-start items-center">
                    <h2 className="text-2xl font-semibold mb-6">
                        Gallery
                    </h2>
                        <ProjectCarousel project={project}/>
                </div>
        </main>
    );
}
