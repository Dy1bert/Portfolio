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
import {ProjectList} from "@/Data/ProjectList";
import ProjectCard from "@/components/ProjectCard";

export default function SlideScale() {
  const [api, setApi] = React.useState<CarouselApi>();
  const [current, setCurrent] = React.useState(0);

    React.useEffect(() => {
        if (!api) return;

        const onSelect = () => {
            setCurrent(api.selectedScrollSnap() + 1);
        };

        onSelect();

        api.on("select", onSelect);

        return () => {
            api.off("select", onSelect);
        };
    }, [api]);

  return (
    <div className="relative max-w-[80vw] overflow-y-visible overflow-x-clip">

      <div className="hidden lg:block pointer-events-none absolute left-0 top-0 z-10 h-full w-64 bg-gradient-to-r from-background-a to-transparent"/>
      <div className="hidden lg:block pointer-events-none absolute right-0 top-0 z-10 h-full w-64 bg-gradient-to-l from-background-a to-transparent" />

      <Carousel
        className="w-full max-w-[80vw] pb-6"
        opts={{ loop: true }}
        setApi={setApi}
      >
          <CarouselContent>
            {ProjectList.map((project, index) => (
              <CarouselItem
                  className="basis-[100%] lg:basis-[33%] transition-opacity flex flex-row justify-center"
                  key={index}
              >
                <div className={cn("w-full px-6", index === current - 1 ? "lg:scale-110 scale-90" : "lg:scale-100 scale-90 pointer-events-none opacity-50")}>
                  <ProjectCard project={project} isFocused={index === current - 1}/>
                </div>
              </CarouselItem>
            ))}
          </CarouselContent>
        <CarouselPrevious className="left-0 lg:left-6 z-20"/>
        <CarouselNext className="right-0 lg:right-6 z-20"/>
      </Carousel>
    </div>
  );
}
