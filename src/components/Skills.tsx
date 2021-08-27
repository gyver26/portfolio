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
import { useSpring, useTrail } from "@react-spring/core";
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

const Skill = styled(animated.div)`
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
  anchorSize: DOMRectReadOnly | undefined;
  windowSize: DOMRectReadOnly | undefined;
}

function Skills({ anchorRef, windowSize, anchorSize }: SkillsProps) {
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

  const trail = useTrail(skillList.length, {
    config: { duration: 80 },
    from: {
      opacity: 0,
      transform: "scale(0.7)",
    },
    to: {
      opacity: open ? 1 : 0,
      transform: open ? "scale(1)" : "scale(0.7)",
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
      anchorSize={anchorSize}
      windowSize={windowSize}
      name="skills"
      offsetX={110}
      open={open}
      onClick={handleOverlayClick}
    >
      <div>
        <Title style={styles}>{title}</Title>
        <SkillIcons>
          {trail.map((styles, index) => (
            <Skill
              style={styles}
              key={skillList[index].name}
              onMouseEnter={(e) => handleMouseEnter(skillList[index].name)}
              onMouseLeave={handleMouseLeave}
            >
              {skillList[index].icon}
            </Skill>
          ))}
        </SkillIcons>
      </div>
    </OverlayButton>
  );
}

export default Skills;
