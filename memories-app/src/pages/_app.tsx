// src/pages/_app.tsx
import type { AppProps } from "next/app";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import dynamic from "next/dynamic";
import "../styles/globals.css";
import { Montserrat } from "next/font/google";

const montserrat = Montserrat({
  subsets: ["latin"],
  variable: "--font-geist-sans",
});

type ClientOnlyQueryClientProviderProps = {
  children: React.ReactNode;
  client: any;
};

const ClientOnlyQueryClientProvider = dynamic(
  () =>
    Promise.resolve(
      ({ children, client }: ClientOnlyQueryClientProviderProps) => (
        <QueryClientProvider client={client}>{children}</QueryClientProvider>
      )
    ),
  { ssr: false }
);

let queryClient: any;

if (typeof window !== "undefined") {
  queryClient = new QueryClient();
} else {
  queryClient = {} as QueryClient;
}

export default function App({ Component, pageProps }: AppProps) {
  return (
    <ClientOnlyQueryClientProvider client={queryClient}>
      {/* 👇 Áp dụng className cho toàn bộ app */}
      <main className={`${montserrat.variable}`}>
        <Component {...pageProps} />
      </main>
    </ClientOnlyQueryClientProvider>
  );
}
