import React, { useState } from 'react';
import { Switch, Route, useRouteMatch } from 'react-router-dom';
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
