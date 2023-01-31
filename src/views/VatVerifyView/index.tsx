import styled from "styled-components";
import { useAppSelector } from "redux/hooks";
import { SearchCompanyBox } from "views/VatVerifyView/SearchCompanyBox";
import { CompanyCard } from "./CompanyCard";
import { HistoryCard } from "./HistoryCard";
import { useState } from "react";
import { Nullable } from "utils/typescript-utils";
import { ErrorMessage } from "components/common/ErrorMessage";

const VatVerifyView: React.FC = () => {
  const [error, setError] = useState<Nullable<string>>(null);

  const companyDetails = useAppSelector((state) => state.company.details);

  return (
    <Container>
      <SearchCompanyBox setError={setError} />
      {error && <ErrorMessage text={error} />}
      <HistoryCard />
      {companyDetails && <CompanyCard {...companyDetails} />}
    </Container>
  );
};

const Container = styled.div`
  background-color: rgb(243, 246, 249);
  min-height: 100vh;
  padding: 0.5rem;
  display: flex;
  flex-direction: column;
  align-items: center;

  @media (min-width: 768px) {
    padding: 2rem;
  }
`;

export default VatVerifyView;
