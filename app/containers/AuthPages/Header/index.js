import React from 'react';
import { NavLink } from 'react-router-dom';

import { routes } from 'config/routes';
import weServiceImg from 'assets/we-logo/we-logo-white.png';
import formatMessage from 'containers/LanguageProvider/formatMessage';
import globalMessages from 'containers/App/messages';

import { Wrapper, HeaderLink } from './StyledComponents';

function Header() {
  return (
    <Wrapper>
      <img src={weServiceImg} alt="we-service-logo" />

      <HeaderLink>
        <NavLink to={routes.login}>
          {formatMessage(globalMessages.signIn)}
        </NavLink>
      </HeaderLink>
    </Wrapper>
  );
}

export default Header;
