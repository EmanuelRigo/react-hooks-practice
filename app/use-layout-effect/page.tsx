// page for use-layout-effect hook practice
"use client";

import { useState, useLayoutEffect, useRef } from "react";

export default function useLayoutEffectPage() {
  const [width, setWidth] = useState(0);
  const boxRef = useRef<HTMLDivElement>(null);

  useLayoutEffect(() => {
    if (boxRef.current) {
      setWidth(boxRef.current.getBoundingClientRect().width);
    }
  }, []);

  return (
    <div
      className="flex flex-col items-center justify-center min-h-screen bg-gray-900 text-white"
      ref={boxRef}
    >
      <h1 className="text-2xl font-bold mb-6">useLayoutEffect Example</h1>

      <div className="bg-blue-500 w-64 h-24 flex items-center justify-center rounded mb-4">
        <p>Box width: {Math.round(width)}px</p>
      </div>

      <p className="w-2/3">
        Este ancho se mide **antes de que el navegador pinte**, evitando
        parpadeos si hacemos cálculos o cambios en el DOM.
      </p>
    </div>
  );
}
