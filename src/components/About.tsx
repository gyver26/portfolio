import React, { useState } from "react";
import { OverlayButton } from "components";
import {
  IoIosDocument,
  IoIosMail,
  IoLogoGithub,
  IoLogoLinkedin,
} from "react-icons/io";
import styled from "styled-components";
import { useChain, useSpring, useSpringRef } from "@react-spring/core";
import { animated } from "@react-spring/web";

const IconContainer = styled(animated.div)`
  padding: 16px;
  font-size: 4rem;
  display: flex;
  justify-content: center;
`;

const TextContainer = styled(animated.div)`
  padding: 16px;
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
  windowSize: DOMRectReadOnly | undefined;
}

function About({ anchorRef, windowSize }: AboutProps) {
  const overlayRef = useSpringRef();
  const [open, setOpen] = useState<boolean>(false);

  const handleOverlayClick = () => {
    setOpen((open) => !open);
  };

  const contentRef = useSpringRef();
  const contentStyles = useSpring({
    ref: contentRef,
    opacity: open ? 1 : 0,
  });

  useChain([overlayRef, contentRef], [0, 0.3]);

  return (
    <OverlayButton
      anchorRef={anchorRef}
      windowSize={windowSize}
      overlayRef={open ? overlayRef : undefined}
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
        <AboutIconLink href="logo512.png" target="_blank" rel="noreferrer">
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
