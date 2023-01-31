import { loadDetails } from "redux/features/company/companySlice";
import { useAppDispatch, useAppSelector } from "redux/hooks";
import styled from "styled-components";
import { SearchHistoryElement } from "types";
import { convertTimestampToLocaleString } from "../utils";

export const HistoryCard: React.FC = () => {
  const history = useAppSelector((state) => state.company.history);
  const dispatch = useAppDispatch();

  const activateElementFromHistory = (historyElement: SearchHistoryElement) => {
    dispatch(loadDetails(historyElement.data));
  };

  return (
    <Container>
      <HistoryTitle>Historia Wyszukiwania</HistoryTitle>
      <HistoryList>
        {history.map((historyElement) => (
          <HistoryListItem
            key={historyElement.timestamp}
            onClick={() => activateElementFromHistory(historyElement)}
          >
            {convertTimestampToLocaleString(historyElement.timestamp)}:{" "}
            <strong>{historyElement.data.vat_number}</strong>
          </HistoryListItem>
        ))}
      </HistoryList>
    </Container>
  );
};

const Container = styled.div`
  max-width: 30rem;
  background-color: rgb(255, 255, 255);
  width: 100%;
  padding: 2rem;
  margin: 1rem 0;
`;

const HistoryTitle = styled.h3`
  font-size: 1.6rem;
  text-align: center;
`;

const HistoryList = styled.ul`
  padding: 0;
  list-style: none;
`;

const HistoryListItem = styled.li`
  text-align: center;
  cursor: pointer;

  &:hover {
    color: rgb(136, 152, 179);
  }
`;
