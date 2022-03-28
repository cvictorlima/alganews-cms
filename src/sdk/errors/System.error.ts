import CustomError, { ErrorType } from "../utils/CustomError";

export default class SystemError extends CustomError {
  static type = "SystemError" as ErrorType
}