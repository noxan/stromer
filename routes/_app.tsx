import { AppProps } from "$fresh/src/server/types.ts";
import { Head } from "$fresh/runtime.ts";

export default function App({ Component }: AppProps) {
  return (
    <html>
      <Head>
        <title>stromer.org</title>
      </Head>
      <body class="antialiased flex justify-center h-screen flex-col bg-gray-50 dark:(bg-gray-900 text-gray-100)">
        <Component />
      </body>
    </html>
  );
}
