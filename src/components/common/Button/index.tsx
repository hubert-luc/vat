import styled from "styled-components";

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {}

export const Button: React.FC<ButtonProps> = (props) => {
  return <StyledButton {...props} />;
};

const StyledButton = styled.button`
  border: 0px;
  border-radius: 0.8rem;
  font-size: 1.4rem;
  cursor: pointer;
  outline: none;
  height: 3rem;
  padding: 0.7rem 1.6rem;
  color: rgb(255, 255, 255);
  background-color: rgb(0, 94, 255);
`;
