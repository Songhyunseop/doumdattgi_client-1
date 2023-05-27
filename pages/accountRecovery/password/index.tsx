import AccountRecovery from "../../../src/components/units/accountRecovery/index";

interface IAccountRecoveryProps {
  isEmail: boolean;
}

export default function AccountRecoveryPage(
  props: IAccountRecoveryProps
): JSX.Element {
  return <AccountRecovery isEmail={false} />;
}
