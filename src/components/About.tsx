"use client";

import React from "react";
import Image from "next/image";

const About = () => {
    return (
        <section className="w-full p-20 flex flex-col items-center text-center bg-background-b">
            <h1 className="text-3xl sm:text-4xl md:text-6xl font-bold text-background-a">
                About Me!
            </h1>
            <h2 className="mt-4 text-sm sm:text-base text-background-a max-w-2xl md:max-w-5xl">
                Hi there 👋
            </h2>
            <div className="flex flex-col md:flex-row mt-10 bg-background-a w-full max-w-6xl rounded-lg shadow-lg items-center gap-8 p-6 md:p-10">
                <div className="relative w-full md:w-1/2 h-64 sm:h-80 md:h-[450px]">
                    <Image
                        src="/UI/GradPic.jpg"
                        alt="me"
                        fill
                        className="rounded-md object-cover"
                    />
                </div>
                <div className="flex flex-col w-full md:w-1/2 text-background-b text-left space-y-6">
                    <p className="text-base sm:text-lg md:text-xl font-medium leading-relaxed">
                        I am a recent University of Staffordshire graduate with a first-class BSc (Hons) in Computer Games Development!
                    </p>
                    <p className="text-base sm:text-lg md:text-xl font-medium leading-relaxed">
                        I predominantly work in Unreal Engine using both C++ & Blueprints, but I also have experience with Unity, Python, as well as React & TypeScript (which I used to build this site!).

                    </p>
                    <p className="text-base sm:text-lg md:text-xl font-medium leading-relaxed">
                        I am currently a course lead for{" "}
                        <a href="https://softwareacademy.co.uk" target="_blank" className="underline hover:font-bold">
                            Software Academy UK
                        </a>
                         , the UK's leading, NCFE-accredited, online Games Development Academy, where I have taught close to 100 students since November 2024! I was even hand-selected to create content for{" "}
                        <a href="https://www.instagram.com/alicodemakers/" target="_blank" className="underline hover:font-bold">
                            AliCodeMakers
                        </a>
                        , which is an Instagram account affiliated with the academy that has over 75k followers!.
                    </p>

                    <p className="text-base sm:text-lg md:text-xl font-medium leading-relaxed">
                        I am also a co-founder of a new indie games studio,{" "}
                        <a href="https://underwatergames.dev" target="_blank" className="underline hover:font-bold">
                            UnderWaterGames
                        </a>
                        ! We are currently building up our foundations, but we will soon be up and running; watch this space!
                    </p>

                    <p className="text-base sm:text-lg md:text-xl font-medium leading-relaxed">
                        I love designing and making things, but my main passion is games, whether that be creating or playing. When I'm not at my PC, you can either catch me at the gym or working on my car!
                    </p>
                </div>
            </div>
        </section>

    );
};

export default About;