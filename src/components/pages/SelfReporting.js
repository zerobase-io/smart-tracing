import React from 'react';
import Button from '../components/Button';
import Card from '../components/Card';

import Logo from '../../assets/img/logo_icon_200.png';

const SelfReporting = () => {
  return (
    <div>
      <h1>Self Reporting</h1>
      <p>
        Want to help us gather information about the risk of COVID-19 in your
        community? All we need is a few answers
      </p>
      <div>
        <h2>Buttons</h2>
        <Button type="success">Give us feedback</Button>
        <Button type="successSolid">
          I don't have time now, but keep me notified.
        </Button>
        <Button>Back to Zerobase</Button>
        <Button type="infoSolid">In the past two weeks</Button>
        <Button type="defaultSolid">In the past month</Button>
      </div>
      <div>
        <h2>Cards</h2>
        <Card
          type="default"
          title="I'm feeling good and healthy today"
          subtitle="See tips from health professionals to stay safe"
          img={Logo}
        />
        <Card
          type="info"
          title="I haven't been feeling well"
          subtitle="Let us know your symptoms here"
          img={Logo}
        />
      </div>
    </div>
  );
};

export default SelfReporting;
