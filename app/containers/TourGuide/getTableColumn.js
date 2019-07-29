import React from 'react';
import { Link } from 'react-router-dom';

import ColorStatus from 'components/ColorStatus';
import formatMessage from 'containers/LanguageProvider/formatMessage';
import globalMessages from 'containers/App/messages';
import CellPopupMenu, { MenuItem } from 'components/Table/CellPopupMenu';
import { routes } from 'config/routes';
import { fields } from './constants';

function getTableColumn() {
  const tableColumn = [
    {
      Header: formatMessage(globalMessages.id),
      accessor: fields.ID,
    },
    {
      Header: formatMessage(globalMessages.title),
      accessor: fields.Title,
    },
    {
      Header: formatMessage(globalMessages.status),
      id: 'status',
      accessor: (data) => (
        <ColorStatus
          status={
            data.status
              ? formatMessage(globalMessages.active)
              : formatMessage(globalMessages.inactive)
          }
        />
      ),
    },
    {
      Header: formatMessage(globalMessages.forResident),
      accessor: fields.ForResident,
    },
    {
      id: 'cell-action',
      maxWidth: 50,
      accessor: (data) => (
        <CellPopupMenu>
          <MenuItem>
            <Link to={routes.admin.tourGuide.edit.replace(':id', data.email)}>
              {formatMessage(globalMessages.edit)}
            </Link>
          </MenuItem>
          <MenuItem>{formatMessage(globalMessages.delete)}</MenuItem>
        </CellPopupMenu>
      ),
    },
  ];

  return tableColumn;
}

export default getTableColumn;
