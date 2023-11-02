import { 
Heading, Center, Wrap, WrapItem 
} from "@/common/components";

import CustomIcon from '@/components/CustomIcon'

const skills: string[] = [
  "cplusplus", "python", "react", "css3", "html5","javascript", "nextjs",
  "pokemon", "rust", "postgresql", "switch", "twitter",
];

function SkillsIcons({ skills } : { skills: string[]} ) {
  return (
    <Wrap spacing={4} justify="center">
      {skills.map((skill, index) => (
        <WrapItem key={index}>
          <CustomIcon icon={skill} size={100} />
        </WrapItem>
      ))}
    </Wrap>
  );
}

export default function Skills() {
  return (
    <div>
    <Heading>
      Skills
    </Heading>
    <Center>
      <SkillsIcons skills={skills} />
    </Center>
    </div>
  )
}
