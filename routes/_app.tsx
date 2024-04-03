import type { PageProps } from "$fresh/server.ts";

const title = "Richard Stromer";
const description =
  "Entrepreneur and digital product manager. Enthusiastic about building excellent digital products 🧑‍💻=🚀";
const domain = "stromer.org";
const website = "https://stromer.org/";
const image = "https://stromer.org/me.webp";

export default function App({ Component }: PageProps) {
  return (
    <html lang="en">
      <head>
        <meta charset="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />

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

        <link
          rel="apple-touch-icon"
          sizes="180x180"
          href="/apple-touch-icon.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="32x32"
          href="/favicon-32x32.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="16x16"
          href="/favicon-16x16.png"
        />
        <link rel="manifest" href="/site.webmanifest" />
        <link rel="stylesheet" href="/styles.css" />
      </head>
      <body class="antialiased flex justify-center h-screen flex-col sm:bg-gray-50 sm:dark:bg-gray-900 dark:bg-gray-800 dark:text-gray-100">
        <Component />
      </body>
    </html>
  );
}
