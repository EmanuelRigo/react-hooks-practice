"use client";
import { useRef, useState, useEffect } from "react";

export default function UseRefCounter() {
  const [count, setCount] = useState(0);
  const renderCount = useRef(0);

  useEffect(() => {
    renderCount.current += 1;
  });

  return (
    <div className="flex flex-col items-center justify-center min-h-screen gap-3">
      <h1 className="text-2xl font-bold">
        useRef Example 2 — Persistent Value
      </h1>
      <p>Count: {count}</p>
      <p>Rendered: {renderCount.current} times</p>
      <button
        onClick={() => setCount((prev) => prev + 1)}
        className="bg-green-600 px-4 py-2 rounded hover:bg-green-700 text-white"
      >
        Increment
      </button>
    </div>
  );
}
