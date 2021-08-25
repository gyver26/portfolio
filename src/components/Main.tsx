import React, { useRef, useState } from "react";
import styled from "styled-components";
import useResizeObserver from "@react-hook/resize-observer";
import { About, Skills, Projects } from "components";
import { useSpring } from "@react-spring/core";
import { config, animated } from "@react-spring/web";

const MainDiv = styled.div`
  overflow: hidden;
  background-color: ${(props) => props.theme.main};
  position: relative;
`;

const Content = styled.div`
  display: flex;
  flex-direction: row;
  height: 100%;
  align-items: center;
  justify-content: space-evenly;
  flex-wrap: wrap-reverse;
  box-sizing: border-box;
  width: 100vw;
  height: 100vh;
  padding: 16px;
`;

const Name = styled.h1`
  color: white;
  font-size: 3rem;
  margin-top: 8px;
  margin-bottom: 8px;
`;

const Greetings = styled(animated.div)`
  position: relative;
  width: 100%;
  height: 70px;
  overflow: hidden;
`;

const Greeting = styled.div`
  font-size: 1.5rem;
  height: 70px;
  display: flex;
  justify-content: center;
`;

const useSize = (target: React.RefObject<HTMLDivElement>) => {
  const [size, setSize] = useState<DOMRectReadOnly>();
  React.useLayoutEffect(() => {
    setSize(target?.current?.getBoundingClientRect());
  }, [target]);

  useResizeObserver(target, (entry) => setSize(entry.contentRect));
  return size;
};

function Main() {
  const webDevRef = useRef<HTMLHeadingElement>(null);
  const mainRef = useRef<HTMLDivElement>(null);
  const windowSize = useSize(mainRef);

  const language = ["react", "javascript", "php", "mysql"];
  const [counter, setCounter] = useState(0);

  const { scroll } = useSpring({
    scroll: counter * 70,
    from: { scroll: (counter - 1) * 70 },
    reset: true,

    delay: 400,
    config: config.molasses,
    onRest: () => {
      if (language.length - 1 <= counter) {
        setCounter(0);
      } else {
        setCounter(counter + 1);
      }
    },
  });

  return (
    <MainDiv ref={mainRef}>
      <Content>
        <div>
          <Name>don-gyver-gabito</Name>
          <h2 ref={webDevRef}>web developer</h2>
        </div>
        <div>
          <Greetings scrollTop={scroll}>
            <Greeting>{"<Greetings>hello</Greetings>"}</Greeting>
            <Greeting>{`console.log("hello");`}</Greeting>
            <Greeting>
              {`$greetings = "Hello";`}
              <br />
              {`echo $greetings;`}
            </Greeting>
            <Greeting>
              {`SELECT * FROM greetings WHERE text LIKE 'hello'`}
            </Greeting>
          </Greetings>
        </div>
      </Content>
      <About anchorRef={webDevRef} windowSize={windowSize} />
      <Skills anchorRef={webDevRef} windowSize={windowSize} />
      <Projects anchorRef={webDevRef} windowSize={windowSize} />
    </MainDiv>
  );
}

export default Main;
