import React, { useState, useEffect, useContext } from "react";
import styled, { ThemeContext } from "styled-components";
import { IoIosClose } from "react-icons/io";
import { useSpring, config, animated, SpringRef } from "@react-spring/web";

interface OverlayStyled {
  open: boolean;
}

const Overlay = styled(animated.div)<OverlayStyled>`
  cursor: pointer;
  overflow: hidden;
  position: absolute;
  background-color: ${(props) => props.theme.main};
  z-index: ${(props) => (props.open ? 1 : 0)};
  display: flex;
  font-size: 1.5rem;
  align-items: center;
  justify-content: center;
  flex-wrap: wrap;
  flex-direction: row;
`;

const CloseButton = styled.div`
  cursor: pointer;
  display: flex;
  justify-content: center;
  align-items: center;
  position: absolute;
  right: 0.5rem;
  top: 0.5rem;
  width: 50px;
  height: 50px;
  color: #fff;
  font-size: 3rem;
  background-color: ${(props) => props.theme.secondary};
`;

interface OverlayProps {
  anchorRef: React.RefObject<HTMLHeadingElement>;
  windowSize: DOMRectReadOnly | undefined;
  children?: React.ReactNode;
  offsetX?: number;
  offsetY?: number;
  name: String;
  overlayRef?: SpringRef;
  open?: any;
  onClick?: any;
}

function OverlayButton({
  anchorRef,
  windowSize,
  children,
  offsetX,
  offsetY,
  name,
  overlayRef,
  open,
  onClick,
}: OverlayProps) {
  const theme = useContext(ThemeContext);
  const [buttonsAnchor, setButtonsAnchor] = useState<{ x: Number; y: Number }>({
    x: 0,
    y: 0,
  });

  useEffect(() => {
    const rect = anchorRef.current?.getBoundingClientRect();
    const x = rect ? rect.x + (offsetX || 0) : 0;
    const y = rect ? rect.y + rect.height + 20 + (offsetY || 0) : 0;
    setButtonsAnchor({ x, y });
  }, [anchorRef, offsetX, offsetY, windowSize]);

  const styles = useSpring({
    ref: overlayRef,
    config: config.stiff,
    from: {
      width: 150,
      height: 100,
      color: "#fff",
    },
    to: {
      width: open ? windowSize?.width : 100,
      height: open ? windowSize?.height : 50,
      background: open ? "white" : theme.secondary,
      top: open ? 0 : buttonsAnchor.y,
      left: open ? 0 : buttonsAnchor.x,
      cursor: open ? "auto" : "pointer",
      color: open ? "#000" : "#fff",
    },
  });

  return (
    <Overlay open={open} onClick={!open ? onClick : () => null} style={styles}>
      {!open ? name : children}
      {open && (
        <CloseButton onClick={onClick}>
          <IoIosClose />
        </CloseButton>
      )}
    </Overlay>
  );
}

export default OverlayButton;
