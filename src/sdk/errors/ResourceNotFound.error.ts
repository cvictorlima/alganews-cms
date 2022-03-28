import CustomError, { ErrorType } from "../utils/CustomError";

export default class ResourceNotFoundError extends CustomError {
  static type = "ResourceNotFoundError" as ErrorType
}