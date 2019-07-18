import React, { memo } from 'react';
import PropTypes from 'prop-types';
import { compose } from 'redux';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';

import { makeSelectLocation } from 'containers/App/selectors';
import { routes } from 'config/routes';

import Login from './Login/Loadable';
// import ForgotPassword from './ForgotPassword/Loadable';
// import ResetPassword from './ResetPassword/Loadable';

import { FormWrapper } from './StyledComponents';

const FormContainer = ({ location }) => (
  <FormWrapper>
    {location.pathname.includes(routes.login) && <Login />}
    {/* {location.pathname.includes(routes.forgotPassword) && <ForgotPassword />}
    {location.pathname.includes(routes.resetPassword) && (
      <ResetPassword location={location} />
    )} */}
  </FormWrapper>
);

FormContainer.propTypes = {
  location: PropTypes.object,
};

const mapStateToProps = createStructuredSelector({
  location: makeSelectLocation(),
});

const withConnect = connect(
  mapStateToProps,
  null,
);

export default compose(
  withConnect,
  memo,
)(FormContainer);
