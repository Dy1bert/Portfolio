"use client";

import React from "react";

const Hero = () => {
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
        <section className="w-full h-[87.5vh] flex flex-col items-center justify-center text-center border-b border-foreground shadow-lg"
                 style={{   backgroundImage: "url('UI/HeroBG.png')",
                            backgroundRepeat: "no-repeat",
                            backgroundAttachment: "fixed",
                            backgroundSize: "auto",
                            backgroundPosition: "center"}}>
            <div className="bg-background-a rounded-2xl p-6 md:p-10 md:px-24 border-4">
                <h1 className="text-7xl font-bold text-white md:text-9xl">
                    Dylan Buchanan
                </h1>
                <h2 className="mt-6 text-md text-gray-300 max-w-5xl text-shadow-background-a text-shadow-lg md:text-lg">
                    Staffordshire-based graduate Games Developer and Tutor always looking for new challenges and innovative ways to grow!
                </h2>
                <button onClick={DownloadCV} className="cursor-pointer rounded-md bg-background-b p-2 px-4 mt-6 text-background-a hover:scale-110 transition-transform duration-300">Download CV</button>
            </div>
        </section>
    );
};

export default Hero;