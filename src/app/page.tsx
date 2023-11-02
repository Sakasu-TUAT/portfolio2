import Hero from "@/components/Hero";
import Projects from "@/components/Projects";
import Skills from "@/components/Skills";
import About from "@/components/About";
import { Stack } from "@chakra-ui/react";

export default async function Home() {
  return (
    <Stack w="100%" h="100%" spacing={20}>
      <Hero/>
      <About/>
      <Projects/>
      <Skills/>
    </Stack>
  );
}