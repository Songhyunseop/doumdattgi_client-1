import { globalStyle } from "../src/commons/styles/globalStyle";
import { Global } from "@emotion/react";
import type { AppProps } from "next/app";
import Layout from "../src/components/commons/layout";
import ApolloSetting from "../src/components/commons/apollo";
import { RecoilRoot } from "recoil";
import { useRouter } from "next/router";
import { useEffect } from "react";

export default function App({ Component, pageProps }: AppProps): JSX.Element {
  const router = useRouter();

  useEffect(() => storePathValues, [router.asPath]);

  function storePathValues() {
    const storage = globalThis?.sessionStorage;
    if (!storage) return;
    // .이전 페이지 세션 스토리지에 저장
    const prevPath: string | null = storage.getItem("currentPath");
    storage.setItem("prevPath", prevPath ?? "");

    //  .현재 페이지 세션 스토리지에 저장
    storage.setItem("currentPath", globalThis.location.pathname);
  }

  return (
    <RecoilRoot>
      <ApolloSetting>
        <>
          <Global styles={globalStyle} />
          <Layout>
            <Component {...pageProps} />
          </Layout>
        </>
      </ApolloSetting>
    </RecoilRoot>
  );
}
