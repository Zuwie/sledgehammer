import type { LinksFunction, LoaderArgs, MetaFunction } from "@remix-run/node";
import { json } from "@remix-run/node";
import {
  Links,
  LiveReload,
  Meta,
  Outlet,
  Scripts,
  ScrollRestoration,
} from "@remix-run/react";

import { getUser } from "./session.server";
import tailwindStylesheetUrl from "./styles/tailwind.css";
import mainCss from "./styles/main.css";
import { Header } from "~/components/Header";
import { Footer } from "~/components/Footer";

export const links: LinksFunction = () => {
  return [
    { rel: "stylesheet", href: tailwindStylesheetUrl },
    { rel: "stylesheet", href: mainCss },
    { rel: "preconnect", href: "https://fonts.googleapis.com"},
    { rel: "preconnect", href: "https://fonts.gstatic.com"},
    { rel: "stylesheet", href: "https://fonts.googleapis.com/css2?family=Inter:wght@100;400;600&display=swap"},
  ];
};

export const meta: MetaFunction = () => ({
  charset: "utf-8",
  title: "Sledgehammer Wargaming",
  viewport: "width=device-width,initial-scale=1",
});

export async function loader({ request }: LoaderArgs) {
  return json({
    user: await getUser(request),
  });
}

export default function App() {
  return (
    <html lang="en" className="h-full">
      <head>
        <Meta />
        <Links />
      </head>
      <body className="h-full">
        <Header />
        <Outlet />
        <Footer />
        <ScrollRestoration />
        <Scripts />
        <LiveReload />
      </body>
    </html>
  );
}