import { 
  Box, Heading, Text, VStack, Grid, Spacer, Center, Image, Wrap, WrapItem 
} from "@/common/components";

const projectSets = [
  { imageUrl: "next.svg", caption: "ポートフォリオ" },
  { imageUrl: "vercel.svg", caption: "AtCoderProblemsのコンテストのbot" },
  { imageUrl: "vercel.svg", caption: "NHK学生ロボコンの射出システム" },
  { imageUrl: "vercel.svg", caption: "AtCoderProblemsのコンテストのbotだと思ったのだと思った気がした" },
  { imageUrl: "vercel.svg", caption: "AtCoderProblemsのコンテストのbotだと思ったのだと思った気がした" },
  { imageUrl: "vercel.svg", caption: "説明3" },
];

function Projects ({ projectSets }) {
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
    <VStack spacing={4}> 
      <Heading>
        Projects
      </Heading> 
      <Projects projectSets={projectSets} />
    </VStack>
  )
}
