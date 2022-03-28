import CustomError, { ErrorType } from "../utils/CustomError";

export default class InvalidParameterError extends CustomError {
  static type = "InvalidParameterError" as ErrorType
}