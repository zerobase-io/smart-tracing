import { useHistory, useParams } from 'react-router-dom';
import Button from '../../Button';
import styled from 'styled-components';
import { colors, fontSizes } from '../../../../styles';
import React from 'react';

const Text = styled.p`
  font-size: ${fontSizes.primary};
  text-align: center;
  margin: 15px;
  font-weight: ${(props) => (props.bold ? 'bold' : 'normal')};
`;
const SmallText = styled.p`
  font-size: ${fontSizes.small};
  text-align: center;
  margin: 15px;
  font-weight: ${(props) => (props.bold ? 'bold' : 'normal')};
`;
const Container = styled.div`
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 0 15px;
`;
const Content = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  justify-content: center;
  width: 100%;
`;
const Footer = styled.div`
  width: 100%;
  margin-top: 30px;
  padding-bottom: 15px;
  background-color: ${(props) =>
  props.background ? colors.lightestGray : 'inherit'};
`;
const HeaderLayout = styled.div`
  width: 100%;
  display: flex;
  flex-direction: row;
`;
const FooterLayout = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
`;

/**
 * SurveyLayout is the component currently the SelfReporting survey controller.
 * Could be refactored a bit to generalize.
 * @param children: {Styled Component}
 * @param nextStep: String
 * @param isSkippable: Boolean
 * @param nextBtnEnabled: Boolean
 * @returns {Styled Component}
 * @constructor
 */

export const SurveyLayout = ({
  children,
  nextStep,
  isSkippable = false,
  nextBtnEnabled,
}) => {
  const history = useHistory();
  return (
    <Container>
      <SurveyHeader />
      <SmallText>
        This assessment does not replace a medical diagnosis. If you need
        immediate medical attention, contact your healthcare provider and let
        them know you are concerned about COVID-19. If there is a medical
        emergency call the emergency call center of your country
      </SmallText>
      <Content>{children}</Content>
      <SurveyFooter
        nextStep={nextStep}
        isSkippable={isSkippable}
        nextBtnEnabled={nextBtnEnabled}
      />
      <Footer>
        <Text>
          Remember, we never share your personal data! This information will
          help us to indicate regions with not enough testing facilities or
          access to health services
        </Text>
        <Button
          onClick={() => {
            history.push('/');
          }}
        >
          Back to Zerobase
        </Button>
      </Footer>
    </Container>
  );
};

/**
 * In charge of rendering the steps of the form, does some jquery stuff? idk tbh sorry
 * @param onUpdate
 * @param onSubmit
 * @param steps
 * @param root
 * @returns {*}
 * @constructor
 */
export const MultiStepForm = ({ onUpdate, onSubmit, steps, root }) => {
  let { stepId } = useParams();

  const props = {
    stepId,
    nextStep: `${parseInt(stepId || 0) + 1}`,
    rootRoute: root,
    onUpdate,
    onSubmit,
  };

  return steps[parseInt(stepId) - 1](props);
};

const SurveyHeader = () => {
  const history = useHistory();
  return (
    <HeaderLayout>
      <Button
        onClick={() => {
          // onSubmit(...)
          history.goBack();
        }}
      >
        Back
      </Button>
      <Button
        onClick={() => {
          // onSubmit(...)
          history.push('/');
        }}
      >
        Cancel
      </Button>
    </HeaderLayout>
  );
};

const SurveyFooter = ({
  nextStep,
  isSkippable = false,
  nextBtnEnabled = false,
}) => {
  const history = useHistory();
  return (
    <FooterLayout>
      {nextBtnEnabled && (
        <Button
          type="successSolid"
          onClick={() => {
            history.push(nextStep);
          }}
        >
          Next
        </Button>
      )}
      {!nextBtnEnabled && <Button>Next</Button>}

      {isSkippable && (
        <Button
          onClick={() => {
            history.push(nextStep);
          }}
        >
          Skip
        </Button>
      )}
    </FooterLayout>
  );
};


