import { ProjectList } from "@/Data/ProjectList";
import Image from "next/image";
import { notFound } from "next/navigation";
import VideoPlayer from "@/components/VideoPlayer";
import ProjectGalleryCarousel from "@/components/ProjectGalleryCarousel";
import Link from "next/link";

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
        <main id={"project"} className="min-h-screen w-full flex flex-col items-center bg-background-a text-background-b px-6 py-16">

                {/* Title */}
                <h1 className="text-4xl md:text-8xl corner-title mt-16">
                    {project.Name}
                </h1>

                {/* Project Metadata -- General */}
                <div className="flex flex-wrap gap-4 mt-8 text-sm text-gray-400">
                    {project.Duration && (
                        <span className="bg-neutral-800 px-3 py-1 rounded-lg">
                            Duration: {project.Duration}
                        </span>
                    )}
                    {project.Status && (
                        <span className="bg-neutral-800 px-3 py-1 rounded-lg">
                            Status: {project.Status}
                        </span>
                    )}

                    {/* Project Metadata -- Games */}
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
                    {project.Type === "Game" && project.Platform && (
                        <span className="bg-neutral-800 px-3 py-1 rounded-lg">
                            Platform: {project.Platform}
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
                <div className="mt-8 border-t border-background-b/25 max-w-7xl w-full pt-8 flex flex-col items-center">
                    <Image
                        src={project.ImgSrc}
                        alt={project.Name}
                        width={500}
                        height={300}
                        className="rounded-xl object-cover shadow-xl shadow-black"
                        priority
                    />
                </div>

                {/* Description */}
                <div className="mt-12 text-lg text-background-b leading-relaxed max-w-7xl w-full whitespace-pre-line">
                    {project.LongDescription}
                </div>

                {project.Type === "Web" && project.URL && (
                    <div className="mt-8 flex flex-col max-w-3xl w-full items-center">
                        <a href={project.URL} target="_blank" className="text-2xl font-semibold underline hover:font-bold">
                            LINK
                        </a>
                    </div>
                )}

                {/* Video Section */}
                {project.YTID && (
                    <div className="mt-8 border-t border-background-b/25 max-w-7xl w-full"/>
                )}
                {project.YTID && (
                    <div className="mt-8 flex flex-col md:items-start items-center">
                        <h2 className="text-2xl font-semibold mb-6">
                            Gameplay
                        </h2>
                            <VideoPlayer VideoID={project.YTID}/>
                    </div>
                )}

                {/* Showcase Links */}
                {project.Showcase && (
                    <div className="mt-8 border-t border-background-b/25 max-w-7xl w-full"/>
                )}
                {project.Showcase && (
                    <div className="mt-8 flex flex-col max-w-3xl w-full md:items-start items-center">
                        <h2 className="text-2xl font-semibold">
                            Links
                        </h2>
                        <div className="mt-8 w-full flex flex-col max-w-3xl items-center">
                            {project.Showcase.map((showcase, index) => (
                                <a key={index} href={showcase.Link} target="_blank" rel="noopener noreferrer"
                                   className="flex flex-row items-center hover:scale-110 transition-transform duration-300">
                                    <img src={showcase.Icon} alt={showcase.Name} width={256} height={256}/>
                                </a>
                            ))}
                        </div>
                    </div>
                )}

                {/* Feature Showcase */}
                {project.Type === "Game" && project.Features && (
                    <div className="mt-8 border-t border-background-b/25 max-w-7xl w-full"/>
                )}
                {project.Type === "Game" && project.Features && (
                    <div className="mt-8 flex flex-col max-w-5xl w-full md:items-start items-center">
                        <h2 className="text-2xl font-semibold">
                            Features & Technical Breakdown
                        </h2>
                    </div>
                )}
                {project.Type === "Game" && project.Features && (
                    project.Features.map((feature, index) => (
                        <li key={index} className="mt-8 flex flex-col w-full max-w-5xl md:items-start items-center">
                            <h2 className="tracking-[0.2em] text-xs">{feature.Title}</h2>
                            <p className="mt-3 ml-6 leading-relaxed whitespace-pre-line">{feature.Body}</p>
                            {feature.Image && (
                                <div className="mt-6 overflow-hidden rounded-lg w-full">
                                    <img src={feature.Image.src} alt={feature.Image.alt} className="aspect-auto object-cover"/>
                                </div>
                            )}
                            {feature.YTID && (
                                <div className="mt-6 rounded-lg w-full justify-center flex">
                                    <VideoPlayer VideoID={feature.YTID}/>
                                </div>
                            )}
                        </li>
                    ))
                )}

                {/* Progression Phases */}
                {project.ProgressionPhases && (
                    <div className="mt-8 border-t border-background-b/25 max-w-7xl w-full"/>
                )}
                {project.ProgressionPhases && (
                    <div className="mt-8 flex flex-col max-w-5xl w-full md:items-start items-center">
                        <h2 className="text-2xl font-semibold">
                            Progression Phases
                        </h2>
                    </div>
                )}
                {project.ProgressionPhases && (
                    project.ProgressionPhases.map((phase, index) => (
                            <li key={index} className="mt-8 flex flex-col w-full max-w-5xl md:items-start items-center">
                                <h2 className="tracking-[0.2em] text-xs">{phase.Title}</h2>
                                <p className="mt-3 ml-6 leading-relaxed whitespace-pre-line">{phase.Body}</p>
                                {phase.Image && (
                                    <div className="mt-6 overflow-hidden rounded-lg w-full justify-center flex">
                                        <img src={phase.Image.src} alt={phase.Image.alt} className="aspect-auto object-cover"/>
                                    </div>
                                )}
                                {phase.YTID && (
                                    <div className="mt-6 rounded-lg w-full justify-center flex">
                                        <VideoPlayer VideoID={phase.YTID}/>
                                    </div>
                                )}
                            </li>
                        ))
                )}

                {/* Screenshot Gallery */}
                {project.Gallery &&
                    <div className="mt-8 border-t border-background-b/25 max-w-7xl w-full"/>
                }
                {project.Gallery &&
                    <div className="mt-8 flex flex-col md:items-start items-center">
                        <h2 className="text-2xl font-semibold mb-6">
                            Gallery
                        </h2>
                        <ProjectGalleryCarousel project={project}/>
                    </div>
                }

                {/* Return to top of page button */}
                <div className="mt-8 border-t border-background-b/25 max-w-7xl w-full"/>
                <div className="mt-8 flex flex-col justify-center items-center text-center">
                    <Link href={"/projects/" + slug + "#project"}>
                        <Image src={"/UI/Up_Arrow.png"} alt={"Up Arrow"} width={64} height={64}/>
                    </Link>
                    <h2 className="mt-2 font-light text-background-b">
                        Go Back Up!
                    </h2>
                </div>
        </main>
    );
}
