import Link from "next/link";

const hooks = [
  "use-state",
  "use-effect",
  "use-context",
  "use-reducer",
  "use-ref",
  "use-memo",
  "use-callback",
  "use-layout-effect",
  "use-imperative-handle",
  "use-transition",
  "use-deferred-value",
  "use-id",
  "custom-hooks",
];

export default function HomePage() {
  return (
    <main className="flex flex-col items-center min-h-screen p-10 bg-gray-900 text-white">
      <h1 className="text-3xl font-bold mb-6">React Hooks Practice</h1>
      <ul className="space-y-3">
        {hooks.map((hook) => (
          <li key={hook}>
            <Link
              href={`/${hook}`}
              className="text-blue-400 hover:text-blue-200 underline"
            >
              {hook}
            </Link>
          </li>
        ))}
      </ul>
    </main>
  );
}
