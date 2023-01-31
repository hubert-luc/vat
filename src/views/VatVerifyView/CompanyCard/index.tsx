import { ErrorMessage } from "components/common/ErrorMessage";
import { FC } from "react";
import styled from "styled-components";
import { CompanyDetails } from "types";

interface CompanyDetailsProps extends CompanyDetails {}

export const CompanyCard: FC<CompanyDetailsProps> = (props) => {
  const { companyName, companyAddress, vatNumber, isVatPayer } = props;

  if (!isVatPayer) {
    return <ErrorMessage text="Przedsiębiorca nie jest płatnikiem VAT" />;
  }

  return (
    <Container>
      <Header>{companyName}</Header>
      <InfoParagraph>
        NIP: <strong>{vatNumber}</strong>
      </InfoParagraph>
      <InfoParagraph>
        adres: <strong>{companyAddress}</strong>
      </InfoParagraph>
    </Container>
  );
};

const Container = styled.div`
  display: flex;
  width: 100%;
  flex-direction: column;
  font-family: Quicksand-Medium, sans-serif;
  color: rgb(0, 0, 0);
  background-color: rgb(255, 255, 255);
  border-radius: 0.8rem;
  padding: 2rem;
  margin: 1rem 0;

  @media (min-width: 768px) {
    width: 30rem;
    min-width: 30rem;
    height: 30rem;
  }
`;

const Header = styled.h3`
  font-size: 1.6rem;

  @media (min-width: 768px) {
    font-size: 2rem;
  }
`;

const InfoParagraph = styled.p`
  font-size: 1.2rem;
  font-weight: normal;

  @media (min-width: 768px) {
    font-size: 1.4rem;
  }
`;
