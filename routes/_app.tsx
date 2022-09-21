import { AppProps } from "$fresh/src/server/types.ts";

export default function App({ Component }: AppProps) {
  return (
    <body class="flex h-full flex-col bg-gray-50">
      <Component />
    </body>
  );
}
