import { LoginCheck } from "../../../src/commons/libraries/loginCheck";
import WorkAgreement from "../../../src/components/units/workAgreement";

function WorkAgreementPage(): JSX.Element {
  return (
    <>
      <WorkAgreement />
    </>
  );
}

export default LoginCheck(WorkAgreementPage)
