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
          大学のロボット研究会や競技プログラミング部で活動しています。
        </Text>
        <Button>Read More</Button>
      </Flex>
    </Box>
  );
}