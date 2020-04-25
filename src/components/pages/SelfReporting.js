import React, { useState } from 'react';
import {
  Switch,
  Route,
  useHistory,
  useRouteMatch,
  useParams,
} from 'react-router-dom';
import styled from 'styled-components';
import { fontSizes, colors } from '../../styles';
import Button from '../components/Button';
import Card from '../components/Card';

import ThankYouImage from '../../assets/img/self-reporting/thankyou_v1.png';
import FeelingGoodImage from '../../assets/img/self-reporting/feeling-good.png';
import NotFeelingWellImage from '../../assets/img/self-reporting/not-feeling-well.png';
import PlanningGetTestedImage from '../../assets/img/self-reporting/planning-get-tested.png';
import WasTestedImage from '../../assets/img/self-reporting/was-tested.png';

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
`;
const Footer = styled.div`
  width: 100%;
  margin-top: 30px;
  padding-bottom: 15px;
  background-color: ${(props) =>
    props.background ? colors.lightestGray : 'inherit'};
`;
const Image = styled.img`
  width: 80%;
  margin: 0 auto;
`;

const SurveyLayout = ({ children }) => {
  const history = useHistory();
  return (
    <Container>
      <SmallText>
        This assessment does not replace a medical diagnosis. If you need
        immediate medical attention, contact your healthcare provider and let
        them know you are concerned about COVID-19. If there is a medical
        emergency call the emergency call center of your country
      </SmallText>
      <Content>{children}</Content>
      <Footer>
        <Text>
          Remember, we never share your personel data! This information will
          help us to indicate regions with not enough testing facilities or
          access to health services
        </Text>
        <Button
          onClick={() => {
            history.push('/');
          }}
        >
          Continue to Zerobase
        </Button>
      </Footer>
    </Container>
  );
};

const Step1 = ({ onUpdate, nextStep }) => {
  const history = useHistory();
  return (
    <div>
      <p>When have you been tested for COVID-19</p>
      <Button
        type="infoSolid"
        onClick={() => {
          onUpdate('when', 'In the past two weeks');
          history.push(nextStep);
        }}
      >
        In the past two weeks
      </Button>
      <Button
        type="defaultSolid"
        onClick={() => {
          onUpdate('when', 'In the past month');
          history.push(nextStep);
        }}
      >
        In the past month
      </Button>
    </div>
  );
};

const Step2 = ({ onUpdate, onSubmit, nextStep }) => {
  const history = useHistory();
  return (
    <div>
      <h1>Page 2</h1>
      <Button
        onClick={() => {
          onUpdate('email', 'veselin@gmail.com');
        }}
      >
        Update data
      </Button>
      <Button
        onClick={() => {
          onSubmit();
          history.push(nextStep);
        }}
      >
        Sumbit
      </Button>
    </div>
  );
};

const Step3 = ({ rootRoute }) => {
  const history = useHistory();
  return (
    <div>
      <h1>Page 3</h1>
      <Button
        onClick={() => {
          history.replace(rootRoute);
        }}
      >
        Go back
      </Button>
    </div>
  );
};

const MultiStepForm = ({ onUpdate, onSubmit, steps, root }) => {
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

const ThankYouPage = () => {
  const history = useHistory();
  return (
    <Container>
      <Title>Keep community healty</Title>
      <Content>
        <Image src={ThankYouImage} alt="thank-you" />
        <Text bold={true}>
          Thank you for letting us know! With this you keep your community
          healthy! Keep up the good job and stay healty!
        </Text>
      </Content>
      <Footer>
        <Text>
          Remember, we never share your personel data! This information will
          help us to indicate regions with not enough testing facilities or
          access to health services
        </Text>
        <Button
          onClick={() => {
            history.push('/');
          }}
        >
          Continue to Zerobase
        </Button>
      </Footer>
    </Container>
  );
};

const SelfReportLanding = ({ onUpdate }) => {
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
          onUpdate('haveSymptoms', false);
          history.push(`${url}/thank-you`);
        }}
      />
      <Card
        type="default"
        title="I haven't been feeling well"
        subtitle="Let us know your symptoms here"
        img={NotFeelingWellImage}
        onClick={() => {
          onUpdate('haveSymptoms', true);
          history.push(`${url}/not-feeling-well`);
        }}
      />
      <Button
        type="successSolid"
        onClick={() => {
          console.log('No time... Subscribing the user for notifications...');
        }}
      >
        I don't have time now, but keep me notified
      </Button>
      <Footer background={true}>
        <Text>How are we doing? We'd love to hear from you!</Text>
        <Button type="success">Give us feedback</Button>
        <Button
          onClick={() => {
            history.push('/');
          }}
        >
          Continue to Zerobase
        </Button>
        <Text>3a7796c9-d87b-4041-870d-38646c4133c4</Text>
      </Footer>
    </Container>
  );
};

const NotFeelingWellLanding = () => {
  let { url } = useRouteMatch();
  const history = useHistory();
  return (
    <SurveyLayout>
      <Card
        type="default"
        title="I'm not sure if I should get tested for COVID-19"
        img={NotFeelingWellImage}
        onClick={() => {
          // onUpdate('haveSymptoms', true);
          history.push(`${url}/not-sure/1`);
        }}
      />
      <Card
        type="info"
        title="I'm planning on getting tested for COVID-19"
        img={PlanningGetTestedImage}
        onClick={() => {
          // onUpdate('haveSymptoms', false);
          history.push(`${url}/planning/1`);
        }}
      />
      <Card
        type="info"
        title="I've been tested for COVID-19"
        img={WasTestedImage}
        onClick={() => {
          // onUpdate('haveSymptoms', false);
          history.push(`${url}/was-tested/1`);
        }}
      />
    </SurveyLayout>
  );
};

const NotFeelingWellPage = ({ onUpdate, onSubmit }) => {
  let { path } = useRouteMatch();
  const notSureSteps = [
    (props) => <Step1 {...props} />,
    (props) => <Step2 {...props} />,
    (props) => <Step3 {...props} />,
  ];
  const planningSteps = [
    (props) => <Step1 {...props} />,
    (props) => <Step2 {...props} />,
    (props) => <Step3 {...props} />,
  ];
  const wasTestedSteps = [
    (props) => <Step1 {...props} />,
    (props) => <Step2 {...props} />,
    (props) => <Step3 {...props} />,
  ];
  return (
    <Switch>
      <Route exact path={path}>
        <NotFeelingWellLanding onUpdate={onUpdate} />
      </Route>
      <Route path={`${path}/not-sure/:stepId`}>
        <MultiStepForm
          onUpdate={onUpdate}
          onSubmit={onSubmit}
          root="/self-reporting"
          steps={notSureSteps}
        />
      </Route>
      <Route path={`${path}/planning/:stepId`}>
        <MultiStepForm
          onUpdate={onUpdate}
          onSubmit={onSubmit}
          root="/self-reporting"
          steps={planningSteps}
        />
      </Route>
      <Route path={`${path}/was-tested/:stepId`}>
        <MultiStepForm
          onUpdate={onUpdate}
          onSubmit={onSubmit}
          root="/self-reporting"
          steps={wasTestedSteps}
        />
      </Route>
    </Switch>
  );
};

const SelfReporting = () => {
  let { path } = useRouteMatch();
  const [formData, setFormData] = useState(null);

  const updateForm = (key, value) => {
    const data = { ...formData };
    data[key] = value;
    setFormData(data);
  };

  const onSubmit = () => {
    console.log(
      'Routes are changed and I got all the data. Fuck the internet!',
      formData,
    );
  };

  return (
    <Switch>
      <Route exact path={path}>
        <SelfReportLanding onUpdate={updateForm} />
      </Route>
      <Route path={`${path}/thank-you`}>
        <ThankYouPage />
      </Route>
      <Route path={`${path}/not-feeling-well`}>
        <NotFeelingWellPage onUpdate={updateForm} onSubmit={onSubmit} />
      </Route>
    </Switch>
  );
};

export default SelfReporting;
