"use client";

import React from "react";

type Spinner3DProps = {
  count?: number;
  size?: string; // e.g. "70vh"
  speed?: number; // seconds
  color?: string; // any CSS color
  className?: string;
};

export function Spinner3D({
  count = 16,
  size = "70vh",
  speed = 12,
  color = "hsl(var(--primary))",
  className = "",
}: Spinner3DProps) {
  const circles = Array.from({ length: count }, (_, i) => i + 1);

  const containerStyle: React.CSSProperties = {
    // CSS variables for sizing/color
    ["--size" as any]: size,
    ["--color" as any]: color,
    ["--step" as any]: `calc(${size} / ${count})`,
    animation: "spinContainer 60s linear infinite",
  };

  return (
    <div
      aria-hidden
      className={`spinner-3d ${className}`}
      style={containerStyle}
    >
      {circles.map((n) => {
        const style: React.CSSProperties = {
          left: `calc((var(--step) * ${n}) / 2)`,
          top: `calc((var(--step) * ${n}) / 2)`,
          width: `calc(var(--size) - (var(--step) * ${n}))`,
          height: `calc(var(--size) - (var(--step) * ${n}))`,
          animationDuration: `${speed / n}s`,
        };

        const dashed = n % 2 === 0;

        return (
          <span
            key={n}
            className={`circle${dashed ? " circle-dashed" : ""}`}
            style={style}
          />
        );
      })}
    </div>
  );
}

export default Spinner3D;
