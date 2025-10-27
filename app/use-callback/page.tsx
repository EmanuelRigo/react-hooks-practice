"use client";
import { useState, useCallback, memo } from "react";

// ✅ Componente hijo optimizado
const List = memo(
  ({ getItems }: { getItems: (increment: number) => number[] }) => {
    console.log("🧩 Rendering List component...");
    const items = getItems(5);

    return (
      <ul className="mt-4">
        {items.map((item, i) => (
          <li key={i} className="border-b border-gray-600 py-1">
            Item: {item}
          </li>
        ))}
      </ul>
    );
  }
);

export default function UseCallbackExample() {
  const [number, setNumber] = useState(1);
  const [dark, setDark] = useState(false);

  // 🧠 useCallback memoriza la función
  const getItems = useCallback(
    (increment: number) => {
      return [number, number + increment, number + increment * 2];
    },
    [number]
  );

  const themeStyles: React.CSSProperties = {
    backgroundColor: dark ? "#333" : "#fff",
    color: dark ? "#fff" : "#333",
    padding: "20px",
    borderRadius: "10px",
    textAlign: "center" as const,
    transition: "all 0.3s ease",
  };

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
      <h1 className="text-2xl font-bold mb-6">useCallback Example</h1>

      <div style={themeStyles}>
        <input
          type="number"
          value={number}
          onChange={(e) => setNumber(Number(e.target.value))}
          className="text-black px-3 py-2 rounded mb-4"
        />
        <button
          onClick={() => setDark((prev) => !prev)}
          className="bg-blue-600 px-4 py-2 rounded hover:bg-blue-700 mb-4"
        >
          Toggle Theme
        </button>
        <List getItems={getItems} />
      </div>
    </div>
  );
}
