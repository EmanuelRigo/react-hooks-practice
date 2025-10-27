// page for use-ref hook practice
"use client";
import { useRef } from "react";

export default function UseRefExample() {
  const inputRef = useRef<HTMLInputElement | null>(null);

  const focusInput = () => {
    // .current accede al elemtno del DOM real
    inputRef.current?.focus();
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen gap-4">
      <h1 className="text-2xl font-bold">useRef Example 1 — Focus</h1>
      <input
        ref={inputRef}
        type="text"
        placeholder="Click the button to focus me"
        className="border border-gray-400 px-3 py-2 rounded"
      />
      <button
        onClick={focusInput}
        className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700"
      >
        Focus Input
      </button>
    </div>
  );
}
