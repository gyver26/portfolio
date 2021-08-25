import React, { useState } from "react";
import { OverlayButton } from "components";
import styled from "styled-components";

const Left = styled.div`
  padding: 16px;
`;

const Right = styled.div`
  padding: 16px;
`;

const Disclaimer = styled.div`
  font-size: 0.8rem;
`;

interface ProjectsProps {
  anchorRef: React.RefObject<HTMLHeadingElement>;
  windowSize: DOMRectReadOnly | undefined;
}

function Projects({ anchorRef, windowSize }: ProjectsProps) {
  const [open, set] = useState<boolean>(false);

  const handleOverlayClick = () => {
    set((open) => !open);
  };

  return (
    <OverlayButton
      anchorRef={anchorRef}
      windowSize={windowSize}
      name="projects"
      offsetX={220}
      open={open}
      onClick={handleOverlayClick}
    >
      <>
        <Left>
          <h2>projects*</h2>
          <Disclaimer>
            *Specific projects cannot be disclosed due to a non-disclosure
            agreement with my previous employer
          </Disclaimer>
        </Left>
        <Right>
          <p>{"Learning Management Systems"}</p>
          <p>{"Moodle App Customizations"}</p>
          <p>{"A Content Development Platform"}</p>
          <p>{"Laboratory Information Management System"}</p>
        </Right>
      </>
    </OverlayButton>
  );
}

export default Projects;
