import RecoveryResult from "../../../src/components/units/recoveryResult/index";

interface IRecoveryResult {
  isEmail: boolean;
}

export default function RecoveryResultPage(
  props: IRecoveryResult
): JSX.Element {
  return <RecoveryResult isEmail={false} />;
}
