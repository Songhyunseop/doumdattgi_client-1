import { LoginCheck } from "../../../src/commons/libraries/loginCheck";
import Request from "../../../src/components/units/request";

function RequestPage(): JSX.Element {
  return <Request />;
}

export default LoginCheck(RequestPage)