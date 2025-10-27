"use client";
import { useState, useCallback, memo } from "react";

// Componente hijo
type ChildProps = {
  onClick: () => void;
};

const ChildButton = memo(({ onClick }: ChildProps) => {
  console.log("🔁 ChildButton renderizado");
  return (
    <button
      onClick={onClick}
      className="bg-blue-500 text-white px-4 py-2 rounded mt-3"
    >
      Incrementar contador
    </button>
  );
});

// Componente padre
export default function CounterExample() {
  const [count, setCount] = useState(0);
  const [text, setText] = useState("");

  // Esta función se memoriza con useCallback
  const handleIncrement = useCallback(() => {
    setCount((prev) => prev + 1);
  }, []);

  console.log("🔁 Componente padre renderizado");

  return (
    <div className="p-6">
      <h1 className="text-xl font-bold mb-2">Contador: {count}</h1>
      <input
        className="border p-2 rounded"
        placeholder="Escribe algo..."
        value={text}
        onChange={(e) => setText(e.target.value)}
      />
      <ChildButton onClick={handleIncrement} />
    </div>
  );
}
