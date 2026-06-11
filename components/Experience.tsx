"use client";

import React from "react";
import {ExperienceList} from "@/app/ExperienceList";
import ExperienceTitle from "@/components/ExperienceTitle";

const Experience = () => {

    const DownloadCV = () => {
        const downloadURL = "/CV.pdf";
        const link = document.createElement("a");
        link.href = downloadURL;
        link.download = "Dylan-Buchanan_CV.pdf";
        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);
    };

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
                                        <div className="ml-4">
                                            {item.Body.map((text, index) => (
                                                <p key={index} className="text-base sm:text-md md:text-lg font-medium leading-relaxed">
                                                    • {text}
                                                </p>
                                            ))}
                                        </div>
                                    </div>
                            ))}
                    </div>

                    <div className="border-1 border-background-a self-stretch"/>

                    <div className="flex flex-col w-full md:w-1/2 text-background-a text-left space-y-6 self-stretch">
                        <h1 className="text-2xl md:text-4xl font-bold leading-relaxed text-center">
                            Work
                        </h1>
                        {ExperienceList
                            .filter((item) => item.Type === "Employment")
                            .map((item, index) => (
                                <div key={index}>
                                    <ExperienceTitle Experience={item}/>
                                    <div className="ml-4">
                                        <p className="text-base sm:text-md md:text-lg font-semibold leading-relaxed italic">
                                            {item.JobTitle}
                                        </p>
                                        {item.Body.map((text, index) => (
                                            <p key={index} className="text-base sm:text-md md:text-lg font-medium leading-relaxed">
                                                • {text}
                                            </p>
                                        ))}
                                    </div>
                                </div>
                            ))}
                    </div>
                </div>
                <button onClick={DownloadCV} className="cursor-pointer rounded-md bg-background-a p-2 px-4 mt-10 text-background-b hover:scale-110 transition-transform duration-300">Download CV</button>
            </div>
        </section>

    );
};

export default Experience;