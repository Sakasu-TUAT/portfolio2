import { Box, Spacer, VStack, HStack, Circle, Divider, Grid, GridItem, Heading, Text} from "@chakra-ui/react";
import ComponentBase from "@/components/Base";

const experienceData = [
  {
    year: "2023年 7月",
    title: "ICPC2023国内予選突破",
    company: "sankaKsu",
    description: "同年11月に行われるアジア地区予選への出場権を獲得",
  },
  {
    year: "2023年 6月",
    title: "NHK学生ロボコン2023 準優勝",
    company: "R.U.R",
    description: "RRの操縦, ERの射出システム, LiDARを担当",
  },
  {
    year: "2022年 6月",
    title: "NHK学生ロボコン2022 ベスト6",
    company: "R.U.R",
    description: "決勝トーナメントへの進出を決めた",
  },
  {
    year: "2021年 4月",
    title: "東京農工大学入学",
    company: "TUAT",
    description: "Hello World!",
  },
];

function TimeLine({h} : {h: string}) {
  return (
    <VStack alignItems="center" spacing={0} h={h}>
      <Circle size='20px' bg="blue.500" color='white'>
        <Circle size='10px' bg='white' color='white'></Circle>
      </Circle>
      <Divider
        orientation="vertical"
        borderColor="telegram.500"
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
        gridTemplateRows={'1fr'}
        gridTemplateColumns={'2fr 30px 5fr'}
        minH="150px" // 最小高さを150pxに設定
        gap='1'
        color='blackAlpha'
        fontWeight='bold'
        w="100%"
      >
      <GridItem textAlign='right' bg='' area={'year'}>
        <Heading size="md"> {experience.year} </Heading>
      </GridItem>
      <GridItem pl='2' bg='' area={'divider'}>
        <TimeLine h={"100%"}/>
      </GridItem>
      <GridItem pl='2' bg='' area={'activity'}>
      <Heading size="md">{experience.title}</Heading>
      <Heading size="md" color="teal.500">{experience.company}</Heading>
      <Text overflowWrap="break-word"> {experience.description}</Text>
      </GridItem>
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
