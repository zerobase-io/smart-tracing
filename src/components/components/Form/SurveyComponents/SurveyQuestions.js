import React, { useState } from 'react';
import styled from 'styled-components';
import { colors, fontSizes } from '../../../../styles';

const Wrapper = styled.div`
  width: 100%;
  background-color: ${colors.lighterGreen};
  border: 1px solid ${colors.green};
  border-radius: 2px;
  font-size: ${fontSizes.primary};
  padding: 10px;
  margin-bottom: 5px;
`;
const OptionLabel = styled.label`
  & > input {
    margin-right: 10px;
  }
`;
const Input = styled.input`
  width: 100%;
  border: 1px solid #79b977;
  padding: 5px;
  outline: none;
`;

/**
 * A radio button question component
 * @param options
 * @param question
 * @param onChange
 * @returns {*}
 * @constructor
 */
export const RadioButtonQuestion = ({ value, options, question, onChange }) => {
  return (
    <Wrapper>
      <p>{question}</p>
      <div>
        {options &&
          options.map((o) => {
            return (
              <div key={o.value}>
                <OptionLabel>
                  <input
                    type="radio"
                    value={o.value}
                    checked={value === o.value}
                    name={question}
                    onChange={(e) => {
                      onChange(e.target.value);
                    }}
                  />
                  {o.label}
                </OptionLabel>
              </div>
            );
          })}
      </div>
    </Wrapper>
  );
};

/**
 * A checkbox question component
 * @param options
 * @param question
 * @param onChange
 * @returns {*}
 * @constructor
 */
export const CheckboxQuestion = ({ options, question, onChange }) => {
  const [values, setValues] = useState(
    options.reduce(
      (options, option) => ({
        ...options,
        [option.value]: false,
      }),
      {},
    ),
  );
  const updateValue = (value) => {
    let updatedValues = { ...values };
    updatedValues[value] = !updatedValues[value];
    setValues(updatedValues);
    return updatedValues;
  };
  return (
    <Wrapper>
      <p>{question}</p>
      <div>
        {options &&
          options.map((o) => {
            return (
              <div key={o.value}>
                <OptionLabel>
                  <input
                    type="checkbox"
                    name={question}
                    checked={values[o.value]}
                    onChange={() => {
                      const updatedValues = updateValue(o.value);
                      onChange(updatedValues);
                    }}
                  />
                  {o.label}
                </OptionLabel>
              </div>
            );
          })}
      </div>
    </Wrapper>
  );
};

/**
 * A textfield question component
 * @param onChange
 * @param options
 * @param question
 * @returns {*}
 * @constructor
 */
export const TextFieldQuestion = ({ question, placeholder, onChange }) => {
  return (
    <Wrapper>
      <p>{question}</p>
      <Input
        placeholder={placeholder}
        onChange={(e) => {
          onChange(e.target.value);
        }}
      />
    </Wrapper>
  );
};
