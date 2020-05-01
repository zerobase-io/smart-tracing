import { useHistory } from 'react-router-dom';
import Button from '../../Button';
import styled from 'styled-components';
import { colors, fontSizes } from '../../../../styles';
import React from 'react';

const Text = styled.p`
  font-size: ${fontSizes.small};
  text-align: center;
  font-weight: ${(props) => (props.bold ? 'bold' : 'normal')};
`;
const Container = styled.div`
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 2rem;
  max-width: 28rem;
  margin: 0 auto;
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
const NavigationLayout = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
`;
const NavigationLayoutPrimary = styled.div`
  width: 100%;
  display: flex;
  flex-direction: row;
`;

/**
 * SurveyNavigation is the component which is used in every survey question
 * to give the possibility for going back and forth and skip question if allowed
 * @param nextStep: String
 * @param isSkippable: Boolean
 * @param nextBtnEnabled: Boolean
 * @returns {Styled Component}
 * @constructor
 */
export const SurveyNavigation = ({
  nextStep,
  isLast = false,
  isSkippable = false,
  nextBtnEnabled = false,
  onNextBtnClick,
  onSkipBtnClick,
}) => {
  const history = useHistory();
  return (
    <NavigationLayout>
      <NavigationLayoutPrimary>
        <Button
          onClick={() => {
            history.goBack();
          }}
        >
          Back
        </Button>
        <Button
          type="success"
          disabled={!nextBtnEnabled}
          onClick={() => {
            onNextBtnClick();
            if (!isLast) {
              history.push(nextStep);
            }
          }}
        >
          {isLast ? 'Submit' : 'Next'}
        </Button>
      </NavigationLayoutPrimary>
      {isSkippable && (
        <Button
          onClick={() => {
            onSkipBtnClick();
            history.push(nextStep);
          }}
        >
          Skip
        </Button>
      )}
    </NavigationLayout>
  );
};

/**
 * SurveyLayout is the component that adds some static information in the page
 * and the Back to Zerobase button
 * @param children: {Styled Component}
 * @returns {Styled Component}
 * @constructor
 */

export const SurveyLayout = ({ children }) => {
  const history = useHistory();
  return (
    <Container>
      <Text>
        This assessment does not replace a medical diagnosis. If you need
        immediate medical attention, contact your healthcare provider and let
        them know you are concerned about COVID-19. If there is a medical
        emergency call the emergency call center of your country
      </Text>
      <Content>{children}</Content>
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
