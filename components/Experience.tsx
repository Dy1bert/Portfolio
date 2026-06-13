"use client";

import React from "react";
import {ExperienceList} from "@/Data/ExperienceList";
import ExperienceTitle from "@/components/ExperienceTitle";

    const DownloadCV = () => {
        const downloadURL = "/CV.pdf";
        const link = document.createElement("a");
        link.href = downloadURL;
        link.download = "Dylan-Buchanan_CV.pdf";
        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);
    };

export default function Experience () {
    return (
        <section className="w-full p-6 md:p-20 flex flex-col items-center text-center bg-background-a">
            <h1 className="text-4xl sm:text-5xl md:text-7xl font-bold text-background-b">
                Experience
            </h1>
            <h2 className="mt-4 text-md sm:text-base text-background-b max-w-2xl md:max-w-5xl">
                What have I done?
            </h2>
            <div className="flex flex-col mt-6 md:mt-10 bg-background-b w-full md:max-w-7xl rounded-lg shadow-lg items-center p-6 md:p-10">
                <div className="flex flex-col md:flex-row items-center gap-8 md:max-w-7xl w-full">
                    <div className="flex flex-col w-full md:w-1/2 text-background-a text-left space-y-6 self-stretch">
                        <h1 className="text-2xl md:text-4xl font-bold leading-relaxed text-center">
                            Education
                        </h1>
                        {ExperienceList
                            .filter((item) => item.Type === "Education")
                            .map((item, index) => (
                                    <div key={index}>
                                        <ExperienceTitle Experience={item}/>
                                        <p className="text-base sm:text-md md:text-lg font-medium leading-relaxed italic">
                                            {item.Duration}
                                        </p>
                                        <div className="ml-4">
                                                <p className="text-base sm:text-md md:text-lg font-medium leading-relaxed">
                                                    • {item.Course}
                                                </p>
                                            <p className="text-base sm:text-md md:text-lg font-medium leading-relaxed italic">
                                                {item.Grade}
                                            </p>
                                        </div>
                                    </div>
                            ))}
                    </div>

                    <div className="border border-background-a self-stretch"/>

                    <div className="flex flex-col w-full md:w-1/2 text-background-a text-left space-y-6 self-stretch">
                        <h1 className="text-2xl md:text-4xl font-bold leading-relaxed text-center">
                            Work
                        </h1>
                        {ExperienceList
                            .filter((item) => item.Type === "Employment")
                            .map((item, index) => (
                                <div key={index}>
                                    <ExperienceTitle Experience={item}/>
                                        {item.Roles.map((role, index) => (
                                            <div key={index} className="pb-4">
                                                <p className="text-base sm:text-md md:text-lg font-bold leading-relaxed italic">
                                                    {role.Role}
                                                </p>
                                                <p className="text-base sm:text-md md:text-lg font-medium leading-relaxed italic">
                                                    {role.Duration}
                                                </p>
                                                <div className="ml-4">
                                                    {role.Points.map((point, index) => (
                                                        <div key={index}>
                                                            <p className="text-base sm:text-md md:text-lg font-medium leading-relaxed">
                                                                • {point}
                                                            </p>
                                                        </div>
                                                    ))}
                                                </div>
                                            </div>
                                        ))}
                                </div>
                            ))}
                    </div>
                </div>
                <button onClick={DownloadCV} className="cursor-pointer rounded-md bg-background-a p-2 px-4 mt-10 text-background-b hover:scale-110 transition-transform duration-300">Download CV</button>
            </div>
        </section>

    );
};