import { setHistory } from "redux/features/company/companySlice";
import { SearchHistoryElement, VatNumberValidationData } from "types";

export const getSearchHistory = (): SearchHistoryElement[] => {
  const searchHistoryStringified = localStorage.getItem("searchHistory");

  const searchHistory = searchHistoryStringified
    ? JSON.parse(searchHistoryStringified)
    : [];

  return searchHistory;
};

export const addSearchToHistory = (
  companyData: VatNumberValidationData,
  searchHistory: SearchHistoryElement[],
  dispatch: any
): void => {
  const newHistory = [...searchHistory];

  const timestamp = new Date().getTime();

  // celowo nie robię tutaj sprawdzenia czy taki element jest już w historii wyszukiwań, możliwe, że dane w API się zmienią, a użytkownik oglądając historie wyszukiwań chciałby zobaczyć dokładnie te dane które wtedy zostały mu zwrócone (w pracy poruszyłbym ten temat zanim podjął taką decyzję)
  newHistory.push({ timestamp, data: companyData });

  dispatch(setHistory(newHistory));
  localStorage.setItem("searchHistory", JSON.stringify(newHistory));
};

export const convertTimestampToLocaleString = (timestamp: number) =>
  new Date(timestamp).toLocaleString();
