import { LoginCheck } from "../../../src/commons/libraries/loginCheck";
import ProgressSeller from "../../../src/components/units/myPage/progressSeller";

function ProgressPage(): JSX.Element {
  return <ProgressSeller />;
}

export default LoginCheck(ProgressPage);
