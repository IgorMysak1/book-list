import React from "react";
import styled from "styled-components";

interface InputProps {
  value: string | number;
  setValue: (value: string) => void;
  placeholder: string;
  className?: string;
}

export const Input: React.FC<InputProps> = ({
  value,
  setValue,
  placeholder,
  className,
}) => {
  const changeValue = (event: React.ChangeEvent<HTMLInputElement>) =>
    setValue(event.target.value);
  return (
    <InputStyled
      type="text"
      value={value}
      onChange={changeValue}
      placeholder={placeholder}
      className={className}
    />
  );
};

const InputStyled = styled.input`
  height: 100%;
  width: 100%;
  border: 5px solid ${({ theme }) => theme.secondary};
  background: ${({ theme }) => theme.main};
  color: ${({ theme }) => theme.text};
  outline: none;
  padding: 3px 5px;
  font-size: 16px;
  ::placeholder {
    font-size: 16px;
  }
`;
