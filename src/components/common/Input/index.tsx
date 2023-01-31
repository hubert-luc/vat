import styled from "styled-components";

interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {}

export const Input: React.FC<InputProps> = (props) => {
  return (
    <InputWrapper>
      <StyledInput {...props} />
    </InputWrapper>
  );
};

const InputWrapper = styled.div`
  overflow: hidden;
  display: flex;
  border-radius: 0.8rem;
  border: 0.1rem solid rgb(136, 152, 179);
`;

const StyledInput = styled.input`
  border: none;
  font-size: 1.5rem;
  color: rgb(136, 152, 179);
  padding: 0.5rem 0.9rem;
  outline: none;
  flex: 1;

  &::-webkit-outer-spin-button,
  &::-webkit-inner-spin-button {
    -webkit-appearance: none;
    margin: 0;
  }
`;
