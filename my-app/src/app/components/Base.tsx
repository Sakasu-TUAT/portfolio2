import { VStack, Heading , Box} from "@chakra-ui/react";

export default function ComponentBase({ title, children }: { title: string, children: React.ReactNode }) {
  return (
      <VStack >
        <Heading>{title}</Heading>
            <Box borderWidth="1px" borderColor="gray.300" p={8} borderRadius="md">
        {children}
    </Box>
        </VStack>
  );
}
