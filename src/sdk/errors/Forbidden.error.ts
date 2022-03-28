import CustomError, { ErrorType } from "../utils/CustomError";

export default class ForbiddenError extends CustomError {
  static type = "ForbiddenError" as ErrorType
}