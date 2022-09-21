import Counter from "../islands/Counter.tsx";

export default function Home() {
  return (
    <main class="p-4 mx-auto max-w-screen-md bg-white ring-1 ring-gray-100">
      <img
        src="/logo.svg"
        class="w-32 h-32"
        alt="the fresh logo: a sliced lemon dripping with juice"
      />
      <h1 class="text-4xl mb-1">Richard Stromer</h1>
      <h2 class="text-xl text-gray-600 mb-2">
        Entrepreneur and digital product manager.
      </h2>
      <p class="text-lg mb-6">
        Enthusiastic about building excellent digital products 🧑‍💻=🚀
      </p>
      <Counter start={3} />
    </main>
  );
}
