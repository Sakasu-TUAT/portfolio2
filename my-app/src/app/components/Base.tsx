"use client";
import { VStack, Heading , Box} from "@chakra-ui/react";
import { motion } from "framer-motion";


export default function ComponentBase({ title, children }: { title: string, children: React.ReactNode }) {
  return (
      <VStack 
        as={motion.div}
        p={1}
        spacing={4}
        variants={{
          offscreen: { y: 100, opacity: 0 },
          onscreen: { y: 0, opacity: 1, transition: { duration: 1.5 } },
        }}
        initial="offscreen"
        whileInView="onscreen"
        viewport={{ once: true, amount: 0 }}
      >
        <Heading p={0}>{title}</Heading>
            <Box 
              boxShadow="md"
              borderRadius="md"
              p={8}
            >
              {children}
            </Box>
      </VStack>
  );
}
