export interface VatNumberValidationData {
  valid: boolean;
  database: "ok" | "failure";
  format_valid: boolean;
  query: string;
  country_code: string;
  vat_number: string;
  company_name: string;
  company_address: string;
}

export interface VatNumberValidationError {
  code: number;
  info: string;
  type: string;
}

export interface VatNumberValidationErrorData {
  error: VatNumberValidationError;
  success: false;
}

export type VatNumberValidationResponseData =
  | VatNumberValidationData
  | VatNumberValidationErrorData;

export interface CompanyDetails {
  vatNumber: string;
  companyName: string;
  companyAddress: string;
  isVatPayer: boolean;
}

export interface SearchHistoryElement {
  timestamp: number;
  data: VatNumberValidationData;
}
