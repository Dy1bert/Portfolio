"use client";

import React from "react";
import Image from "next/image";

const Contacts = [
    { href:"https://github.com/Dy1bert", type:"GitHub", iconref: "/UI/Github_Logo.png" },
    { href:"mailto::dylan.buchanan.003@gmail.com", type:"Email", iconref: "/UI/Email_Logo.png" },
    { href:"https://uk.linkedin.com/in/dylan-j-buchanan", type:"LinkedIn", iconref: "/UI/LinkedIn_Logo.png" },
];

const Contact = () => {
    return (
        <section className="w-full p-6 md:p-20 flex flex-col items-center text-center bg-background-b">
            <h1 className="text-4xl sm:text-5xl md:text-7xl font-bold text-background-a">
                Contact Me!
            </h1>

            <h1 className="mt-4 text-md sm:text-base text-background-a max-w-2xl md:max-w-5xl">
                Feel free to reach out to me via any of the links below!
            </h1>
            <div className="flex gap-8 md:gap-32 mt-8 md:mt-12 mb-8 md:mb-12">
                {Contacts.map((contact, index) => (
                    <a
                        key={index}
                        href={contact.href}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex flex-col items-center hover:scale-110 transition-transform duration-300"
                    >
                        <div className="w-20 h-20 md:w-40 md:h-40 relative">
                            <Image
                                src={contact.iconref}
                                alt={contact.type}
                                fill
                                className="object-contain"
                            />
                        </div>
                    </a>
                ))}
            </div>
        </section>
    );
};

export default Contact;