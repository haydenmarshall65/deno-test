import { type PageProps } from "$fresh/server.ts";
// @deno-types="npm:@types/react"
import React from "npm:react";
// @deno-types="npm:@types/react-dom/server"
import ReactDOM from "npm:react-dom/server";

export default function App({ Component }: PageProps) {
  return (
    <html>
      <head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <title>fresh-project</title>
        <link rel="stylesheet" href="/styles.css" />
      </head>
      <body>
        <Component />
      </body>
    </html>
  );
}
