"use client";

import React, { useEffect, useRef, useState } from "react";
import mermaid from "mermaid";

mermaid.initialize({
  startOnLoad: false,
  theme: "dark",
  fontFamily: "var(--font-inter)",
});

export default function MermaidDiagram({ chart }: { chart: string }) {
  const containerRef = useRef<HTMLDivElement>(null);
  const [svg, setSvg] = useState<string>("");

  useEffect(() => {
    const renderDiagram = async () => {
      if (containerRef.current) {
        try {
          const { svg: renderedSvg } = await mermaid.render(`mermaid-svg-${Math.random().toString(36).substring(7)}`, chart);
          setSvg(renderedSvg);
        } catch (error) {
          console.error("Mermaid rendering failed:", error);
        }
      }
    };
    renderDiagram();
  }, [chart]);

  return <div ref={containerRef} dangerouslySetInnerHTML={{ __html: svg }} className="flex justify-center" />;
}
