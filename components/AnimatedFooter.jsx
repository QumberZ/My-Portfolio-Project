import React from "react";
import { useSpring, animated } from "react-spring";
import FooterInitials from "./FooterInitials";

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
        bottom: 20,
        right: 20,
        zIndex: 20,
        pointerEvents: "auto",
      }}
    >
      <FooterInitials />
    </animated.div>
  );
};

export default AnimatedFooter;