/* eslint-disable react/prop-types */
import React from 'react';
import { Link } from 'react-router-dom';
import { Icon } from 'antd';
import styled from 'styled-components';

import globalMessages from 'containers/App/messages';
import formatMessage from 'containers/LanguageProvider/formatMessage';
import colorConfig from 'config/style';

const Container = styled(Link)`
  font-size: 20px;
  color: ${colorConfig.text};
  font-weight: 600;

  i {
    margin-right: 10px;
    vertical-align: 2px;
  }
`;

export const GoBackButton = ({ to = '#', children }) => (
  <Container to={to}>
    <Icon type="arrow-left" />

    {children || <span>{formatMessage(globalMessages.back)}</span>}
  </Container>
);

export default GoBackButton;
