import * as Sentry from '@sentry/browser';
import camelCase from 'lodash/camelCase';

import globalMessages from 'containers/App/messages';
import formatMessage from 'containers/LanguageProvider/formatMessage';

const translateStatus = (status = '') => {
  const statusMessageValue = globalMessages[camelCase(status)];

  const result = statusMessageValue
    ? formatMessage(statusMessageValue)
    : status;

  if (status && !statusMessageValue) {
    Sentry.withScope((scope) => {
      scope.setLevel('info');
      scope.setTag('component', 'colorStatus');
      scope.setExtra('status', status);
      Sentry.captureMessage('Cannot camelize the color status');
    });
  }

  return result;
};

export default translateStatus;
