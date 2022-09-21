import { AppProps } from "$fresh/src/server/types.ts";

export default function App({ Component }: AppProps) {
  return (
    <body class="flex justify-center h-screen flex-col bg-gray-50">
      <Component />
    </body>
  );
}
