import type { AppProps } from "next/app";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import dynamic from "next/dynamic";

type ClientOnlyQueryClientProviderProps = {
  children: React.ReactNode;
  client: QueryClient;
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

let queryClient: QueryClient;

if (typeof window !== "undefined") {
  queryClient = new QueryClient();
} else {
  queryClient = {} as QueryClient;
}

export default function App({ Component, pageProps }: AppProps) {
  return (
    <ClientOnlyQueryClientProvider client={queryClient}>
      <Component {...pageProps} />
    </ClientOnlyQueryClientProvider>
  );
}
