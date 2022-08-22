import React, { useState } from "react";
import styled from "styled-components";
import { Input, Title, Text, Button } from "../components";
import { IBook, IModifyBook, IValidFieldsModifyingBook } from "../types";
import { deviceBreakpoints } from "../styles";

interface FormProps {
  fields: IValidFieldsModifyingBook[];
  initialState: IModifyBook;
  submitHandle: (formState: IBook) => void;
  getFormState?: (entity: IBook) => void;
  hideInputs: (keyof IBook)[];
}

export const Form: React.FC<FormProps> = ({
  fields,
  initialState,
  submitHandle,
  getFormState,
  hideInputs,
}) => {
  const [formState, setFormState] =
    useState<IValidFieldsModifyingBook[]>(fields);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const showValue = (fieldName: keyof IBook, value: string) => {
    if (initialState.type === "edit") return value;
    const initialValue = initialState.state[fieldName];
    return value === initialValue ? "" : value;
  };

  const convertInStateBook = (state: IValidFieldsModifyingBook[]) =>
    state.reduce(
      (acc, { field, value }) => ({ ...acc, [field]: value }),
      {} as IBook
    );

  const updateValueField = (field: keyof IBook, value: string) => {
    const newValue = formState.map((formFields) => ({
      ...formFields,
      value: formFields.field === field ? value : formFields.value,
      valid:
        isSubmitted && formFields.field === field
          ? !!value.match(formFields.regexp)
          : formFields.valid,
    }));
    getFormState?.(convertInStateBook(newValue));
    setFormState(newValue);
  };

  const showNecessaryInputs = (): IValidFieldsModifyingBook[] =>
    formState.filter(({ field }) => !hideInputs.includes(field));

  const isValidForm = () =>
    formState.length === formState.filter(({ valid }) => valid).length;

  const submit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const newValue = formState.map((field) => ({
      ...field,
      valid: !!field.value.toString().match(field.regexp),
    }));
    setFormState(newValue);
    setIsSubmitted(true);
    if (!isValidForm()) return;
    submitHandle(convertInStateBook(formState));
  };
  return (
    <form onSubmit={submit}>
      {showNecessaryInputs().map(({ field, value, hint, valid }) => (
        <BookValue key={field}>
          <CustomTitleValue fz={"small"}>{field}</CustomTitleValue>
          <Input
            value={showValue(field, value)}
            setValue={(value) => updateValueField(field, value)}
            placeholder={value}
            isValid={isSubmitted ? valid : true}
            hint={hint}
          />
        </BookValue>
      ))}
      <Button type={"submit"}>
        <Text fz={"large"}>{`${initialState.type} book`}</Text>
      </Button>
    </form>
  );
};

const BookValue = styled.div`
  :not(:last-child) {
    margin-bottom: 30px;
  }
  @media (${deviceBreakpoints.md}) {
    margin-bottom: 15px;
  }
`;
const CustomTitleValue = styled(Title)`
  margin-bottom: 10px;
`;
