"use client";
import { useState, useMemo } from "react";

// Simula una operación costosa
const expensiveCalculation = (num: number) => {
  console.log("Running expensive calculation...");
  let total = 0;
  for (let i = 0; i < 1_000_000_000; i++) {
    total += num * 2;
  }
  return total;
};

export default function UseMemoExample() {
  const [number, setNumber] = useState(0);
  const [dark, setDark] = useState(false);

  // ✅ Solo se recalcula cuando `number` cambia
  const doubled = useMemo(() => expensiveCalculation(number), [number]);

  const themeStyles: React.CSSProperties = useMemo(
    () => ({
      backgroundColor: dark ? "#333" : "#fff",
      color: dark ? "#fff" : "#333",
      padding: "20px",
      borderRadius: "10px",
      textAlign: "center" as const,
      transition: "all 0.3s ease",
    }),
    [dark]
  );

  return (
    <div
      style={{
        backgroundColor: "#0f172a",
        color: "#fff",
        minHeight: "100vh",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      <h1 className="text-2xl font-bold mb-6">useMemo Example</h1>

      <input
        type="number"
        value={number}
        onChange={(e) => setNumber(Number(e.target.value))}
        className="text-black px-3 py-2 rounded mb-4 bg-neutral-300"
      />

      <button
        onClick={() => setDark((prev) => !prev)}
        className="bg-blue-600 px-4 py-2 rounded hover:bg-blue-700 mb-4"
      >
        Toggle Theme
      </button>

      <div style={themeStyles}>
        <p>Number: {number}</p>
        <p>Expensive result: {doubled}</p>
        <p>Theme: {dark ? "Dark" : "Light"}</p>
      </div>
    </div>
  );
}
