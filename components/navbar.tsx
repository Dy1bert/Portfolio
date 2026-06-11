"use client"

import React from 'react';
import Link from "next/link";

const Links = [
    { href:"/#projects", text:"Projects" },
    { href:"/#about", text:"About" },
    { href:"/#experience", text:"Experience" },
    { href:"/#contact", text:"Contact" },
];

const Navbar = () => {
    return (
        <nav className="fixed top-0 left-0 right-0 py-4 md:py-6 bg-background-a border-b border-foreground items-center shadow-lg z-50">
            <div className={`text-xl text-background-b px-6`}>
                <Link href={"/#home"} className={"flex fixed align-middle font-extrabold text-md md:text-2xl hover:text-purple-300"}>Dylan Buchanan</Link>
                <ul className={"flex align-middle justify-end gap-6"}>
                    {
                        Links.map((link) => (
                            <li key={link.href}>
                                <Link className={"hover:text-purple-300 text-sm md:text-xl"} href={link.href}>{link.text}</Link>
                            </li>
                        ))
                    }
                </ul>
            </div>
        </nav>
    );
};

export default Navbar;