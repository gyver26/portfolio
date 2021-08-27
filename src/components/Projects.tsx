import React, { useState } from "react";
import { OverlayButton } from "components";
import styled from "styled-components";
import { ReactNode } from "react";
import { useTrail } from "react-spring";
import { animated } from "@react-spring/web";

const Left = styled.div`
  padding: ${(props) => props.theme.spacing(2)};
  flex: 1;

  @media (min-width: 768px) {
    max-width: 300px;
  }
`;

const Right = styled.div`
  padding: ${(props) => props.theme.spacing(2)};
  max-width: 100%;

  @media (min-width: 768px) {
    max-width: 500px;
  }
`;

const Disclaimer = styled.div`
  font-size: 0.8rem;
`;

const Project = styled.div`
  margin-bottom: ${(props) => props.theme.spacing(2)};
`;

interface TrailProps {
  children: ReactNode;
  open: boolean;
}

const Trail = ({ open, children }: TrailProps) => {
  const items = React.Children.toArray(children);
  const trail = useTrail(items.length, {
    config: { mass: 5, tension: 2000, friction: 200 },
    opacity: open ? 1 : 0,
    delay: 300,
    // x: open ? 0 : 20,
    // height: open ? 110 : 0,
    from: { opacity: 0 },
  });

  return (
    <Right>
      {trail.map((style, index) => (
        <animated.div style={style}>{items[index]}</animated.div>
      ))}
    </Right>
  );
};

interface ProjectsProps {
  anchorRef: React.RefObject<HTMLHeadingElement>;
  anchorSize: DOMRectReadOnly | undefined;
  windowSize: DOMRectReadOnly | undefined;
}

function Projects({ anchorRef, windowSize, anchorSize }: ProjectsProps) {
  const [open, set] = useState<boolean>(false);

  const handleOverlayClick = () => {
    set((open) => !open);
  };

  return (
    <OverlayButton
      anchorRef={anchorRef}
      anchorSize={anchorSize}
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
        <Trail open={open}>
          <Project>
            <h3>Learning Management Systems</h3>
            <p>
              Developed and implemented Moodle and Totara LMS to a number of
              clients with different needs using PHP, MySQL, and Moodle
              APIs/Libraries. Developed a lot of plugins including Reports,
              Import/Export Tools, Themes, Games using Phaser, SSO, and many
              others.
            </p>
          </Project>
          <Project>
            <h3>Moodle App Customizations</h3>
            <p>
              Customized and rebranded the Moodle app for our LMS clients. The
              app was built using Ionic, Angular, Cordova, and Electron. Custom
              builds were deployed to Android, iOS, Windows.
            </p>
          </Project>
          <Project>
            <h3>A Content Development Platform</h3>
            <p>
              Built using React, Material UI, Electron, NextJS, NodeJS, NeDB and
              many other javascript modules.
            </p>
          </Project>
          <Project>
            <h3>Laboratory Information Management System</h3>
            <p>Developed using React, Material UI, Redux, and Firebase.</p>
          </Project>
        </Trail>
      </>
    </OverlayButton>
  );
}

export default Projects;
