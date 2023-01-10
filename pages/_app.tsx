import type { AppProps } from "next/app";
import { Global } from "@emotion/react";
import { globalStyles } from "../styles/globalStyles";
import { RecoilRoot } from "recoil";

declare const window: typeof globalThis & {
  ethereum: any;
};

export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <RecoilRoot>
        <Global styles={globalStyles} />
        <Component {...pageProps} />
      </RecoilRoot>
    </>
  );
}
