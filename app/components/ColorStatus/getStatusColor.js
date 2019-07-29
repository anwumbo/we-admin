/**
 * getStatusColor()
 * Get color for corresponding to a status
 *
 * @param {string} status: status name
 */

import { colorConfig } from 'config/style';
import {
  NEW_REQUEST_VALUE,
  ACCEPTED_VALUE,
  PENDING_REQUEST_VALUE,
  IN_PROGRESS_VALUE,
  PENDING_PAYMENT_VALUE,
  CLOSED_VALUE,
  CANCELLED_VALUE,
} from 'config/constants/weServices';

function getStatusColor(status = '', overWriteSchema = {}) {
  const { newRequest, closed, warning, success, danger } = colorConfig.status;
  const statusUpperCase = status.toString().toUpperCase();

  if (overWriteSchema[statusUpperCase]) {
    return overWriteSchema[statusUpperCase];
  }

  switch (statusUpperCase) {
    case 'NEW REQUEST':
      return newRequest;

    case 'IN':
    case 'APPROVED':
    case 'RESOLVED':
    case 'LOW':
    case 'ACTIVE':
    case 'ENABLED':
    case 'COMPLETED':
    case 'CONFIRMED':
      return success;

    case 'SUBMITTED':
    case 'IN PROGRESS':
    case 'PENDING':
    case 'PENDING APPROVAL':
    case 'PENDING PAYMENT':
    case 'AWAIT CLOSING':
    case 'AWAIT REFUND':
    case 'WAITING INFO':
    case 'OUT':
    case 'MEDIUM':
    case 'MAINTENANCE':
      return warning;

    case 'DECLINED':
    case 'CANCELLED':
    case 'OVERDUE':
    case 'NON-DEFECT':
    case 'HIGH':
    case 'OUTSTANDING':
      return danger;

    case 'CLOSED':
    case 'SKIPPED':
    case 'INACTIVE':
    case 'DISABLED':
    case 'REQUEST UPDATE':
      return closed;

    default:
      return 'inherit';
  }
}

export function getAppointmentColorStatusId(statusId = '') {
  const {
    newRequest,
    accepted,
    pendingRequest,
    inProgress,
    pendingPayment,
    closed,
    cancelled,
  } = colorConfig.appointmentStatus;

  switch (statusId) {
    case NEW_REQUEST_VALUE:
      return newRequest;
    case ACCEPTED_VALUE:
      return accepted;
    case PENDING_REQUEST_VALUE:
      return pendingRequest;
    case IN_PROGRESS_VALUE:
      return inProgress;
    case PENDING_PAYMENT_VALUE:
      return pendingPayment;
    case CLOSED_VALUE:
      return closed;
    case CANCELLED_VALUE:
      return cancelled;
    default:
      return 'inherit';
  }
}

export default getStatusColor;
