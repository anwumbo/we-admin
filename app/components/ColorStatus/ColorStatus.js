/**
 * ColorStatus component
 * Display status text with color
 *
 * overWriteSchema: { 'STATUS AS KEY' : '#color-value'}
 */

import React from 'react';
import PropTypes from 'prop-types';

import getStatusColor from './getStatusColor';
import translateStatus from './translateStatus';

const ColorStatus = ({ status, children, overWriteSchema, style, ...rest }) => (
  <span
    style={{ color: getStatusColor(status, overWriteSchema), ...style }}
    {...rest}
  >
    {!children && translateStatus(status)}
    {children}
  </span>
);

ColorStatus.propTypes = {
  status: PropTypes.string,
  style: PropTypes.object,
  children: PropTypes.any,
  overWriteSchema: PropTypes.object,
};

export default ColorStatus;
