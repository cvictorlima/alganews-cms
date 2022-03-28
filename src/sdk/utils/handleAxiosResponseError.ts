import { AxiosError } from "axios";
import {
  BusinessError,
  ERRORS,
  ForbiddenError,
  GenericError,
  InvalidDataError,
  InvalidParameterError,
  ResourceNotFoundError,
  SystemError,
} from "../errors";
import IncomprehensibleMessageError from "../errors/IncomprehensibleMessageError";
import { ErrorData } from "./CustomError";

export default function handleAxiosResponseError(error: AxiosError<ErrorData>) {
  const { response } = error;

  if (response?.data.type) {
    const { type } = response.data;
    const { data } = response;

    if (type === ERRORS.FORBIDDEN) throw new ForbiddenError(data);
    if (type === ERRORS.BUSINESS_ERROR) throw new BusinessError(data);
    if (type === ERRORS.INVALID_DATA) throw new InvalidDataError(data);
    if (type === ERRORS.SYSTEM_ERROR) throw new SystemError(data);
    if (type === ERRORS.INCOMPREHENSIBLE_MESSAGE)
      if (type === ERRORS.INVALID_PARAMETER)
        throw new InvalidParameterError(data);
    if (type === ERRORS.RESOURCE_NOT_FOUND)
      throw new ResourceNotFoundError(data);
    throw new IncomprehensibleMessageError(data);
  }

  throw new GenericError({
    detail: response?.data.detail || error.message || "Erro desconhecido",
    status: response?.status || 500,
    userMessage:
      response?.data.userMessage ||
      response?.data.detail ||
      "Erro desconhecido",
    timestamp: response?.data.timestamp || "",
    title: response?.data.title || "",
    type: "Generic Error",
  });
}
