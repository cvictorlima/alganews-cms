import { AlgaNews } from "../@Types";

export type ErrorData = AlgaNews.components ['schemas']['Problem']

export type ErrorType = 
'ForbiddenError' |
'BusinessError' |
'GenericError' |
'InvalidDataError' |
'InvalidParameterError' |
'ResourceNotFoundError' |
'SystemError'

class CustomError {
  static type: ErrorType;

  message?: string;
  data?: ErrorData

  constructor(data: ErrorData) {
    this.message = data.userMessage || data.detail
    this.data = data
  }
}

export default CustomError;