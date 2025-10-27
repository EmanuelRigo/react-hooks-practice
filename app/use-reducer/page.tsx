// page for use-reducer hook practice
"use client";

import { useReducer } from "react";

interface State {
  count: number;
}

type Action =
  | { type: "increment" }
  | { type: "decrement" }
  | { type: "reset" }
  | { type: "set"; payload: number };

function reducer(state: State, action: Action): State {
  switch (action.type) {
    case "increment":
      return { count: state.count + 1 };
    case "decrement":
      return { count: state.count - 1 };
    case "reset":
      return { count: 0 };
    case "set":
      return { count: action.payload };
    default:
      return state;
  }
}

export default function UseReducerExample() {
  const [state, dispatch] = useReducer(reducer, { count: 0 });

  return (
    <main className="flex flex-col items-center justify-center min-h-screen bg-gray-900 text-white">
      <h1 className="text-2xl font-bold mb-6">useReducer Example</h1>

      <p className="text-3xl mb-6">{state.count}</p>

      <div className="flex gap-3">
        <button
          onClick={() => dispatch({ type: "decrement" })}
          className="bg-red-600 px-4 py-2 rounded hover:bg-red-700"
        >
          -
        </button>
        <button
          onClick={() => dispatch({ type: "increment" })}
          className="bg-green-600 px-4 py-2 rounded hover:bg-green-700"
        >
          +
        </button>
        <button
          onClick={() => dispatch({ type: "reset" })}
          className="bg-gray-600 px-4 py-2 rounded hover:bg-gray-700"
        >
          Reset
        </button>
      </div>

      <button
        onClick={() => dispatch({ type: "set", payload: 10 })}
        className="mt-4 bg-blue-600 px-4 py-2 rounded hover:bg-blue-700"
      >
        Set to 10
      </button>
    </main>
  );
}
