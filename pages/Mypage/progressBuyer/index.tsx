import { LoginCheck } from "../../../src/commons/libraries/loginCheck";
import ProgressBuyer from "../../../src/components/units/myPage/progressBuyer";

function ProgressPage(): JSX.Element {
  return <ProgressBuyer />;
}

export default LoginCheck(ProgressPage);
