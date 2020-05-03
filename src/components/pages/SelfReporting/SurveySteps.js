import React, { useState } from 'react';
import styled from 'styled-components';
import { useHistory } from 'react-router-dom';
import { colors, fontSizes } from '../../../styles';
import Button from '../../components/Button';
import { DatePicker, DatePickerInput } from 'carbon-components-react';
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

const DatePickerContainer = styled.div`
  width: 100%;
  padding: 2rem;
  min-height: 150px;
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
      <DatePickerContainer>
        <DatePicker
          dateFormat="m/d/Y"
          datePickerType="single"
          id="date-picker"
          light={false}
          locale="en"
          onChange={(e) => {
            onUpdate('testedOn', e[0]);
          }}
          onClose={(e) => {
            onUpdate('testedOn', e[0]);
          }}
          short={false}
        >
          <DatePickerInput
            className="some-class"
            disabled={false}
            iconDescription="Icon description"
            id="date-picker-input-id"
            invalid={false}
            invalidText="A valid value is required"
            labelText=""
            pattern="d{1,2}/d{4}"
            placeholder="mm/dd/yyyy"
            size={undefined}
            type="text"
          />
        </DatePicker>
      </DatePickerContainer>
      <Button
        onClick={() => {
          history.push(nextStep);
        }}
      >
        Next
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
    </SurveyLayout>
  );
};

export const NotSureStep1 = ({ onUpdate, nextStep }) => {
  const [age, setAge] = useState();
  const question = 'How old are you?';
  const options = [
    {
      value: 'UNDERAGE',
      label: 'I am under 18',
    },
    {
      value: 'GENERAL',
      label: 'I am between 18 and 64',
    },
    {
      value: 'ELDERLY',
      label: 'I am older than 64',
    },
    {
      value: '',
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
        nextBtnEnabled={age}
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
      value: 'FEVER',
      label: 'Fevers, chills, sweating',
    },
    {
      value: 'BREATHING',
      label: 'Difficulty breathing',
    },
    {
      value: 'NEW_COUGH',
      label: 'New and increasing cough',
    },
    {
      value: 'SORE_THROAT',
      label: 'Sore throat',
    },
    {
      value: 'ACHING',
      label: 'Aching throughout the body',
    },
    {
      value: 'VOMITING_DIARRHEA',
      label: 'Vomiting or diarrhea',
    },
    {
      value: 'MIGRAINES',
      label: 'Migraines',
    },
    {
      value: 'LOSS_OF_TASTE',
      label: 'Loss of taste and smell / Changes in how food tastes',
    },
    {
      value: '',
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

  const selectedSymptoms = Object.keys(symptoms).filter((key) => symptoms[key]);

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
        nextBtnEnabled={
          selectedSymptoms &&
          selectedSymptoms.length &&
          selectedSymptoms.length > 0
        }
        onNextBtnClick={() => {
          onUpdate('symptoms', symptoms);
        }}
      />
    </SurveyLayout>
  );
};

export const NotSureStep3 = ({ onUpdate, nextStep }) => {
  const [dailyPeopleAtHome, setDailyPeopleAtHome] = useState();
  const question = 'On a daily basis with how many people are in your home?';
  const options = [
    {
      value: 'SINGLE',
      label: '1',
    },
    {
      value: 'PARTNER',
      label: '2',
    },
    {
      value: 'SMALL',
      label: '3-5',
    },
    {
      value: 'MEDIUM',
      label: '6-10',
    },
    {
      value: 'LARGE',
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
        nextBtnEnabled={dailyPeopleAtHome}
        onNextBtnClick={() => {
          onUpdate('dailyPeopleAtHome', dailyPeopleAtHome);
        }}
      />
    </SurveyLayout>
  );
};

export const NotSureStep4 = ({ onUpdate, nextStep }) => {
  const [dailyContacts, setDailyContacts] = useState();
  const question =
    'On a daily basis, with how many people are you in contact with outside your home?';
  const options = [
    {
      value: 'NONE',
      label: 'None',
    },
    {
      value: 'SINGLE',
      label: '1',
    },
    {
      value: 'SMALL',
      label: '2-4',
    },
    {
      value: 'MEDIUM',
      label: '5-10',
    },
    {
      value: 'LARGE',
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
        nextBtnEnabled={dailyContacts}
        onNextBtnClick={() => {
          onUpdate('dailyContacts', dailyContacts);
        }}
      />
    </SurveyLayout>
  );
};

export const NotSureStep5 = ({ onUpdate, nextStep }) => {
  const [exposed, setExposed] = useState();
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
        nextBtnEnabled={exposed}
        onNextBtnClick={() => {
          onUpdate('exposed', exposed === 'true');
        }}
      />
    </SurveyLayout>
  );
};

export const NotSureStep6 = ({ onUpdate, nextStep }) => {
  const [temperature, setTemperature] = useState({
    unit: undefined,
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
    {
      value: 'kelvin',
      label: 'Kelvin',
    },
  ];
  const updateTemperature = (key, value) => {
    let updatedTemperature = { ...temperature };
    if (key === 'value') {
      updatedTemperature[key] = parseFloat(value);
    } else {
      updatedTemperature[key] = value;
    }
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
        isSkippable={true}
        nextBtnEnabled={temperature.unit && temperature.value}
        onNextBtnClick={() => {
          onUpdate('temperature', temperature, true);
        }}
        onSkipBtnClick={() => {
          onUpdate('temperature', {}, true);
        }}
        isLast={true}
      />
    </SurveyLayout>
  );
};
