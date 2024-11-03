import { type PageProps } from "$fresh/server.ts";
import { BreadCrumbs } from "../components/BreadCrumbs.tsx";
export default function App(props: PageProps) {
  return (
    <html lang="en">
      <head>
        <meta charset="utf-8" />
        <meta
          name="description"
          content="Cody Spate - Software engineer in the Sacramento, CA area"
        />
        <meta name="author" content="Cody Spate" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <title>Cody Spate - Software Engineer</title>
        <link rel="preload" href="/styles.css" as="style" />
        <link rel="stylesheet" href="/styles.css" />
        <link
          rel="icon"
          href="/logo-dark.svg"
          type="image/svg"
          media="(prefers-color-scheme: light)"
        />

        <link
          rel="icon"
          href="/logo-light.svg"
          type="image/svg"
          media="(prefers-color-scheme: dark)"
        />
      </head>
      <body>
        <main className="max-w-screen-md mx-auto px-4 md:px-0">
          <BreadCrumbs path={props.url.pathname} />
          <props.Component />
        </main>
      </body>
    </html>
  );
}
