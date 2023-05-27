import { LoginCheck } from "../../../src/commons/libraries/loginCheck";
import Settings from "../../../src/components/units/myPage/setting";

function SettingsPage() {
  return <Settings />;
}

export default LoginCheck(SettingsPage);
