"use client";

import React from "react";

const Hero = () => {
    return (
        <section className="w-full h-[87.5vh] flex flex-col items-center justify-center text-center border-b border-foreground shadow-lg"
                 style={{   backgroundImage: "url('/UI/HeroBG.png')",
                            backgroundRepeat: "repeat",
                            backgroundAttachment: "fixed",
                            backgroundSize: "contain",
                            backgroundPosition: "center"}}>
            <div className="bg-background-a rounded-2xl p-6 md:p-10 md:px-24 border-4">
                <h1 className="text-7xl font-bold text-white md:text-9xl">
                    Dylan Buchanan
                </h1>
                <h2 className="mt-6 text-md text-gray-300 max-w-5xl text-shadow-background-a text-shadow-lg md:text-lg">
                    Staffordshire-based graduate Games Developer and Tutor always looking for new challenges and innovative ways to grow!
                </h2>
            </div>
        </section>
    );
};

export default Hero;