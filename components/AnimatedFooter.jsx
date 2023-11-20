import React from "react";
import { useSpring, animated } from "react-spring";
import Page1 from "./Page1";
// ... (imports)

const AnimatedFooter = () => {
  const footerAnimationProps = useSpring({
    from: { opacity: 0, transform: "translateY(100%)" },
    to: { opacity: 1, transform: "translateY(0%)" },
  });

  return (
    <animated.div
      style={{
        ...footerAnimationProps,
        position: "fixed",
        bottom: 0,
        right: 0,
        p: 2,
        zIndex: 1000, // Add this line
      }}
    >
      <Page1>
        <a href="mailto:qumber.zaidi@cix.csi.cuny.edu"></a>
      </Page1>
    </animated.div>
  );
};

export default AnimatedFooter;
