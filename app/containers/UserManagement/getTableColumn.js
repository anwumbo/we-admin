import React from 'react';
import { Link } from 'react-router-dom';

import formatMessage from 'containers/LanguageProvider/formatMessage';
import globalMessages from 'containers/App/messages';
import CellPopupMenu, { MenuItem } from 'components/Table/CellPopupMenu';
import { routes } from 'config/routes';
import { fields } from './constants';

function getTableColumn() {
  const tableColumn = [
    {
      Header: formatMessage(globalMessages.fullName),
      accessor: fields.Avatar,
    },
    {
      Header: formatMessage(globalMessages.fullName),
      accessor: fields.Role,
    },
    {
      Header: formatMessage(globalMessages.fullName),
      accessor: fields.FullName,
    },
    {
      Header: formatMessage(globalMessages.email),
      accessor: fields.Email,
    },
    {
      Header: formatMessage(globalMessages.BOD),
      accessor: fields.BOD,
    },
    {
      Header: formatMessage(globalMessages.BOD),
      accessor: fields.Status,
    },
    {
      id: 'cell-action',
      maxWidth: 50,
      accessor: (data) => (
        <CellPopupMenu>
          <MenuItem>
            <Link to={routes.admin.users.edit.replace(':id', data.email)}>
              {formatMessage(globalMessages.edit)}
            </Link>
          </MenuItem>
          <MenuItem>{formatMessage(globalMessages.changeStatus)}</MenuItem>
        </CellPopupMenu>
      ),
    },
  ];

  return tableColumn;
}

export default getTableColumn;
