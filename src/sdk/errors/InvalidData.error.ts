import CustomError, { ErrorType } from "../utils/CustomError";

export default class InvalidDataError extends CustomError {
  static type = "InvalidDataError" as ErrorType
}