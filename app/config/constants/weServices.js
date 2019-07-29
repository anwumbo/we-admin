import formatMessage from 'containers/LanguageProvider/formatMessage';
import globalMessages from 'containers/App/messages';

/**
 * We services appointment status
 */
export const NEW_REQUEST_VALUE = 1;
export const ACCEPTED_VALUE = 2;
export const PENDING_REQUEST_VALUE = 3;
export const IN_PROGRESS_VALUE = 4;
export const PENDING_PAYMENT_VALUE = 5;
export const CLOSED_VALUE = 6;
export const CANCELLED_VALUE = 7;

export const NEW_REQUEST_OPTION = {
  value: NEW_REQUEST_VALUE,
  label: formatMessage(globalMessages.newRequest),
};
export const ACCEPTED_OPTIONS = {
  value: ACCEPTED_VALUE,
  label: formatMessage(globalMessages.accepted),
};
export const PENDING_REQUEST_OPTIONS = {
  value: PENDING_REQUEST_VALUE,
  label: formatMessage(globalMessages.pendingRequest),
};
export const IN_PROGRESS_OPTION = {
  value: IN_PROGRESS_VALUE,
  label: formatMessage(globalMessages.inProgress),
};
export const PENDING_PAYMENT_OPTION = {
  value: PENDING_PAYMENT_VALUE,
  label: formatMessage(globalMessages.pendingPayment),
};
export const CLOSED_OPTIONS = {
  value: CLOSED_VALUE,
  label: formatMessage(globalMessages.closed),
};
export const CANCELLED_OPTION = {
  value: CANCELLED_VALUE,
  label: formatMessage(globalMessages.cancelled),
};

export const SERVICE_APPOINTMENT_STATUS_OPTIONS = [
  NEW_REQUEST_OPTION,
  ACCEPTED_OPTIONS,
  PENDING_REQUEST_OPTIONS,
  IN_PROGRESS_OPTION,
  PENDING_PAYMENT_OPTION,
  CLOSED_OPTIONS,
  CANCELLED_OPTION,
];

export const DAY_OF_WEEK = {
  SUN: 'SUN',
  MON: 'MON',
  TUE: 'TUE',
  WED: 'WED',
  THU: 'THU',
  FRI: 'FRI',
  SAT: 'SAT',
};

export const DAY_OF_WEEK_SHOW = {
  SUN: 'Sunday',
  MON: 'Monday',
  TUE: 'Tuesday',
  WED: 'Wednesday',
  THU: 'Thursday',
  FRI: 'Friday',
  SAT: 'Saturday',
};
