import CustomError, { ErrorType } from "../utils/CustomError";

export default class BusinessError extends CustomError {
  static type = "BusinessError" as ErrorType
}