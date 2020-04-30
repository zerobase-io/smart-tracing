import React from 'react';
import styled from 'styled-components';
import {
  Route,
  Switch,
  useHistory,
  useRouteMatch,
  useParams,
} from 'react-router-dom';
import Button from '../../components/Button';
import Card from '../../components/Card';
import {
  NotSureStep1,
  NotSureStep2,
  NotSureStep3,
  NotSureStep4,
  NotSureStep5,
  NotSureStep6,
  PlanningStep1,
  WasTestedStep1,
  WasTestedStep2,
} from './SurveySteps';
import { SurveyLayout } from '../../components/Form/SurveyComponents/SurveyLayout';
import { colors, fontSizes } from '../../../styles';
import ThankYouImage from '../../../assets/img/self-reporting/thankyou_v1.png';
import FeelingGoodImage from '../../../assets/img/self-reporting/feeling-good.png';
import NotFeelingWellImage from '../../../assets/img/self-reporting/not-feeling-well.png';
import PlanningGetTestedImage from '../../../assets/img/self-reporting/planning-get-tested.png';
import WasTestedImage from '../../../assets/img/self-reporting/was-tested.png';

const Title = styled.h1`
  font-size: ${fontSizes.large};
  text-align: center;
  margin: 15px;
`;
const Text = styled.p`
  font-size: ${fontSizes.primary};
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
const Image = styled.img`
  max-width: 80%;
  margin: 0 auto;
`;

/**
 * In charge of rendering the steps of the form, does some jquery stuff? idk tbh sorry
 * @param onUpdate
 * @param steps
 * @param root
 * @returns {*}
 * @constructor
 */
export const MultiStepForm = ({ onUpdate, steps, root }) => {
  let { stepId } = useParams();

  const props = {
    stepId,
    nextStep: `${parseInt(stepId || 0) + 1}`,
    rootRoute: root,
    onUpdate,
  };

  return steps[parseInt(stepId) - 1](props);
};

/**
 * Top level page components that handle Rendering the pages and survey
 *
 * @returns {*}
 * @constructor
 */

export const ThankYouPage = () => {
  const history = useHistory();
  return (
    <Container>
      <Title>Keep community healthy</Title>
      <Content>
        <Image src={ThankYouImage} alt="thank-you" />
        <Text bold={true}>
          Thank you for letting us know! With this you keep your community
          healthy! Keep up the good job and stay health y!
        </Text>
      </Content>
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

export const ErrorPage = () => {
  const history = useHistory();
  return (
    <Container>
      <Title>Keep community healthy</Title>
      <Content>
        <Image src={NotFeelingWellImage} alt="thank-you" />
        <Text bold={true}>Oops! Something went wrong</Text>
      </Content>
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

export const SelfReportLanding = ({ onUpdate }) => {
  let { url } = useRouteMatch();
  const history = useHistory();
  return (
    <Container>
      <Text>
        Want to help us gather information about the risk of COVID-19 in your
        community? All we need is a few answers
      </Text>
      <Card
        type="info"
        title="I'm feeling good and healthy today"
        subtitle="See tips from health professionals to stay safe"
        img={FeelingGoodImage}
        onClick={() => {
          onUpdate('report', 'feeling-good', true);
          history.push(`${url}/thank-you`);
        }}
      />
      <Card
        type="default"
        title="I haven't been feeling well"
        subtitle="Let us know your symptoms here"
        img={NotFeelingWellImage}
        onClick={() => {
          onUpdate('report', 'not-feeling-well');
          history.push(`${url}/not-feeling-well`);
        }}
      />
      {/* <Button
        type="successSolid"
        onClick={() => {
          onUpdate('report', 'no-time');
          console.log('No time... Subscribing the user for notifications...');
        }}
      >
        I don't have time now, but keep me notified
      </Button> */}
      <Footer background={true}>
        {/* <Text>How are we doing? We'd love to hear from you!</Text>
        <Button type="success">Give us feedback</Button> */}
        <Button
          onClick={() => {
            history.push('/');
          }}
        >
          Continue to Zerobase
        </Button>
        {/* <Text>3a7796c9-d87b-4041-870d-38646c4133c4</Text> */}
      </Footer>
    </Container>
  );
};

export const NotFeelingWellLanding = ({ onUpdate }) => {
  let { url } = useRouteMatch();
  const history = useHistory();
  return (
    <SurveyLayout>
      <Card
        type="default"
        title="I'm not sure if I should get tested for COVID-19"
        img={NotFeelingWellImage}
        onClick={() => {
          onUpdate('notFeelingWellReason', 'not-sure');
          history.push(`${url}/not-sure/1`);
        }}
      />
      <Card
        type="info"
        title="I'm planning on getting tested for COVID-19"
        img={PlanningGetTestedImage}
        onClick={() => {
          onUpdate('notFeelingWellReason', 'planning');
          history.push(`${url}/planning/1`);
        }}
      />
      <Card
        type="info"
        title="I've been tested for COVID-19"
        img={WasTestedImage}
        onClick={() => {
          onUpdate('notFeelingWellReason', 'tested');
          onUpdate('', true);
          history.push(`${url}/was-tested/1`);
        }}
      />
    </SurveyLayout>
  );
};

export const NotFeelingWellPage = ({ onUpdate }) => {
  let { path } = useRouteMatch();
  const notSureSteps = [
    (props) => <NotSureStep1 {...props} />,
    (props) => <NotSureStep2 {...props} />,
    (props) => <NotSureStep3 {...props} />,
    (props) => <NotSureStep4 {...props} />,
    (props) => <NotSureStep5 {...props} />,
    (props) => <NotSureStep6 {...props} />,
  ];
  const planningSteps = [(props) => <PlanningStep1 {...props} />];
  const wasTestedSteps = [
    (props) => <WasTestedStep1 {...props} />,
    (props) => <WasTestedStep2 {...props} />,
  ];
  return (
    <Switch>
      <Route exact path={path}>
        <NotFeelingWellLanding onUpdate={onUpdate} />
      </Route>
      <Route path={`${path}/not-sure/:stepId`}>
        <MultiStepForm
          onUpdate={onUpdate}
          root="/self-reporting"
          steps={notSureSteps}
        />
      </Route>
      <Route path={`${path}/planning/:stepId`}>
        <MultiStepForm
          onUpdate={onUpdate}
          root="/self-reporting"
          steps={planningSteps}
        />
      </Route>
      <Route path={`${path}/was-tested/:stepId`}>
        <MultiStepForm
          onUpdate={onUpdate}
          root="/self-reporting"
          steps={wasTestedSteps}
        />
      </Route>
    </Switch>
  );
};
