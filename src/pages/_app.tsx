import "@/styles/globals.css";
import type { AppProps } from "next/app";
import { MantineProvider } from "@mantine/core";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <MantineProvider withGlobalStyles withCSSVariables withNormalizeCSS>
      <Component {...pageProps} />
    </MantineProvider>
  );
}
