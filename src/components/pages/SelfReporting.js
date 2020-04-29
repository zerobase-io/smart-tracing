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
import {
  NotFeelingWellPage,
  SelfReportLanding,
  ThankYouPage,
} from './SelfReporting/SelfReportingPages';

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
