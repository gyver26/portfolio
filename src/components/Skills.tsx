import React, { useState } from "react";
import { OverlayButton } from "components";
import { Totara, Moodle } from "components/icons";
import {
  SiElectron,
  SiFirebase,
  SiMaterialUi,
  SiMysql,
  SiNextDotJs,
  SiNodeDotJs,
  SiPhp,
  SiReact,
  SiRedux,
} from "react-icons/si";
import styled from "styled-components";
import { useSprings } from "@react-spring/core";
import { animated, config } from "@react-spring/web";

const SkillCard = styled(animated.div)`
  margin: ${(props) => props.theme.spacing(1)};
  font-size: 2rem;
  padding: ${(props) => props.theme.spacing(2)};
  background-color: ${(props) => props.color || props.theme.main};
  color: #fff;
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 230px;
`;

const SkillCards = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  max-width: 100%;

  @media (min-width: 768px) {
    max-width: 740px;
  }
`;

const skillList = [
  {
    name: "Skills",
    icon: null,
    color: "#01579b",
  },
  {
    name: "React",
    icon: <SiReact />,
    color: "#61dafb",
  },
  {
    name: "Redux",
    icon: <SiRedux />,
    color: "#764abc",
  },
  {
    name: "Electron",
    icon: <SiElectron />,
    color: "#61dcf5",
  },
  {
    name: "MaterialUI",
    icon: <SiMaterialUi />,
    color: "#90caf9",
  },
  {
    name: "Next.js",
    icon: <SiNextDotJs />,
    color: "#000",
  },
  {
    name: "Node.js",
    icon: <SiNodeDotJs />,
    color: "#026e00",
  },
  {
    name: "PHP",
    icon: <SiPhp />,
    color: "#8892BF",
  },
  {
    name: "MySQL",
    icon: <SiMysql />,
    color: "#4479a1",
  },
  {
    name: "Moodle",
    icon: <Moodle />,
    color: "#f98012",
  },
  {
    name: "Totara",
    icon: <Totara />,
    color: "#69BD45",
  },
  {
    name: "Firebase",
    icon: <SiFirebase />,
    color: "#FFCA28",
  },
];

interface SkillsProps {
  anchorRef: React.RefObject<HTMLHeadingElement>;
  anchorSize: DOMRectReadOnly | undefined;
  windowSize: DOMRectReadOnly | undefined;
}

function Skills({ anchorRef, windowSize, anchorSize }: SkillsProps) {
  const [open, setOpen] = useState<boolean>(false);

  const springs = useSprings(
    skillList.length,
    skillList.map((item) => ({
      config: config.wobbly,
      delay: 300,
      from: {
        opacity: 0,
        transform: "scale(0.75)",
      },
      to: {
        opacity: open ? 1 : 0,
        transform: open ? "scale(1)" : "scale(0.75)",
      },
    }))
  );

  const handleOverlayClick = () => {
    setOpen((open) => !open);
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
        <SkillCards>
          {springs.map((styles, index) => (
            <SkillCard
              color={skillList[index].color}
              style={styles}
              key={skillList[index].name}
            >
              {skillList[index].icon}
              {skillList[index].name}
            </SkillCard>
          ))}
        </SkillCards>
      </div>
    </OverlayButton>
  );
}

export default Skills;
