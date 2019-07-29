/**
 * AppointmentColorStatus component
 * Display status text with color
 *
 */

import React from 'react';
import PropTypes from 'prop-types';

import { getAppointmentColorStatusId } from './getStatusColor';

const AppointmentColorStatus = ({ statusId, children, style, ...rest }) => (
  <span
    style={{ color: getAppointmentColorStatusId(statusId), ...style }}
    {...rest}
  >
    {children}
  </span>
);

AppointmentColorStatus.propTypes = {
  statusId: PropTypes.number,
  style: PropTypes.object,
  children: PropTypes.any,
  overWriteSchema: PropTypes.object,
};

export default AppointmentColorStatus;
