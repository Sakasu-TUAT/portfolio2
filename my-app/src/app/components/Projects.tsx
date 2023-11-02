import { 
  Box, Text, Grid, Image
} from "@/common/components";
import ComponentBase from "@/components/Base";

interface Project {
  imageUrl: string;
  caption: string;
}

const projectSets: Project[] = [
  { imageUrl: "next.svg", caption: "このポートフォリオ" },
  { imageUrl: "vercel.svg", caption: "お世話になっております。"},
  { imageUrl: "ERfiring1.PNG", caption: "NHK学生ロボコンの射出システム" },
  { imageUrl: "ERfiring2.PNG", caption: "ER格好いいのでもう一枚" },
  { imageUrl: "portfolio1.PNG", caption: "一つ目のポートフォリオ" },
  { imageUrl: "x_bot.PNG", caption: "AtCoderProblemsのコンテストのbot" },
];

function Projects ({ projectSets } : { projectSets: Project[]  }) {
  return (
    <Grid templateColumns="repeat(auto-fill, minmax(200px, 1fr))" gap={5} maxW="100%" >
      {projectSets.map((projectSet, index) => (
          <Box key={index}>
            <Image src={projectSet.imageUrl} alt={projectSet.caption} w="100%" /> 
            <Text mt={2}>{projectSet.caption}</Text>
          </Box>
      ))}
    </Grid>
  );
}

export default function Skills() {
  return (
    <ComponentBase title="Projects">
      <Projects projectSets={projectSets} />
    </ComponentBase>
  )
}
