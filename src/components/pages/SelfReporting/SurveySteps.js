import { useHistory } from 'react-router-dom';
import Button from '../../components/Button';
import { SurveyLayout } from '../../components/Form/SurveyComponents/SurveyLayout';
import React from 'react';
import styled from 'styled-components';
import { colors, fontSizes } from '../../../styles';
import {
  CheckboxQuestion,
  RadioButtonQuestion,
} from '../../components/Form/SurveyComponents/SurveyQuestions';

const SurveyQuestion = styled.div`
  width: 100%;
  background-color: ${colors.lighterGreen};
  border: 1px solid ${colors.green};
  border-radius: 2px;
  font-size: ${fontSizes.large};
  padding: 5px 15px;
  text-align: center;
  font-weight: bold;
  min-height: 100px;
  display: flex;
  align-items: center;
  justify-content: center;
`;

/**
 * Steps used in the Self Reporting Pages. Contains survey components
 * that render the question and options, as well as the nextStep link.
 * Todo: inject onUpdate function that updates the form state
 * @param onUpdate: function
 * @param nextStep: string
 * @returns {Styled Component}
 * @constructor
 */

export const PlanningStep1 = ({ onUpdate, nextStep }) => {
  const history = useHistory();
  return (
    <SurveyLayout>
      <SurveyQuestion>
        If you'd like, you can let us know when you will be tested, and we'll
        set a reminder notification, so you can update us on the result
      </SurveyQuestion>
      <Button
        type="infoSolid"
        onClick={() => {
          console.log('Openning calendar...');
          console.log('Updating form with the picked date...');
          // onUpdate(...)
          console.log('Submitting the form...');
          // onSubmit(...)
          history.replace('/self-reporting/thank-you');
        }}
      >
        I'm getting tested on
      </Button>
      <Button>I prefer not to answer</Button>
    </SurveyLayout>
  );
};

export const WasTestedStep1 = ({ onUpdate, nextStep }) => {
  const history = useHistory();
  return (
    <SurveyLayout>
      <SurveyQuestion>When have you been tested for COVID-19?</SurveyQuestion>
      <Button
        type="defaultSolid"
        onClick={() => {
          console.log('Updating the form...');
          // onUpdate(...)
          history.push(nextStep);
        }}
      >
        Whithin the past few days
      </Button>
      <Button
        type="infoSolid"
        onClick={() => {
          console.log('Updating the form...');
          // onUpdate(...)
          history.push(nextStep);
        }}
      >
        In the past two weeks
      </Button>
      <Button
        type="defaultSolid"
        onClick={() => {
          console.log('Updating the form...');
          // onUpdate(...)
          history.push(nextStep);
        }}
      >
        In the past month
      </Button>
      <Button>I prefer not to answer</Button>
    </SurveyLayout>
  );
};

export const WasTestedStep2 = ({ onUpdate, nextStep }) => {
  const history = useHistory();
  return (
    <SurveyLayout>
      <SurveyQuestion>What was the result of your test?</SurveyQuestion>
      <Button
        type="defaultSolid"
        onClick={() => {
          console.log('Updating the form...');
          // onUpdate(...)
          console.log('Submitting the form...');
          // onSubmit(...)
          history.replace('/self-reporting/thank-you');
        }}
      >
        I was tested negative
      </Button>
      <Button
        type="infoSolid"
        onClick={() => {
          console.log('Updating the form...');
          // onUpdate(...)
          console.log('Submitting the form...');
          // onSubmit(...)
          history.replace('/self-reporting/thank-you');
        }}
      >
        I was tested positive
      </Button>
      <Button
        type="defaultSolid"
        onClick={() => {
          console.log('Updating the form...');
          // onUpdate(...)
          console.log('Submitting the form...');
          // onSubmit(...)
          history.replace('/self-reporting/thank-you');
        }}
      >
        My test is not back yet
      </Button>
      <Button>I prefer not to answer</Button>
    </SurveyLayout>
  );
};

export const NotSureStep1 = ({ onUpdate, nextStep }) => {
  const question = 'How old are you?';
  const options = [
    {
      value: 'under-18',
      label: 'I am under 18',
    },
    {
      value: 'between-18-and-64',
      label: 'I am between 18 and 64',
    },
    {
      value: 'no-answer',
      label: 'I prefer not the answer',
    },
  ];
  return (
    <RadioButtonQuestion
      question={question}
      options={options}
      nextStep={nextStep}
    />
  );
};

export const NotSureStep2 = ({ onUpdate, nextStep }) => {
  const question = 'Do you have any of these symptoms?';
  const options = [
    {
      value: 'fever-chills-sweating',
      label: 'Fevers, chills, sweating',
    },
    {
      value: 'difficulty-breathing',
      label: 'Difficulty breathing',
    },
    {
      value: 'sore-throat',
      label: 'Sore throat',
    },
    {
      value: 'aching-throughout-body',
      label: 'Aching throughout the body',
    },
    {
      value: 'vomiting-diarrhea',
      label: 'Vomiting or diarrhea',
    },
    {
      value: 'migraines',
      label: 'Migraines',
    },
    {
      value: 'loss-taste-smell',
      label: 'Loss of taste and smell / Changes in how food tastes',
    },
    {
      value: 'None of the above',
      label: 'None of the above',
    },
  ];
  return (
    <CheckboxQuestion
      question={question}
      options={options}
      nextStep={nextStep}
    />
  );
};

export const NotSureStep3 = ({ onUpdate, nextStep }) => {
  const question = 'On a daily basis with how many people are in your home?';
  const options = [
    {
      value: '1',
      label: '1',
    },
    {
      value: '2-4',
      label: '2-4',
    },
    {
      value: '5-10',
      label: '5-10',
    },
    {
      value: '10+',
      label: '10+',
    },
  ];
  return (
    <RadioButtonQuestion
      question={question}
      options={options}
      nextStep={nextStep}
    />
  );
};

export const NotSureStep4 = ({ onUpdate, nextStep }) => {
  const question =
    'On a daily basis, with how many people are you in contact with outside your home?';
  const options = [
    {
      value: 'contact-none',
      label: 'None.',
    },
    {
      value: 'contact-1',
      label: '1',
    },
    {
      value: 'contact-2-4',
      label: '2-4',
    },
    {
      value: 'contact-5-10',
      label: '5-10',
    },
    {
      value: 'contact-more-than-10',
      label: '10+',
    },
  ];
  return (
    <RadioButtonQuestion
      question={question}
      options={options}
      nextStep={nextStep}
      isSkippable={true}
    />
  );
};

export const NotSureStep5 = ({ onUpdate, nextStep }) => {
  const question =
    'Do you have reason to believe you are likely to have been exposed to COVID-19 recently?';
  const options = [
    {
      value: 'exposed-yes',
      label: 'Yes',
    },
    {
      value: 'exposed-no',
      label: 'No',
    },
  ];
  return (
    <RadioButtonQuestion
      question={question}
      options={options}
      nextStep={'/self-reporting/thank-you'}
      isSkippable={false}
    />
  );
};
