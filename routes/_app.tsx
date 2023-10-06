import { Head } from "$fresh/runtime.ts";
import { AppProps } from "$fresh/src/server/types.ts";

const title = "Richard Stromer";
const description =
  "Entrepreneur and digital product manager. Enthusiastic about building excellent digital products 🧑‍💻=🚀";
const domain = "stromer.org";
const website = "https://stromer.org/";
const image = "https://stromer.org/me.webp";

export default function App({ Component }: AppProps) {
  return (
    <html>
      <Head>
        <title>Richard Stromer</title>
        <meta name="description" content={description} />
        <meta property="og:url" content={website} />
        <meta property="og:type" content="website" />
        <meta property="og:title" content={title} />
        <meta property="og:description" content={description} />
        <meta property="og:image" content={image} />
        <meta name="twitter:card" content="summary_large_image" />
        <meta property="twitter:domain" content={domain} />
        <meta property="twitter:url" content={website} />
        <meta name="twitter:title" content={title} />
        <meta name="twitter:description" content={description} />
        <meta name="twitter:image" content={image} />
      </Head>
      <body class="antialiased flex justify-center h-screen flex-col sm:(bg-gray-50 dark:(bg-gray-900)) dark:(bg-gray-800 text-gray-100)">
        <Component />
      </body>
    </html>
  );
}
