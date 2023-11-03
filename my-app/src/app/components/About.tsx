import { Box, VStack, Circle, Divider, Grid, GridItem, Heading, Text} from "@chakra-ui/react";
import ComponentBase from "@/components/Base";

const experienceData = [
  {
    year: "2023.07",
    title: "ICPC2023国内予選突破",
    company: "sankaKsu",
    description: "アジア地区予選への出場権を獲得",
  },
  {
    year: "2023.06",
    title: "NHK学生ロボコン2023 準優勝",
    company: "R.U.R",
    description: "RRの操縦, ERの射出システム, LiDARを担当",
  },
  {
    year: "2022.06",
    title: "NHK学生ロボコン2022 ベスト6",
    company: "R.U.R",
    description: "決勝トーナメント進出",
  },
  {
    year: "2021.04",
    title: "東京農工大学入学",
    company: "TUAT",
    description: "Hello World!",
  },
];

function TimeLine({h} : {h: string}) {
  return (
    <VStack alignItems="center" spacing={0} h={h}>
      <Circle size='25px' bg="cyan.500" color='white' marginY={0}>
        <Circle size='15px' bg='white' color='white'></Circle>
      </Circle>
      <Divider
        orientation="vertical"
        borderColor="cyan.400"
        borderWidth="2px"
      />
    </VStack>
  )
}

function ExperienceTimeline() {
  return (
    <Box>
    {experienceData.map((experience, index) => (
      <Grid
        key={index} // 必要なキーを設定
        templateAreas={`"year divider activity"`}
        gridTemplateRows={'1fr '}
        gridTemplateColumns={'1fr 1fr 5fr'}
        minH="160px" 
        gap='1'
        color='blackAlpha'
        fontWeight='bold'
        w="100%"
      >
      <GridItem textAlign='center' bg='' area={'year'}>
        <Heading size="md"  wordBreak="break-all" whiteSpace="normal"> {experience.year} </Heading>
      </GridItem>
      <GridItem pl='2' bg='' area={'divider'}>
        <TimeLine h={"100%"}/>
      </GridItem>
      <Box marginY={0} h="auto">
        <GridItem pl='2' bg='' area={'activity'} marginY={1} borderWidth="1px" p={2} borderRadius="md" borderColor="gray.100">
          <Heading size="md">{experience.title}</Heading>
          <Heading size="md" color="teal.500">{experience.company}</Heading>
          <Text overflowWrap="break-word" fontWeight="light"> {experience.description}</Text>
        </GridItem>
      </Box>
    </Grid>
    ))}
    </Box>
  );
}

export default function Resume() {
  return (
    <ComponentBase title="My Resume">
      <ExperienceTimeline />
    </ComponentBase>
  );
}
