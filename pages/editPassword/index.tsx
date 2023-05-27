import { LoginCheck } from "../../src/commons/libraries/loginCheck";
import RecoveryResult from "../../src/components/units/recoveryResult";

function EditPasswordPage() {
  return <RecoveryResult isEmail={false} isEditPassword={true} />;
}

export default LoginCheck(EditPasswordPage);
