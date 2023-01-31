import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import {
  CompanyDetails,
  SearchHistoryElement,
  VatNumberValidationData,
} from "types";
import { Nullable } from "utils/typescript-utils";
import { getSearchHistory } from "views/VatVerifyView/utils";

type CompanyState = {
  details: Nullable<CompanyDetails>;
  history: SearchHistoryElement[];
};

const history = getSearchHistory();

const initialState: CompanyState = {
  details: null,
  history,
};

export const companySlice = createSlice({
  name: "company",
  initialState,
  reducers: {
    loadDetails: (
      state,
      action: PayloadAction<VatNumberValidationData | null>
    ) => {
      if (!action.payload) {
        state.details = null;
      } else {
        state.details = {
          companyAddress: action.payload.company_address,
          companyName: action.payload.company_name,
          vatNumber: action.payload.vat_number,
          isVatPayer: action.payload.valid,
        };
      }
    },
    setHistory: (state, action: PayloadAction<SearchHistoryElement[]>) => {
      state.history = action.payload;
    },
  },
});

export const { loadDetails, setHistory } = companySlice.actions;

export default companySlice.reducer;
