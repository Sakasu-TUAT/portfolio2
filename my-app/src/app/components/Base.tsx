"use client";
import { VStack, Heading , Box} from "@chakra-ui/react";
import { motion } from "framer-motion";


export default function ComponentBase({ title, children }: { title: string, children: React.ReactNode }) {
  return (
      <VStack 
        as={motion.div}
        // boxShadow="md" 
        p={4}
        borderRadius="md"
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
            // borderWidth="1px" borderColor="gray.300" p={8} borderRadius="md"
              boxShadow="md"
              p={8}
            >
                {children}
            </Box>
      </VStack>
  );
}
