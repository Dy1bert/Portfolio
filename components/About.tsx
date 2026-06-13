"use client";

import React from "react";
import Image from "next/image";

const About = () => {
    return (
        <section className="w-full p-6 md:p-20 flex flex-col items-center text-center bg-background-b">
            <h1 className="text-3xl sm:text-4xl md:text-6xl font-bold text-background-a">
                About Me!
            </h1>
            <h2 className="mt-4 text-sm sm:text-base text-background-a max-w-2xl md:max-w-5xl">
                Hi there 👋
            </h2>
            <div className="flex flex-col md:flex-row mt-6 md:mt-10 bg-background-a w-full md:max-w-7xl rounded-lg shadow-lg items-center gap-8 p-6 md:p-10">
                <div className="relative w-full md:w-1/2 h-64 sm:h-80 md:h-[400px] lg:h-[600px]">
                    <Image
                        src="/UI/GradPic.jpg"
                        alt="me"
                        fill
                        className="rounded-md object-cover"
                    />
                </div>
                <div className="flex flex-col w-full md:w-1/2 text-background-b text-left space-y-6">
                    <p className="text-base sm:text-md md:text-lg font-medium leading-relaxed">
                        Hi, I&apos;m Dylan, a Graduate Games Developer and Course Lead specialising in Unreal Engine development using both C++ and Blueprints.

                    </p>
                    <p className="text-base sm:text-md md:text-lg font-medium leading-relaxed">
                        I graduated from Staffordshire University with a First-Class BSc (Hons) in Computer Games Development and currently work as a Course Lead at&nbsp;
                        <a href="https://softwareacademy.co.uk" target="_blank" className="underline hover:font-bold">
                            Software Academy UK
                        </a>
                        . In this role, I design Unreal Engine projects, develop educational content, create video tutorials, and collaborate with a team of course
                        leads to deliver NCFE-accredited game development courses.
                    </p>

                    <p className="text-base sm:text-md md:text-lg font-medium leading-relaxed">
                        Alongside my professional work, I enjoy building personal projects that explore gameplay systems, UI development, and game architecture.
                        My experience ranges from solo-developed mobile games to leading programming teams on indie collaborative projects.
                    </p>

                    <p className="text-base sm:text-md md:text-lg font-medium leading-relaxed">
                        Technologies I work with most frequently include Unreal Engine 5, C++, Blueprints, and Git. I also have experience with Unity & C#, Python, React, and TypeScript.
                    </p>

                    <p className="text-base sm:text-md md:text-lg font-medium leading-relaxed">
                        I&apos;m currently seeking opportunities to contribute to ambitious game projects as an Unreal Engine Developer, whether that be gameplay programming,
                        UI development, or tools programming.
                    </p>
                </div>
            </div>
        </section>

    );
};

export default About;