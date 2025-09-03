import React, { useEffect, useRef, useState } from "react";

function CursorDotRing() {
  const dot = useRef(null);
  const ring = useRef(null);
  const pos = useRef({ x: 0, y: 0 });
  const ringPos = useRef({ x: 0, y: 0 });
  const [isTouch, setIsTouch] = useState(false);

  useEffect(() => {
    const touchCheck = window.matchMedia("(pointer: coarse)").matches;
    setIsTouch(touchCheck);
    if (touchCheck) return;

    document.documentElement.style.cursor = "none";

    const move = (e) => {
      pos.current = { x: e.clientX, y: e.clientY };
      if (dot.current) {
        dot.current.style.transform = `translate3d(${pos.current.x}px, ${pos.current.y}px, 0)`;
      }
    };

    let raf;
    const lerp = (a, b, n) => (1 - n) * a + n * b;
    const loop = () => {
      ringPos.current.x = lerp(ringPos.current.x, pos.current.x, 0.18);
      ringPos.current.y = lerp(ringPos.current.y, pos.current.y, 0.18);
      if (ring.current) {
        ring.current.style.transform = `translate3d(${ringPos.current.x}px, ${ringPos.current.y}px, 0)`;
      }
      raf = requestAnimationFrame(loop);
    };

    const enterInteractive = () => {
      if (ring.current) {
        ring.current.style.transform += " scale(1.8)";
        ring.current.style.background = "rgba(250, 204, 21, 0.4)";
      }
      if (dot.current) dot.current.style.opacity = "0";
    };

    const leaveInteractive = () => {
      if (ring.current) {
        ring.current.style.transform = ring.current.style.transform.replace(/ scale\([^)]+\)/, "");
        ring.current.style.background = "rgba(250, 204, 21, 0.3)";
      }
      if (dot.current) dot.current.style.opacity = "1";
    };

    window.addEventListener("mousemove", move);
    raf = requestAnimationFrame(loop);

    const selectors = "a, button, [role='button'], input, textarea, select, .cursor-grow";
    const interEls = document.querySelectorAll(selectors);
    interEls.forEach((el) => {
      el.addEventListener("mouseenter", enterInteractive);
      el.addEventListener("mouseleave", leaveInteractive);
    });

    return () => {
      document.documentElement.style.cursor = "";
      window.removeEventListener("mousemove", move);
      cancelAnimationFrame(raf);
      interEls.forEach((el) => {
        el.removeEventListener("mouseenter", enterInteractive);
        el.removeEventListener("mouseleave", leaveInteractive);
      });
    };
  }, []);

  if (isTouch) return null;

  return (
    <>
      <div
        ref={dot}
        style={{
          position: "fixed",
          top: 0,
          left: 0,
          width: 15,
          height: 15,
          borderRadius: "50%",
          background: "#fff",
          pointerEvents: "none",
          zIndex: 9999,
          transform: "translate3d(-10px,-10px,0)",
          mixBlendMode: "difference",
        }}
      />
      <div
        ref={ring}
        style={{
          position: "fixed",
          top: 0,
          left: 0,
          width: 32,
          height: 32,
          borderRadius: "50%",
          background: "rgba(250, 204, 21, 0.3)",
          border: "1px solid rgba(250,204,21,0.6)",
          pointerEvents: "none",
          zIndex: 9998,
          transform: "translate3d(-16px,-16px,0)",
          backdropFilter: "blur(2px)",
          transition: "background 0.2s ease, opacity 0.2s ease",
        }}
      />
    </>
  );
}

export default CursorDotRing;
