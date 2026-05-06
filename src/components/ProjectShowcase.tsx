import React from 'react';
import ProjectShowcaseCarousel from "@/components/ProjectShowcaseCarousel";

const ProjectShowcase = () => {
    return (
        <section className="w-full min-h-[75vh] flex flex-col items-center bg-background-a text-center">
            <h1 className="mt-[5%] text-6xl font-bold text-background-b">
                Project Showcase
            </h1>

            <h1 className="mt-4 text-md text-background-b max-w-5xl">
                Select the project card to see more information!
            </h1>
            <div className="mt-40 mb-8 w-full h-full md:mt-20 justify-items-center">
                <ProjectShowcaseCarousel/>
            </div>
        </section>
    );
};

export default ProjectShowcase;