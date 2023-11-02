import { Heading } from "@/common/components";
import Hero from "@/components/Hero";
import Skills from "@/components/Skills";

export default async function Home() {
  return (
    <div>
      <Heading as="h1" mb={4}>
        新着記事
      </Heading>
      <Hero/>
      <Skills/>
    </div>
  );
}