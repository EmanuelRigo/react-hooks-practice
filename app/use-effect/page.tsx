// page for use-effect hook practice
"use client";

import { useEffect, useState } from "react";

export default function UseEffectPage() {
  const [time, setTime] = useState<Date>(new Date());
  const [running, setRunning] = useState<boolean>(true);

  useEffect(() => {
    if (!running) return;
    const interval = setInterval(() => setTime(new Date()), 1000);
    return () => clearInterval(interval);
  }, [running]);

  return (
    <main className="flex flex-col items-center justify-center min-h-screen bg-gray-900 text-white">
      <h1 className="text-2xl font-bold mb-4">useEffect Example</h1>
      <p className="text-lg mb-4">{time.toLocaleTimeString()}</p>
      <button
        onClick={() => setRunning(!running)}
        className="bg-blue-600 px-4 py-2 rounded hover:bg-blue-700"
      >
        {running ? "Stop" : "Start"}
      </button>
    </main>
  );
}
