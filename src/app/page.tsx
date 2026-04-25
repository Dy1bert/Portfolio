import Hero from "@/components/Hero";
import ProjectShowcase from "@/components/ProjectShowcase";
import About from "@/components/About";
import Contact from "@/components/Contact";

export default function Home() {
  return (
      <main className="w-full flex-col items-center justify-between bg-white dark:bg-black sm:items-start">
          <div id={"home"}>
              <Hero/>
          </div>
          <div id={"projects"}>
              <ProjectShowcase/>
          </div>
          <div id={"about"} className="scroll-mt-[50px]">
              <About/>
          </div>
          <div id={"contact"} className="scroll-mt-[50px]">
              <Contact/>
          </div>
      </main>
  );
}
