import "../styles/globals.css";
import type { AppProps } from "next/app";
import { Josefin_Sans } from "next/font/google";

const josefinSans = Josefin_Sans({ subsets: ["latin"] });

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <main className={josefinSans.className}>
      <Component {...pageProps} />
    </main>
  );
}

export default MyApp;
