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
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 0 15px;
`;
const ThankYouContainer = styled(Container)`
  height: 100vh;
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
    <ThankYouContainer>
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
    </ThankYouContainer>
  );
};

const SelfReporting = () => {
  let { path, url } = useRouteMatch();
  const history = useHistory();
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

  const steps = [
    (props) => <Step1 {...props} />,
    (props) => <Step2 {...props} />,
    (props) => <Step3 {...props} />,
  ];

  return (
    <Switch>
      <Route exact path={path}>
        <Container>
          <Text>
            Want to help us gather information about the risk of COVID-19 in
            your community? All we need is a few answers
          </Text>
          <Card
            type="info"
            title="I'm feeling good and healthy today"
            subtitle="See tips from health professionals to stay safe"
            img={FeelingGoodImage}
            onClick={() => {
              updateForm('haveSymptoms', false);
              history.push(`${url}/thank-you`);
            }}
          />
          <Card
            type="default"
            title="I haven't been feeling well"
            subtitle="Let us know your symptoms here"
            img={NotFeelingWellImage}
            onClick={() => {
              updateForm('haveSymptoms', true);
              history.push(`${url}/report-symptoms/1`);
            }}
          />
          <Button
            type="successSolid"
            onClick={() => {
              console.log(
                'No time... Subscribing the user for notifications...',
              );
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
      </Route>
      <Route path={`${path}/thank-you`}>
        <ThankYouPage />
      </Route>
      <Route path={`${path}/report-symptoms/:stepId`}>
        <MultiStepForm
          onUpdate={updateForm}
          onSubmit={onSubmit}
          root="/self-reporting"
          steps={steps}
        />
      </Route>
    </Switch>
  );
};

export default SelfReporting;
