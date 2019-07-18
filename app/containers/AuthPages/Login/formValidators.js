import { isValidEmail } from 'utils/common/validators';
import { formatMessage } from 'containers/LanguageProvider/IntlGlobalProvider';
import globalMessages from 'containers/App/messages';
import { fields } from './constants';
const { EMAIL, PASSWORD } = fields;

const formValidators = (values) => {
  const errors = {};

  if (!values[EMAIL]) {
    errors[EMAIL] = formatMessage(globalMessages.emailCannotBeEmpty);
  }

  if (values[EMAIL] && !isValidEmail(values[EMAIL])) {
    errors[EMAIL] = formatMessage(globalMessages.invalidEmail);
  }

  if (!values[PASSWORD] || values[PASSWORD].length < 6) {
    errors[PASSWORD] = formatMessage(globalMessages.passwordAtLeast6Character);
  }

  return errors;
};

export default formValidators;
