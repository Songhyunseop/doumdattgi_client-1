import { LoginCheck } from "../../../src/commons/libraries/loginCheck";
import Profile from "../../../src/components/units/myPage/profile";

function ProfilePage(): JSX.Element {
  return <Profile />;
}

export default LoginCheck(ProfilePage);
