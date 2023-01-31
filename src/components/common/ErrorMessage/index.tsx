import styled from "styled-components";

interface ErrorMessageProps {
  text: string;
}

export const ErrorMessage: React.FC<ErrorMessageProps> = ({ text }) => (
  <Container>{text}</Container>
);

const Container = styled.div`
  color: #d8000c;
  width: 100%;
  max-width: 30rem;
  background-color: #ffbaba;
  background-image: url(https://i.imgur.com/GnyDvKN.png);
  border: 1px solid;
  margin: 10px 0px;
  padding: 15px 10px 15px 50px;
  background-repeat: no-repeat;
  background-position: 10px center;
`;
