import axios from "axios";
import { SearchBox } from "components/common/SearchBox";
import { useAppDispatch, useAppSelector } from "redux/hooks";
import { loadDetails } from "redux/features/company/companySlice";
import { VatNumberValidationResponseData } from "types";
import { addSearchToHistory } from "../utils";
import { isApiError, validateVatResponse } from "./utils";

interface SearchCompanyBoxProps {
  setError: (errorMessage: string | null) => void;
}

export const SearchCompanyBox: React.FC<SearchCompanyBoxProps> = ({
  setError,
}) => {
  const dispatch = useAppDispatch();
  const searchHistory = useAppSelector((state) => state.company.history);

  const searchCompany = async (searchTerm: string) => {
    setError(null);

    try {
      const response = await axios.get<VatNumberValidationResponseData>(
        `http://apilayer.net/api/validate?access_key=9176e8115611d974b335ceb8b603743f&vat_number=PL${searchTerm}`
      );

      const { data } = response;

      validateVatResponse(data);

      if (!isApiError(data)) {
        dispatch(loadDetails(data));
        addSearchToHistory(data, searchHistory, dispatch);
      }
    } catch (e: unknown) {
      if (typeof e === "string") {
        setError(e);
      } else if (e instanceof Error) {
        setError(e.message);
      }
      loadDetails(null);
    }
  };

  return <SearchBox inputplaceholder="Wpisz NIP" onSubmit={searchCompany} />;
};
