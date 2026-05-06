"use client";

import * as React from "react";
import { cn } from "@/lib/utils";
import {
  Carousel,
  type CarouselApi,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import {ProjectList} from "@/app/ProjectList";
import ProjectCard from "@/components/ProjectCard";

export default function SlideScale() {
  const [api, setApi] = React.useState<CarouselApi>();
  const [current, setCurrent] = React.useState(0);

  React.useEffect(() => {
    if (!api) {
      return;
    }

    setCurrent(api.selectedScrollSnap() + 1);

    api.on("select", () => {
      setCurrent(api.selectedScrollSnap() + 1);
    });
  }, [api]);

  return (
    <div className="max-w-[80vw]">
      <Carousel
        className="w-full max-w-[80vw]"
        opts={{ loop: true }}
        setApi={setApi}
      >
        <div className="mask-x-from-80%">
          <CarouselContent className="py-3">
            {ProjectList.map((project, index) => (
              <CarouselItem
                  className={cn("basis-[33%] transition-opacity flex flex-row justify-center", index === current - 1 ? "p-4" : "p-24 opacity-50")}
                  key={index}
              >
                <div className="w-full mx-4">
                  <ProjectCard project={project} isFocused={index === current - 1} />
                </div>
              </CarouselItem>
            ))}
          </CarouselContent>
        </div>
        <CarouselPrevious className=""/>
        <CarouselNext />
      </Carousel>
    </div>
  );
}
