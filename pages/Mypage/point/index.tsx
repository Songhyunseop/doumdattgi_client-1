import { LoginCheck } from "../../../src/commons/libraries/loginCheck";
import PaymentPresenter from "../../../src/components/units/myPage/point/index";

function PaymentPage(): JSX.Element {
  return <PaymentPresenter />;
}

export default LoginCheck(PaymentPage);
