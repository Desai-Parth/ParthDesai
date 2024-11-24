"use client";

const { useMotionValue, useSpring, useInView } = require("framer-motion");
const { useRef, useEffect } = require("react");

const AnimatedYears = ({ value }) => {
  const ref = useRef(null);
  const motionValue = useMotionValue(0);
  const springValue = useSpring(motionValue, { duration: 3000 });
  const isInView = useInView(ref, { once: true });

  useEffect(() => {
    if (isInView) {
      motionValue.set(value);
    }
  }, [isInView, value, motionValue]);

  useEffect(() => {
    springValue.on("change", (latest) => {
      if (ref.current && latest.toFixed(1) <= value) {
        ref.current.textContent = latest.toFixed(1);
      }
    });
  }, [springValue, value]);

  return <span ref={ref}></span>;
};

export default AnimatedYears;
