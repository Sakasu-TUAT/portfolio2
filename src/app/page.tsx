import { Heading } from "@/common/components";
import Hero from "@/components/Hero";
import Projects from "@/components/Projects";
import Skills from "@/components/Skills";
import About from "@/components/About";

export default async function Home() {
  return (
    <div>
      <Hero/>
      <About/>
      <Projects/>
      <Skills/>
    </div>
  );
}