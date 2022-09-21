import Counter from "../islands/Counter.tsx";

export default function Home() {
  return (
    <main class="p-4 mx-auto max-w-screen-md bg-white ring-1 ring-gray-100">
      <img
        src="/logo.svg"
        class="w-32 h-32"
        alt="the fresh logo: a sliced lemon dripping with juice"
      />
      <h1 class="text-4xl font-bold">Hello, world!</h1>
      <p class="my-6">
        Welcome to `fresh`. Try updating this message in the ./routes/index.tsx
        file, and refresh.
      </p>
      <Counter start={3} />
    </main>
  );
}
