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
import {Project} from "@/app/ProjectList";

interface ProjectCardProps {
  project: Project;
}

export default function ProjectGalleryCarousel({ project }: ProjectCardProps) {
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

  const handleThumbClick = React.useCallback(
    (index: number) => {
      api?.scrollTo(index);
    },
    [api]
  );

  return (
    <div className="w-full max-w-xl mx-auto">
      <Carousel className="w-full max-w-xl" setApi={setApi}>
        <CarouselContent>
          {project.Gallery.map((image) => (
            <CarouselItem key={image}>
              <div className="w-full aspect-video flex justify-center rounded-xl">
                <img
                    alt="dddepth-248"
                    className="max-h-full max-w-full object-contain rounded-xl"
                    src={image}
                />
              </div>
            </CarouselItem>
          ))}
        </CarouselContent>
      </Carousel>

      <Carousel className="mt-4 w-full max-w-xl">
        <div className="mask-x-from-90%">
          <CarouselContent className="my-1 flex">
            {project.Gallery.map((image, index) => (
              <CarouselItem
                className={cn(
                  "basis-1/4 cursor-pointer transition-opacity",
                  current === index + 1 ? "opacity-100" : "opacity-50"
                )}
                key={image}
                onClick={() => handleThumbClick(index)}
              >
                <div className="w-full aspect-video flex justify-center rounded-xl">
                  <img
                      alt="dddepth-248"
                      className="max-h-full max-w-full object-contain rounded-xl"
                      src={image}
                  />
                </div>
              </CarouselItem>
            ))}
          </CarouselContent>
        </div>
        <CarouselPrevious />
        <CarouselNext />
      </Carousel>
    </div>
  );
}
