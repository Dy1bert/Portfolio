import Hero from "@/components/Hero";
import ProjectShowcase from "@/components/ProjectShowcase";
import About from "@/components/About";
import Contact from "@/components/Contact";
import Experience from "@/components/Experience";

export default function Home() {
  return (
      <main className="w-full flex-col items-center justify-between bg-white dark:bg-black sm:items-start min-h-screen h-full">
        <div id={"home"}>
          <Hero/>
        </div>
        <div id={"projects"} className="scroll-mt-[50px]">
          <ProjectShowcase/>
        </div>
        <div id={"about"} className="scroll-mt-[50px]">
          <About/>
        </div>
        <div id={"experience"} className="scroll-mt-[50px]">
          <Experience/>
        </div>
        <div id={"contact"} className="scroll-mt-[50px]">
          <Contact/>
        </div>
      </main>
  );
}
