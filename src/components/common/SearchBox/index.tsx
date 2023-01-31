import styled from "styled-components";
import { useState } from "react";

import { Button } from "components/common/Button";
import { Input } from "components/common/Input";

interface SearchBoxProps {
  onSubmit: (searchText: string) => void;
  submitBtnText?: string;
  inputplaceholder?: string;
}

export const SearchBox: React.FC<SearchBoxProps> = ({
  onSubmit,
  submitBtnText = "Szukaj",
  inputplaceholder,
}) => {
  const [inputValue, setInputValue] = useState("");

  const resetInput = () => setInputValue("");

  const submitForm = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    onSubmit(inputValue);
    resetInput();
  };

  return (
    <SearchForm onSubmit={submitForm}>
      <Input
        required
        type="number"
        placeholder={inputplaceholder}
        value={inputValue}
        onChange={(e) => setInputValue(e.target.value)}
      />
      <Button type="submit">{submitBtnText}</Button>
    </SearchForm>
  );
};

const SearchForm = styled.form`
  display: flex;
  flex-direction: column;
  gap: 1rem;

  justify-content: space-around;
  max-width: 32rem;

  @media (min-width: 768px) {
    flex-direction: row;
  }
`;
