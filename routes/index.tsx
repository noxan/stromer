import Counter from "../islands/Counter.tsx";

export default function Home() {
  return (
    <main class="p-6 mx-auto max-w-screen-md bg-white dark:(bg-gray-800 ring-gray-700) ring-1 ring-gray-100 shadow-md rounded-lg text-center sm:text-left">
      <div class="flex flex-col mb-3 items-center	sm:(flex-row items-stretch)">
        <picture class="w-32 h-32 rounded-full aspect-square mr-5">
          <source srcset="/me.webp" type="image/webp" />
          <source srcset="/me.jpg" type="image/jpeg" />
          <img
            src="/me.jpg"
            class="w-32 h-32 rounded-full aspect-square mr-5"
            alt="profile picture of richard stromer"
          />
        </picture>
        <div class="flex flex-col justify-center">
          <h1 class="text-4xl mb-1">Richard Stromer</h1>
          <h2 class="text-xl text-gray-600 dark:text-gray-400 mb-2">
            Entrepreneur and digital product manager.
          </h2>
        </div>
      </div>
      <p class="text-lg mb-6">
        Enthusiastic about building excellent digital products 🧑‍💻=🚀
      </p>
      <Counter start={3} />
    </main>
  );
}
