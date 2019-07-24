import formatMessage from 'containers/LanguageProvider/formatMessage';
import globalMessages from 'containers/App/messages';

export const GET_ASSET_CATEGORIES = 'app/UserManagement/GET_ASSET_CATEGORIES';
export const ADD_EDIT_ASSET_CATEGORIES = 'app/UserManagement/ADD_EDIT_ASSET_CATEGORIES';

export const FITTINGS_FIXTURES = 'fitting_fixture';
export const ASSET = 'asset';

export const STATUS_ACTIVE_ID = 1;
export const STATUS_INACTIVE_ID = 0;

export const STATUS_OPTIONS = [
  { value: STATUS_ACTIVE_ID, label: formatMessage(globalMessages.enabled) },
  { value: STATUS_INACTIVE_ID, label: formatMessage(globalMessages.disabled) },
];

export const fields = {
  ID: 'id',
  Status: 'status',
  Email: 'email',
  FullName: 'fullName',
  BOD: 'bod',
  Avatar: 'avatar',
  Role: 'role',
};

export const RELATED_PAGE_OPTIONS = [
  { value: ASSET, label: formatMessage(globalMessages.buildingAsset) },
  { value: FITTINGS_FIXTURES, label: formatMessage(globalMessages.fittingsAndFixtures) },
];
