import { 
  Box,
  Heading,
  Text,
  Button,
  Flex,
  Avatar
} from "../common/components";

export default function Hero() {
  return (
    <Box>
      <Flex alignItems="center" justifyContent="center" mb={10}>
        <Avatar size='2ps' name='Sakasu' src='https://bit.ly/dan-abramov' />
      </Flex>
      <Flex flexDirection="column" alignItems="center">
      <Heading mb={4}>
        Hey, I'm Sakasu 👍
      </Heading>
        <Text mb={2}>
        I'm a software developer based in Lagos, Nigeria. I specialize in building (and occasionally designing)
          exceptional websites, applications, and everything in between.
        </Text>
        <Button>Read More</Button>
      </Flex>
    </Box>
  );
}