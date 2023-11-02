import {Wrap, WrapItem} from "@chakra-ui/react";
import CustomIcon from '@/components/CustomIcon'
import ComponentBase from "@/components/Base"; 

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
    <ComponentBase title="Skills">
      <SkillsIcons skills={skills} />
    </ComponentBase>
  )
}
