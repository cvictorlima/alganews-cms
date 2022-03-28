import CustomError, { ErrorType } from "../utils/CustomError";

export default class IncomprehensibleMessageError extends CustomError {
  static type = "IncomprehensibleMessageError"  as ErrorType
}