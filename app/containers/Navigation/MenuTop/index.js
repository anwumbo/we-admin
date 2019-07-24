import React from 'react';
import weLogo from 'assets/we-logo/we-logo-white.png';
import {
  TopNavContainer,
  Left,
  CompanyLogo,
  Right,
  VerticalDivider,
} from './StyledComponents';

export default function MenuTop() {
  return (
    <TopNavContainer>
      <Left>
        <CompanyLogo>
          <img src={weLogo} alt="logo company" />
        </CompanyLogo>
      </Left>
      <Right>
        <VerticalDivider />
      </Right>
    </TopNavContainer>
  );
}
