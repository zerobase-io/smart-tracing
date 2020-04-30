import React, { useState } from 'react';
import { Switch, Route, useRouteMatch, useHistory } from 'react-router-dom';
import {
  NotFeelingWellPage,
  SelfReportLanding,
  ThankYouPage,
  ErrorPage,
} from './SelfReporting/SelfReportingPages';

const submitReport = async (data) => {
  const { report } = data;
  if (report === 'feeling-good') {
    console.log('Feeling good...');
    return Promise.resolve();
  } else if (report === 'not-feeling-well') {
    console.log('Not feeling well...');
    const { notFeelingWellReason } = data;
    if (notFeelingWellReason === 'not-sure') {
      console.log('But I am not sure why...');
      console.log('Sending a request to API with my symptoms...', data);
      // TODO: Send the first request here...
    } else if (notFeelingWellReason === 'planning') {
      console.log('But I am planning to test...');
      return Promise.resolve();
    } else if (notFeelingWellReason === 'tested') {
      console.log('But I was tested...');
      console.log('Sending a request to API with my result...', data);
      // TODO: Send the second request here...
    }
  } else if (report === 'no-time') {
    console.log('I have no time to answer...');
  }
};

const SelfReporting = () => {
  let { path } = useRouteMatch();
  const history = useHistory();
  const formInitialState = {};
  const [formData, setFormData] = useState(formInitialState);

  const onUpdate = (key, value, shouldSubmit) => {
    const data = { ...formData };
    data[key] = value;
    setFormData(data);

    // This is a temporary workaround for state management
    if (shouldSubmit) {
      onSubmit(data);
    }
  };

  const onSubmit = (data) => {
    console.log('Sumbitting report: ', data);

    submitReport(data)
      .then(() => {
        history.push('/self-reporting/thank-you');
      })
      .catch((e) => {
        console.error('Failed to submit the report: ', e);
        history.push('/self-reporting/error');
      });
  };

  return (
    <Switch>
      <Route exact path={path}>
        <SelfReportLanding onUpdate={onUpdate} />
      </Route>
      <Route path={`${path}/not-feeling-well`}>
        <NotFeelingWellPage onUpdate={onUpdate} />
      </Route>
      <Route path={`${path}/thank-you`}>
        <ThankYouPage />
      </Route>
      <Route path={`${path}/error`}>
        <ErrorPage />
      </Route>
    </Switch>
  );
};

export default SelfReporting;
