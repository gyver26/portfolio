import React, { useState } from "react";
import { OverlayButton } from "components";
import { Totara, Moodle } from "components/icons";
import {
  SiElectron,
  SiMaterialUi,
  SiMysql,
  SiNextDotJs,
  SiNodeDotJs,
  SiPhp,
  SiReact,
  SiRedux,
} from "react-icons/si";
import styled from "styled-components";
import { useSpring } from "@react-spring/core";
import { animated } from "@react-spring/web";

const Title = styled(animated.h2)`
  text-align: center;
  margin-bottom: 1.5em;
`;

const SkillIcons = styled.div`
  display: flex;
  flex-flow: wrap;
  justify-content: center;
`;

const Skill = styled.div`
  font-size: 4rem;
  padding-left: 8px;
  padding-right: 8px;
`;

const skillList = [
  {
    name: "React",
    icon: <SiReact />,
  },
  {
    name: "Redux",
    icon: <SiRedux />,
  },
  {
    name: "Electron",
    icon: <SiElectron />,
  },
  {
    name: "MaterialUI",
    icon: <SiMaterialUi />,
  },
  {
    name: "Next.js",
    icon: <SiNextDotJs />,
  },
  {
    name: "Node.js",
    icon: <SiNodeDotJs />,
  },
  {
    name: "PHP",
    icon: <SiPhp />,
  },
  {
    name: "MySQL",
    icon: <SiMysql />,
  },
  {
    name: "Moodle",
    icon: <Moodle />,
  },
  {
    name: "Totara",
    icon: <Totara />,
  },
];

interface SkillsProps {
  anchorRef: React.RefObject<HTMLHeadingElement>;
  windowSize: DOMRectReadOnly | undefined;
}

function Skills({ anchorRef, windowSize }: SkillsProps) {
  const [open, setOpen] = useState<boolean>(false);
  const [title, setTitle] = useState<string>("skills");

  const styles = useSpring({
    from: {
      transform: "translateX(-15px)",
    },
    to: {
      transform: "translateX(0px)",
    },
  });

  const handleOverlayClick = () => {
    setOpen((open) => !open);
  };

  const handleMouseEnter = (newTitle: string) => {
    const oldTitle = title;
    if (newTitle !== oldTitle) {
      setTitle(newTitle);
    }
  };

  const handleMouseLeave = () => {
    setTitle("skills");
  };

  return (
    <OverlayButton
      anchorRef={anchorRef}
      windowSize={windowSize}
      name="skills"
      offsetX={110}
      open={open}
      onClick={handleOverlayClick}
    >
      <div>
        <Title style={styles}>{title}</Title>
        <SkillIcons>
          {skillList.map((skill) => (
            <Skill
              key={skill.name}
              onMouseEnter={(e) => handleMouseEnter(skill.name)}
              onMouseLeave={handleMouseLeave}
            >
              {skill.icon}
            </Skill>
          ))}
        </SkillIcons>
      </div>
    </OverlayButton>
  );
}

export default Skills;
