import React, { useEffect, useRef, useState } from "react";
import "../styles/cursor.css";

const CustomCursor = () => {
  const dotRef = useRef(null);
  const ringRef = useRef(null);

  const [isHovering, setIsHovering] = useState(false);
  const [isClicking, setIsClicking] = useState(false);

  useEffect(() => {
    let mouseX = 0;
    let mouseY = 0;
    let ringX = 0;
    let ringY = 0;

    const moveCursor = (e) => {
      mouseX = e.clientX;
      mouseY = e.clientY;

      if (dotRef.current) {
        dotRef.current.style.transform = `translate(${mouseX}px, ${mouseY}px)`;
      }
    };

    const animateRing = () => {
      ringX += (mouseX - ringX) * 0.15;
      ringY += (mouseY - ringY) * 0.15;

      if (ringRef.current) {
        ringRef.current.style.transform = `translate(${ringX}px, ${ringY}px)`;
      }

      requestAnimationFrame(animateRing);
    };

    const addHover = () => setIsHovering(true);
    const removeHover = () => setIsHovering(false);

    const mouseDown = () => setIsClicking(true);
    const mouseUp = () => setIsClicking(false);

    document.addEventListener("mousemove", moveCursor);
    document.addEventListener("mousedown", mouseDown);
    document.addEventListener("mouseup", mouseUp);

    const hoverElements = document.querySelectorAll(
      "a, button, input, textarea, .hover-target"
    );

    hoverElements.forEach((el) => {
      el.addEventListener("mouseenter", addHover);
      el.addEventListener("mouseleave", removeHover);
    });

    animateRing();

    return () => {
      document.removeEventListener("mousemove", moveCursor);
      document.removeEventListener("mousedown", mouseDown);
      document.removeEventListener("mouseup", mouseUp);

      hoverElements.forEach((el) => {
        el.removeEventListener("mouseenter", addHover);
        el.removeEventListener("mouseleave", removeHover);
      });
    };
  }, []);

  return (
    <>
      <div
        ref={dotRef}
        className={`cursor-dot ${isHovering ? "hover" : ""} ${
          isClicking ? "click" : ""
        }`}
      />
      <div
        ref={ringRef}
        className={`cursor-ring ${isHovering ? "hover" : ""} ${
          isClicking ? "click" : ""
        }`}
      />
    </>
  );
};

export default CustomCursor;