import React, { Dispatch, SetStateAction } from "react";
import styled from "styled-components";

interface InputProps {
  value: string;
  setValue: Dispatch<SetStateAction<string>>;
  placeholder: string;
}

export const Input: React.FC<InputProps> = ({
  value,
  setValue,
  placeholder,
}) => {
  const changeValue = (event: React.ChangeEvent<HTMLInputElement>) =>
    setValue(event.target.value);
  return (
    <InputStyled
      type="text"
      value={value}
      onChange={changeValue}
      placeholder={placeholder}
    />
  );
};

const InputStyled = styled.input`
  height: 100%;
  width: 100%;
  border: 5px solid ${({ theme }) => theme.secondary};
  background: ${({ theme }) => theme.main};
  outline: none;
  padding: 3px 5px;
  font-size: 16px;
  ::placeholder {
    font-size: 16px;
  }
`;
