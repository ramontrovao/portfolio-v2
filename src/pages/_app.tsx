import type { AppProps } from "next/app";
import { DefaultLayout } from "@/layouts/DefaultLayout";
import "@/styles/globals.css";

export default function App({ Component, pageProps }: AppProps) {
  return <Component {...pageProps} />;
}
