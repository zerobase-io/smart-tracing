import React, { useState } from 'react';
import styled from 'styled-components';
import { useHistory } from 'react-router-dom';
import { colors, fontSizes } from '../../../styles';
import Button from '../../components/Button';
import {
  SurveyLayout,
  SurveyNavigation,
} from '../../components/Form/SurveyComponents/SurveyLayout';
import {
  CheckboxQuestion,
  RadioButtonQuestion,
  TextFieldQuestion,
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
          console.log('Submitting the form...');
          // onUpdate(..., true)
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
        type="infoSolid"
        onClick={() => {
          onUpdate('testedOn', 'whiting-past-two-days');
          history.push(nextStep);
        }}
      >
        Whithin the past few days
      </Button>
      <Button
        type="infoSolid"
        onClick={() => {
          onUpdate('testedOn', 'in-the-past-two-weeks');
          history.push(nextStep);
        }}
      >
        In the past two weeks
      </Button>
      <Button
        type="infoSolid"
        onClick={() => {
          onUpdate('testedOn', 'in-the-past-month');
          history.push(nextStep);
        }}
      >
        In the past month
      </Button>
      <Button
        onClick={() => {
          onUpdate('testedOn', 'n/a');
          history.push(nextStep);
        }}
      >
        I prefer not to answer
      </Button>
    </SurveyLayout>
  );
};

export const WasTestedStep2 = ({ onUpdate }) => {
  return (
    <SurveyLayout>
      <SurveyQuestion>What was the result of your test?</SurveyQuestion>
      <Button
        type="infoSolid"
        onClick={() => {
          onUpdate('testResult', 'negative', true);
        }}
      >
        I was tested negative
      </Button>
      <Button
        type="infoSolid"
        onClick={() => {
          onUpdate('testResult', 'positive', true);
        }}
      >
        I was tested positive
      </Button>
      <Button
        type="infoSolid"
        onClick={() => {
          onUpdate('testResult', 'still-waiting', true);
        }}
      >
        My test is not back yet
      </Button>
      <Button
        onClick={() => {
          onUpdate('testResult', 'n/a', true);
        }}
      >
        I prefer not to answer
      </Button>
    </SurveyLayout>
  );
};

export const NotSureStep1 = ({ onUpdate, nextStep }) => {
  const [age, setAge] = useState(false);
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
    <SurveyLayout>
      <RadioButtonQuestion
        question={question}
        options={options}
        value={age}
        onChange={(value) => {
          setAge(value);
        }}
      />
      <SurveyNavigation
        nextStep={nextStep}
        nextBtnEnabled={true}
        onNextBtnClick={() => {
          onUpdate('age', age);
        }}
      />
    </SurveyLayout>
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
      value: 'none-of-the-above',
      label: 'None of the above',
    },
  ];
  const [symptoms, setSymptoms] = useState(
    options.reduce(
      (options, option) => ({
        ...options,
        [option.value]: false,
      }),
      {},
    ),
  );

  return (
    <SurveyLayout>
      <CheckboxQuestion
        question={question}
        options={options}
        onChange={(values) => {
          setSymptoms(values);
        }}
      />
      <SurveyNavigation
        nextStep={nextStep}
        nextBtnEnabled={true}
        onNextBtnClick={() => {
          onUpdate('symptoms', symptoms);
        }}
      />
    </SurveyLayout>
  );
};

export const NotSureStep3 = ({ onUpdate, nextStep }) => {
  const [dailyPeopleAtHome, setDailyPeopleAtHome] = useState(false);
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
    <SurveyLayout>
      <RadioButtonQuestion
        question={question}
        options={options}
        value={dailyPeopleAtHome}
        onChange={(value) => {
          setDailyPeopleAtHome(value);
        }}
      />
      <SurveyNavigation
        nextStep={nextStep}
        nextBtnEnabled={true}
        onNextBtnClick={() => {
          onUpdate('dailyPeopleAtHome', dailyPeopleAtHome);
        }}
      />
    </SurveyLayout>
  );
};

export const NotSureStep4 = ({ onUpdate, nextStep }) => {
  const [dailyContacts, setDailyContacts] = useState(false);
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
    <SurveyLayout>
      <RadioButtonQuestion
        question={question}
        options={options}
        value={dailyContacts}
        onChange={(value) => {
          setDailyContacts(value);
        }}
      />
      <SurveyNavigation
        nextStep={nextStep}
        nextBtnEnabled={true}
        onNextBtnClick={() => {
          onUpdate('dailyContacts', dailyContacts);
        }}
      />
    </SurveyLayout>
  );
};

export const NotSureStep5 = ({ onUpdate, nextStep }) => {
  const [exposed, setExposed] = useState('false');
  const question =
    'Do you have reason to believe you are likely to have been exposed to COVID-19 recently?';
  const options = [
    {
      value: 'false',
      label: 'No',
    },
    {
      value: 'true',
      label: 'Yes',
    },
  ];
  return (
    <SurveyLayout>
      <RadioButtonQuestion
        question={question}
        options={options}
        value={exposed}
        onChange={(value) => {
          setExposed(value);
        }}
      />
      <SurveyNavigation
        nextStep={nextStep}
        nextBtnEnabled={true}
        onNextBtnClick={() => {
          onUpdate('exposed', exposed === 'true');
        }}
      />
    </SurveyLayout>
  );
};

export const NotSureStep6 = ({ onUpdate, nextStep }) => {
  const [temperature, setTemperature] = useState({
    unit: 'celsius',
    value: null,
  });
  const options = [
    {
      value: 'celsius',
      label: 'Celsius',
    },
    {
      value: 'fahrenheit',
      label: 'Fahrenheit',
    },
  ];
  const updateTemperature = (key, value) => {
    let updatedTemperature = { ...temperature };
    updatedTemperature[key] = value;
    setTemperature(updatedTemperature);
  };
  return (
    <SurveyLayout>
      <TextFieldQuestion
        type="text"
        name="temperature"
        placeholder="Enter your temperature..."
        question="What is your current temperature?"
        value={temperature.value}
        onChange={(value) => {
          updateTemperature('value', value);
        }}
      />
      <RadioButtonQuestion
        question="What is the temperature unit you measure in?"
        value={temperature.unit}
        options={options}
        onChange={(value) => {
          updateTemperature('unit', value);
        }}
      />
      <SurveyNavigation
        nextStep={nextStep}
        nextBtnEnabled={temperature}
        onNextBtnClick={() => {
          onUpdate('temperature', temperature, true);
        }}
        isLast={true}
      />
    </SurveyLayout>
  );
};
