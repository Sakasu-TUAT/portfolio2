import { Box, Heading, VStack, HStack, Divider } from "@chakra-ui/react";
import ComponentBase from "@/components/Base";

const experienceData = [
  {
    year: "2023年 7月",
    title: "ICPC2023国内予選突破",
    company: "sankaKsu",
    description: "同年11月に行われるアジア地区予選への出場権を得た",
  },
  {
    year: "2023年 6月",
    title: "NHK学生ロボコン2023 準優勝",
    company: "R.U.R",
    description: "RRの制御, ERの射出システム, LiDARを担当",
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
    description: "Started my journey as a software developer.",
  },
];

function TimeLine() {
  return (
    <VStack alignItems="center" spacing={0}>
      <Box w="20px" h="20px" bg="teal.500" borderRadius="full" />
      <Divider
        orientation="vertical"
        borderColor="teal.500"
        borderWidth="2px"
        h="100px"
      />
    </VStack>
  )
}

function ExperienceTimeline() {
  return (
    <Box w="100%" alignItems="center">
      {experienceData.map((experience, index) => (                                                 
        <HStack align="start" spacing={4} key={index}>
           <Box>
             <Heading size="md"> {experience.year} </Heading>
           </Box>
          <HStack paddingY={0}>
           <TimeLine />
          </HStack>
          <Box>
            <Heading size="md">{experience.title}</Heading>
            <Heading size="sm" color="teal.500">{experience.company}</Heading>
            <p>{experience.description}</p>
          </Box>
        </HStack>
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
