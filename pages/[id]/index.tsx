import { LoginCheck } from "../../src/commons/libraries/loginCheck";
import Detail from "../../src/components/units/detail";

function RoutingPage(): JSX.Element {
  return <Detail />;
}

export default LoginCheck(RoutingPage)
