import {ExperienceItem} from "@/Data/ExperienceList";
import React from "react";

interface Props {
    Experience: ExperienceItem;
}

const ExperienceTitle = ({ Experience }: Props) => {
    if (Experience.href != null) {
        return (
            <h2 className="text-base sm:text-lg md:text-xl font-bold leading-relaxed">
                <a href={Experience.href} target="_blank" className="underline hover:font-bold">
                    {Experience.Title}
                </a>
                <a href={Experience.href} target="_blank">
                    &nbsp;🌐
                </a>
                &nbsp;{Experience.Duration}
            </h2>
        );
    }
    else {
        return (
            <div className="flex flex-row">
                <h2 className="text-base sm:text-lg md:text-xl font-bold leading-relaxed">
                    <u>{Experience.Title}</u>&nbsp;{Experience.Duration}
                </h2>
            </div>

        );
    }
}

export default ExperienceTitle;