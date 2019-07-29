/**
 * DateStatus component
 * Display date status text with color ( = red if date in the past)
 * set showColor={false} if only need date format as string without color
 */

import React from 'react';
import PropTypes from 'prop-types';
import moment from 'moment';
import { colorConfig } from 'config/style';

const DateStatus = ({ timeStamp, date, showColor = true }) => {
  const time = timeStamp ? moment.unix(timeStamp) : moment(date, 'DD MMM YYYY');
  const isOverDue = time.isBefore(moment());

  return (
    <span
      style={{ color: isOverDue && showColor ? colorConfig.danger : 'inherit' }}
    >
      {time.format('DD MMM YYYY')}
    </span>
  );
};

DateStatus.propTypes = {
  timeStamp: PropTypes.number,
  date: PropTypes.string, // format as `DD MMM YYYY`
  showColor: PropTypes.bool,
};

export default DateStatus;
