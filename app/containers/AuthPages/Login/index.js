import React, { memo, useState } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { Helmet } from 'react-helmet';
import { Field, reduxForm } from 'redux-form';
import { bindActionCreators, compose } from 'redux';
import { notification } from 'antd';
import { Link } from 'react-router-dom';

import FormAlert from 'containers/AuthPages/FormAlert';
import { InputField, VisiblePasswordField } from 'components/ReduxForm';
import Button from 'components/Button';
import globalMessages from 'containers/App/messages';
import { routes } from 'config/routes';
import { formatMessage } from 'containers/LanguageProvider/IntlGlobalProvider';
import Typography from 'components/Typography';
import { FormWrapper, TermWrapper } from './StyledComponents';
import { fields } from './constants';
import { submitLoginAction, refreshUserData } from './actions';
import messages from './messages';
import formValidators from './formValidators';

export function Login({ submitLogin, submitting, handleSubmit, getUserInfo }) {
  console.log('TCL: Login -> submitting', submitting);
  const [errorMessage, setErrorMessage] = useState();
  const onClickSubmitLogin = (values) => {
    new Promise((onSuccess, onFail) => {
      submitLogin({ ...values }, { onSuccess, onFail });
    })
      .then((payload) => {
        getUserInfo(payload.data.access_token);
      })
      .catch((error) => {
        notification.destroy();
        setErrorMessage(
          Array.isArray(error.message) ? error.message[0] : error.message,
        );
      });
  };
  const onClickTermAndCondition = () => {
    window.open('https://www.wewumbo.io/term.html', '_blank');
  };
  return (
    <>
      <Helmet>
        <title>{formatMessage(globalMessages.signIn)}</title>
      </Helmet>

      <Typography
        label={formatMessage(globalMessages.signIn)}
        type="heading1"
        style={{ display: 'flex', justifyContent: 'center' }}
        noMarginTop
      />

      <FormWrapper>
        <Field
          label={formatMessage(globalMessages.email)}
          name={fields.EMAIL}
          component={InputField}
          placeholder={formatMessage(globalMessages.email)}
        />

        <VisiblePasswordField
          name={fields.PASSWORD}
          label={formatMessage(globalMessages.password)}
          isRequired={false}
          onPressEnter={handleSubmit(onClickSubmitLogin)}
          placeholder={formatMessage(globalMessages.password)}
          onChange={() => setErrorMessage('')}
          renderError={null}
        />

        {errorMessage && <FormAlert message={errorMessage} error />}

        <Button
          onClick={handleSubmit(onClickSubmitLogin)}
          maxWidth
          disabled={submitting}
        >
          {formatMessage(globalMessages.signIn)}
        </Button>

        <TermWrapper>
          {formatMessage(messages.byClickingOnSignIn)}{' '}
          <span onClick={onClickTermAndCondition}>
            {formatMessage(messages.termAndCondition)}
          </span>
        </TermWrapper>

        <Link to={routes.forgotPassword}>
          {formatMessage(globalMessages.forgotPassword)}
        </Link>
      </FormWrapper>
    </>
  );
}
Login.propTypes = {
  submitting: PropTypes.bool,
  handleSubmit: PropTypes.func,
  submitLogin: PropTypes.func,
  getUserInfo: PropTypes.func,
};

const mapDispatchToProps = (dispatch) =>
  bindActionCreators(
    {
      submitLogin: submitLoginAction,
      getUserInfo: refreshUserData,
    },
    dispatch,
  );

const withConnect = connect(
  null,
  mapDispatchToProps,
);

const withReduxForm = reduxForm({
  form: 'LOGIN_FORM',
  validate: formValidators,
  enableReinitialize: true,
});

export default compose(
  withConnect,
  withReduxForm,
  memo,
)(Login);
