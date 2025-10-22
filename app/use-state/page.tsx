// page for use-state hook practice

// "use client";

// import { useState } from "react";

// export default function UseStateExample() {
//   const [count, setCount] = useState<number>(0);

//   return (
//     <div className="p-6 text-center">
//       <h1 className="text-xl font-bold mb-4">useState Example</h1>
//       <p className="text-lg mb-2">Count: {count}</p>
//       <button
//         onClick={() => setCount(count + 1)}
//         className="bg-blue-600 text-white px-4 py-2 rounded"
//       >
//         Increment
//       </button>
//     </div>
//   );
// }

"use client";
import { useState } from "react";

export default function useStateExample() {
  const [count, setCount] = useState<number>(0);

  return (
    <div className="p-6 text-center">
      <h1 className="text-xl font-bold mb-4">useState Example</h1>
      <p className="text-lg mb-2">Count: {count}</p>
      <button
        onClick={() => setCount(count + 1)}
        className="bg-blue-600 text-white px-4 py-2 rounded"
      >
        Increment
      </button>
    </div>
  );
}
