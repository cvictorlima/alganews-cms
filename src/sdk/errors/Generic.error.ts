import CustomError, { ErrorType } from "../utils/CustomError";

export default class GenericError extends CustomError {
  static type = "GenericError"  as ErrorType
}