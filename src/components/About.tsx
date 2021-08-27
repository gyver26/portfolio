import React, { useState } from "react";
import { OverlayButton } from "components";
import {
  IoIosDocument,
  IoIosMail,
  IoLogoGithub,
  IoLogoLinkedin,
} from "react-icons/io";
import styled from "styled-components";
import { useSpring } from "@react-spring/core";
import { animated } from "@react-spring/web";

const IconContainer = styled(animated.div)`
  padding: ${(props) => props.theme.spacing(2)};
  font-size: 4rem;
  display: flex;
  justify-content: center;
`;

const TextContainer = styled(animated.div)`
  padding: ${(props) => props.theme.spacing(2)};
`;

const AboutIconLink = styled.a`
  margin-left: 4px;
  margin-right: 4px;
  text-decoration: none;
  color: inherit;
  display: flex;
`;

interface AboutProps {
  anchorRef: React.RefObject<HTMLHeadingElement>;
  anchorSize: DOMRectReadOnly | undefined;
  windowSize: DOMRectReadOnly | undefined;
}

function About({ anchorRef, windowSize, anchorSize }: AboutProps) {
  const [open, setOpen] = useState<boolean>(false);

  const handleOverlayClick = () => {
    setOpen((open) => !open);
  };

  const contentStyles = useSpring({
    opacity: open ? 1 : 0,
    delay: 300,
  });

  return (
    <OverlayButton
      anchorRef={anchorRef}
      anchorSize={anchorSize}
      windowSize={windowSize}
      name="about"
      open={open}
      onClick={handleOverlayClick}
    >
      <IconContainer style={contentStyles}>
        <AboutIconLink
          href="https://www.github.com/gyver26"
          target="_blank"
          rel="noreferrer"
        >
          <IoLogoGithub />
        </AboutIconLink>
        <AboutIconLink
          href="mailto:gyver.gabito@gmail.com"
          target="_blank"
          rel="noreferrer"
        >
          <IoIosMail />
        </AboutIconLink>
        <AboutIconLink
          href="https://www.linkedin.com/in/don-gyver-gabito-02ba3a114/"
          target="_blank"
          rel="noreferrer"
        >
          <IoLogoLinkedin />
        </AboutIconLink>
        <AboutIconLink
          href="/assets/resume.pdf"
          target="_blank"
          rel="noreferrer"
        >
          <IoIosDocument />
        </AboutIconLink>
      </IconContainer>
      <TextContainer style={contentStyles}>
        <h2>about</h2>
        <p>
          I have over 4 years of web development experience. <br />
          Started out as an LMS Developer, now focused on React ecosystem.
        </p>
      </TextContainer>
    </OverlayButton>
  );
}

export default About;
