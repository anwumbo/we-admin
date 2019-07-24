/**
 *
 * NoData
 * @prop {string} label: no data message
 *
 */

import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';

import formatMessage from 'containers/LanguageProvider/formatMessage';
import globalMessages from 'containers/App/messages';

const Wrapper = styled.div`
  height: 100%;
  width: 100%;
  min-height: 100px;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const NoDataBanner = ({ style, label, children }) => (
  <Wrapper style={style} className="no-data-banner">
    <span>{children || label}</span>
  </Wrapper>
);

NoDataBanner.propTypes = {
  label: PropTypes.string,
  style: PropTypes.object,
  children: PropTypes.any,
};

NoDataBanner.defaultProps = {
  label: formatMessage(globalMessages.noData),
};

export default NoDataBanner;
