import { LoginCheck } from "../../../src/commons/libraries/loginCheck";
import CreateProduct from "../../../src/components/units/create/index2";

function BoardWrite() {
  return <CreateProduct isEdit={true}/>;
}

export default LoginCheck(BoardWrite)
