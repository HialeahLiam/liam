import "../styles/globals.css";
import type { AppProps } from "next/app";
import { Josefin_Sans, Montserrat } from "next/font/google";

const josefinSans = Josefin_Sans({ subsets: ["latin"] });
const montserrat = Montserrat({ subsets: ["latin"] });

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <main className={montserrat.className}>
      <Component {...pageProps} />
    </main>
  );
}

export default MyApp;
