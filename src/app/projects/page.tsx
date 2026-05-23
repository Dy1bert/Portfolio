import {ProjectList} from "@/app/ProjectList";
import ProjectCard from "@/components/ProjectCard";
import ProjectShowcaseCarousel from "@/components/ProjectShowcaseCarousel";
import React from "react";

export default function Home() {
    return (
            <main className="flex flex-col min-h-full items-center px-16 py-16 bg-background-a">
                <section className="min-w-screen h-[35vh] flex flex-col items-center justify-center text-center border-b border-foreground shadow-lg"
                         style={{   backgroundImage: "url('/HeroBG.png')",
                             backgroundRepeat: "no-repeat",
                             backgroundAttachment: "fixed",
                             backgroundSize: "cover",
                             backgroundPosition: "center"}}>
                    <div className="bg-background-a rounded-2xl p-6 border-4">
                        <h1 className="text-7xl text-background-b md:text-9xl">
                            Projects
                        </h1>
                        <h2 className="mt-6 text-md text-background-b max-w-5xl md:text-lg">
                            See below for my full project catalogue!
                        </h2>
                    </div>
                </section>
                <div className="mt-[4vw] w-[80%] grid grid-cols-1 md:grid-cols-2 gap-[4vw]">
                    {ProjectList.map((project) => (
                        <ProjectCard
                            key={project.ID}
                            project={project}
                            isFocused={true}
                        />
                    ))}
                </div>
            </main>
    );
}
