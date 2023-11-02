import { Box, Heading, VStack, HStack, Flex, Divider, Wrap } from "@chakra-ui/react";

const experienceData = [
  {
    year: "2020",
    title: "Web Developer",
    company: "Company A",
    description: "Developed web applications using React and Node.js.",
  },
  {
    year: "2018",
    title: "Software Engineer",
    company: "Company B",
    description: "Worked on software development projects using various technologies.",
  },
  {
    year: "2016",
    title: "Intern",
    company: "Company C",
    description: "Gained experience as an intern in software development.",
  },
  {
    year: "2015",
    title: "Intern",
    company: "Company D",
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
    <Box>
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
    <Box p={8}>
      <Heading size="lg" mb={4}>
        My Resume
      </Heading>
      <ExperienceTimeline />
    </Box>
  );
}
