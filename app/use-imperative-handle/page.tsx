// page for use-imperative-handle hook practice
"use client";
import { useRef, forwardRef, useImperativeHandle, useState } from "react";

// 1️⃣ Componente hijo
type ChildHandle = {
  focusInput: () => void;
  clearInput: () => void;
};

const ChildInput = forwardRef<ChildHandle>((_, ref) => {
  const [value, setValue] = useState("");
  const inputRef = useRef<HTMLInputElement>(null);

  // 2️⃣ Definimos qué puede hacer el padre
  useImperativeHandle(ref, () => ({
    focusInput: () => {
      inputRef.current?.focus();
    },
    clearInput: () => {
      setValue("");
      inputRef.current?.focus();
    },
  }));

  return (
    <input
      ref={inputRef}
      type="text"
      value={value}
      onChange={(e) => setValue(e.target.value)}
      placeholder="Escribe algo..."
      className="border p-2 rounded w-64"
    />
  );
});
ChildInput.displayName = "ChildInput";

// 3️⃣ Componente padre
export default function UseImperativeHandleExample() {
  const inputRef = useRef<ChildHandle>(null);

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-900 text-white">
      <h1 className="text-2xl font-bold mb-4">useImperativeHandle Example</h1>

      <ChildInput ref={inputRef} />

      <div className="mt-4 flex gap-4">
        <button
          onClick={() => inputRef.current?.focusInput()}
          className="bg-blue-600 px-4 py-2 rounded hover:bg-blue-700"
        >
          Focus
        </button>
        <button
          onClick={() => inputRef.current?.clearInput()}
          className="bg-red-600 px-4 py-2 rounded hover:bg-red-700"
        >
          Clear
        </button>
      </div>
    </div>
  );
}
