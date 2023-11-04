"use client";
import { Box, Flex, Heading, Button, Icon, useColorMode} from "./common/components";
import NextLink from "next/link";
import { FaMoon, FaSun } from "react-icons/fa"

export function ColorSwitchButton() {
  const { colorMode, toggleColorMode } = useColorMode();
  return (
    <Button 
      size='sm' 
      onClick={toggleColorMode}
      fontSize="sm"
      color="white"
      bg="orange.400"
      _hover={{
        bg: "orange.300",
      }}
    >
     <Icon
        as={colorMode === 'light' ? FaMoon : FaSun}
        boxSize={4} // アイコンの大きさを設定
      />
    </Button>
  );
}

export default function Header() {
  return (
    <Box as="header">
      <Flex
        bg="white"
        color="gray.600"
        minH={"60px"}
        py={{ base: 2 }}
        px={{ base: 4 }}
        borderBottom={1}
        borderStyle="solid"
        borderColor="gray.200"
        align="center"
      >
        <Flex flex={1} justify="space-between" maxW="5xl" mx="auto">
          <Heading as="h1" size="lg">
            <NextLink href="/">Sakasu&apos;s Note</NextLink>
          </Heading>
          <ColorSwitchButton />
        </Flex>
      </Flex>
    </Box>
  );
}