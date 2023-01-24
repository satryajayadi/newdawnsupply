import "@/styles/globals.css";

import { Poppins } from "@next/font/google";
const poppins = Poppins({
  weight: "400",
  subsets: ["latin"],
  preload: true,
  fallback: ["hai"],
});
export default function App({ Component, pageProps }) {
  const Layout = Component.layout || (({ children }) => <>{children}</>);
  return (
    <main className={poppins.className}>
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </main>
  );
}
