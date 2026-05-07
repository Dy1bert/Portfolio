import React from 'react';
import ProjectShowcaseCarousel from "@/components/ProjectShowcaseCarousel";
import Link from "next/link";
import {Button} from "@/components/ui/button";

const ProjectShowcase = () => {
    return (
        <section className="w-full p-20 flex flex-col items-center text-center bg-background-a">
            <h1 className="text-3xl sm:text-4xl md:text-6xl font-bold text-background-b">
                Project Showcase
            </h1>

            <h1 className="mt-4 text-sm sm:text-base text-background-b max-w-2xl md:max-w-5xl">
                Select the project card to see more information!
            </h1>
            <div className="md:mt-20 sm:mt-10 mt-5 mb-8 w-full h-full justify-items-center">
                <ProjectShowcaseCarousel/>
            </div>
                <a href={"/projects"}><button className="text-background-a font-bold text-xl cursor-pointer rounded-md bg-background-b p-3 px-6 mt-4 hover:scale-110 transition-transform duration-300">See All Projects</button></a>
        </section>
    );
};

export default ProjectShowcase;