import { ProjectList } from "@/app/ProjectList";
import Image from "next/image";
import { notFound } from "next/navigation";
import VideoPlayer from "@/components/VideoPlayer";
import {Carousel} from "@/components/ui/carousel";
import CarouselWithThumbs from "@/components/ProjectCarousel";
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
        <main className="min-h-screen w-full flex flex-col items-center bg-background-a text-white px-6 py-16">

                {/* Title */}
                <h1 className="text-6xl font-bold mt-16">
                    {project.Name}
                </h1>


                {/* Project Metadata */}
                <div className="flex flex-wrap gap-4 mt-8 text-sm text-gray-400">

                    {project.Engine && (
                        <span className="bg-neutral-800 px-3 py-1 rounded-lg">
                            Engine: {project.Engine}
                        </span>
                    )}

                    {project.Role && (
                        <span className="bg-neutral-800 px-3 py-1 rounded-lg">
                            Role: {project.Role}
                        </span>
                    )}

                    {project.TeamSize && (
                        <span className="bg-neutral-800 px-3 py-1 rounded-lg">
                            Team Size: {project.TeamSize}
                        </span>
                    )}

                    {project.Date && (
                        <span className="bg-neutral-800 px-3 py-1 rounded-lg">
                            Development Started: {project.Date}
                        </span>
                    )}

                    {project.Status && (
                        <span className="bg-neutral-800 px-3 py-1 rounded-lg">
                            Status: {project.Status}
                        </span>
                    )}

                    {project.ReleaseDate && (
                        <span className="bg-neutral-800 px-3 py-1 rounded-lg">
                            Release Date: {project.ReleaseDate}
                        </span>
                    )}

                </div>


                {/* Hero Image */}
                <div className="mt-10 flex flex-col items-center">
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
                <div className="mt-10 text-lg text-gray-300 leading-relaxed">
                    {project.LongDescription}
                </div>


                {/* Video Section */}
                {project.YTID && (
                    <div className="mt-16">
                        <h2 className="text-2xl font-semibold mb-6">
                            Gameplay
                        </h2>
                        <div className="mt-4 flex flex-col items-center">
                            <VideoPlayer VideoID={project.YTID}/>
                        </div>
                    </div>
                )}


                {/* Screenshot Gallery */}
                {project.Gallery && (
                    <div className="mt-16">

                        <h2 className="text-2xl font-semibold mb-6">
                            Screenshots
                        </h2>

                        <ProjectCarousel project={project} />

                    </div>
                )}
        </main>
    );
}
