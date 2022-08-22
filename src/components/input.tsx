import React from "react";
import styled from "styled-components";
import { IColorsTheme } from "../types";
import { Text } from "./text";

interface InputProps {
  value: string | number;
  setValue: (value: string) => void;
  placeholder: string;
  isValid?: boolean;
  className?: string;
  hint?: string;
}

export const Input: React.FC<InputProps> = ({
  value,
  setValue,
  placeholder,
  className,
  isValid = true,
  hint,
}) => {
  const changeValue = (event: React.ChangeEvent<HTMLInputElement>) =>
    setValue(event.target.value);
  return (
    <div>
      <InputStyled
        type="text"
        value={value}
        onChange={changeValue}
        placeholder={placeholder}
        className={className}
        isValid={isValid}
      />
      {hint && <CustomText fz={"small"}>{hint}</CustomText>}
    </div>
  );
};

const InputStyled = styled.input`
  height: 100%;
  width: 100%;
  border: 5px solid
    ${({ theme, isValid }: { theme: IColorsTheme; isValid: boolean }) =>
      isValid ? theme.secondary : theme.error};
  background: ${({ theme }) => theme.main};
  color: ${({ theme }) => theme.text};
  outline: none;
  padding: 3px 5px;
  font-size: 16px;
  ::placeholder {
    font-size: 16px;
    text-transform: capitalize;
  }
`;
const CustomText = styled(Text)`
  margin: 2px 0 0 2px;
`;
