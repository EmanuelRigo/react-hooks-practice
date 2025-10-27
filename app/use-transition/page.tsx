// page for use-transition hook practice
"use client";
import { useState, useTransition } from "react";

export default function UseTransitionExample() {
  const [input, setInput] = useState("");
  const [list, setList] = useState<string[]>([]);
  const [isPending, startTransition] = useTransition();

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    setInput(value);

    // 🔥 Aquí usamos startTransition para una operación costosa
    startTransition(() => {
      const newList = Array.from(
        { length: 2000 },
        (_, i) => `${value} - Item ${i + 1}`
      );
      setList(newList);
    });
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-900 text-white p-6">
      <h1 className="text-2xl font-bold mb-4">useTransition Example</h1>

      <input
        className="border p-2 rounded text-black w-64 mb-4 bg-neutral-200"
        placeholder="Type something..."
        value={input}
        onChange={handleChange}
      />

      {isPending && <p className="text-yellow-400 mb-2">Updating list...</p>}

      <ul className="max-h-80 overflow-y-auto border rounded w-64 bg-gray-800">
        {list.map((item) => (
          <li key={item} className="p-1 border-b border-gray-700">
            {item}
          </li>
        ))}
      </ul>
    </div>
  );
}
