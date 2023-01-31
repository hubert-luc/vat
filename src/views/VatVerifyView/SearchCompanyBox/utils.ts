import {
  VatNumberValidationData,
  VatNumberValidationErrorData,
  VatNumberValidationResponseData,
} from "types";

export const isApiError = (
  responseData: VatNumberValidationResponseData
): responseData is VatNumberValidationErrorData => {
  return (responseData as VatNumberValidationErrorData).error !== undefined;
};

const validateSuccessResponse = (data: VatNumberValidationData) => {
  if (!data.format_valid) {
    throw Error("Niepoprawny NIP");
  }
};

export const validateVatResponse = (data: VatNumberValidationResponseData) => {
  if (isApiError(data)) {
    throw Error(data.error.info);
  }

  validateSuccessResponse(data);
};
