import { SurveyLayout } from './SurveyLayout';
import React, { useState } from 'react';
import styled from 'styled-components';
import { colors, fontSizes } from '../../../../styles';

const SelectWrapper = styled.div`
  width: 100%;
  background-color: ${colors.lighterGreen};
  border: 1px solid ${colors.green};
  border-radius: 2px;
  font-size: ${fontSizes.primary};
  padding: 10px;
`;
const Select = styled.div``;
const SelectQuestion = styled.p``;
const OptionLabel = styled.label`
  & > input {
    margin-right: 10px;
  }
`;

/**
 * Intended to be top level components used by survey steps
 * @param onUpdate
 * @param options
 * @param question
 * @param nextStep
 * @param isSkippable
 * @returns {*}
 * @constructor
 */
export const RadioButtonQuestion = ({
  onUpdate,
  options,
  question,
  nextStep,
  isSkippable = false,
}) => {
  const [nextBtnEnabled, setNextBtnValue] = useState(false);
  return (
    <div>
      <SurveyLayout
        nextStep={nextStep}
        isSkippable={isSkippable}
        nextBtnEnabled={nextBtnEnabled}
      >
        <input type="text" />
        <SelectWrapper>
          <SelectQuestion>{question}</SelectQuestion>
          <Select>
            {options &&
              options.map((o) => {
                return (
                  <div key={o.value}>
                    <OptionLabel>
                      <input
                        type="radio"
                        value={o.value}
                        name={question}
                        onChange={() => setNextBtnValue(true)}
                      />
                      {o.label}
                    </OptionLabel>
                  </div>
                );
              })}
          </Select>
        </SelectWrapper>
      </SurveyLayout>
    </div>
  );
};

export const CheckboxQuestion = ({
  onUpdate,
  options,
  question,
  nextStep,
  isSkippable = false,
}) => {
  const [nextBtnEnabled, setNextBtnValue] = useState(false);
  return (
    <div>
      <SurveyLayout
        nextStep={nextStep}
        isSkippable={isSkippable}
        nextBtnEnabled={nextBtnEnabled}
      >
        <SelectWrapper>
          <SelectQuestion>{question}</SelectQuestion>
          <Select>
            {options &&
              options.map((o) => {
                return (
                  <div key={o.value}>
                    <OptionLabel>
                      <input
                        type="checkbox"
                        value={o.value}
                        name={question}
                        onChange={() => setNextBtnValue(true)}
                      />
                      {o.label}
                    </OptionLabel>
                  </div>
                );
              })}
          </Select>
        </SelectWrapper>
      </SurveyLayout>
    </div>
  );
};
