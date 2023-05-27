import { useRouter } from "next/router";
import Header from "./header";
import Nav from "./nav";
import LayoutFooter from "./footer/index";
import Header2 from "./header2";

const HIDDEN_HEADER = [
  "/signup/",
  "/login/",
  "/accountRecovery/email/",
  "/accountRecovery/password/",
  "/recoveryResult/password/",
  "/recoveryResult/email/"
];
const HIDDEN_NAV = ["/mypage/profile/"];

export default function Layout(props: any) {
  const router = useRouter();
  const isActive = HIDDEN_HEADER.includes(router.asPath);
  const isNavActive = HIDDEN_NAV.includes(router.asPath);
  return (
    <>
      {isActive ? (
        <Header2 />
      ) : (
        <>
          {!isNavActive ? (
            <>
              <Header />
              <Nav />
            </>
          ) : (
            <Header />
          )}
        </>
      )}
      <div>{props.children}</div>
      {!isActive && <LayoutFooter />}
    </>
  );
}
