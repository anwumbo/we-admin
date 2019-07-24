/**
 *
 * Table component
 *
 * Using react-table@6.8.6
 * Visit https://react-table.js.org/#/story/readme for documentation
 *
 * Table component already includes Loading component and Pagination component
 *
 * @prop {array} data:
 * @prop {array} columns:
 * @prop {bool} loading:
 * @prop {int} currentPage:
 * @prop {int} totalPages:
 * @prop {func} onChangePage:
 * @prop {string} margin:
 * @prop {object} style:
 * @prop {object} tableStyle:
 */

import React from 'react';
import PropTypes from 'prop-types';
import ReactTable from 'react-table';
import styled, { css } from 'styled-components';

import Loading from 'components/Loading';
import { colorConfig } from 'config/style';
import NoDataBanner from 'components/NoData/Banner';
import Pagination from 'components/Table/Pagination';

const Table = ({
  loading = false,
  data = [],
  columns = [],
  currentPage = 1,
  totalPages = 1,
  onChangePage,
  margin,
  style,
  tableStyle,
  noBorderBottom = false,
  wrapContent = true,
  ...rest
}) => (
  <TableContainer
    style={{ ...style, margin }}
    noData={data.length === 0}
    noBorderBottom={noBorderBottom}
  >
    <RCTable
      data={data}
      columns={columns}
      sortable={false}
      noDataText=""
      resizable={false}
      showPagination={false}
      minRows={loading ? data.length || 10 : 0}
      className="-striped -highlight"
      style={tableStyle}
      manual
      wrapContent={wrapContent}
      {...rest}
    />

    {loading && <Loading />}

    {!loading && data.length === 0 && <NoDataBanner />}

    {totalPages > 1 && (
      <Pagination
        currentPage={currentPage}
        totalPages={totalPages}
        onChangePage={onChangePage}
        loading={loading}
      />
    )}
  </TableContainer>
);

Table.propTypes = {
  loading: PropTypes.bool,
  wrapContent: PropTypes.bool,
  data: PropTypes.array,
  columns: PropTypes.array.isRequired,
  currentPage: PropTypes.number.isRequired,
  totalPages: PropTypes.number.isRequired,
  onChangePage: PropTypes.func,
  margin: PropTypes.string,
  style: PropTypes.object,
  tableStyle: PropTypes.object,
  noBorderBottom: PropTypes.bool,
};

export default Table;

/**
 * Styled-components
 */

export const RCTableBaseCSS = css`
  border: 0;

  .rt-thead {
    border-top: 1px ${colorConfig.borderInput} solid;
    border-bottom: 1px ${colorConfig.borderInput} solid;
    box-shadow: none !important;
  }
  .rt-th {
    text-align: left;
    padding: 20px 7px !important;
    font-weight: 600;
    border: 0 !important;
    white-space: nowrap;
    width: fit-content;
  }
  .rt-tbody .rt-tr {
    padding: 14px 0 !important;
    :hover {
      background-color: ${colorConfig.hover} !important;
    }
  }
  .rt-tbody {
    border-bottom: 1px ${colorConfig.borderInput} solid;
  }
  .rt-tr-group {
    min-height: 53px;
    border-bottom: 0 !important;

    &:last-child {
      border-bottom-width: 1px;
    }
  }
  .rt-td {
    padding: 0 5px;
  }
  .rt-noData {
    display: none;
  }
  .rt-th,
  .rt-td {
    &:first-child {
      padding-left: 30px !important;
    }
    &:last-child {
      padding-right: 30px !important;
    }
  }
  .rt-td:empty:after {
    content: 'N/A';
    color: #d5d5d5;
  }
`;

const RCTable = styled(ReactTable)`
  ${RCTableBaseCSS};

  ${(props) =>
    !props.wrapContent &&
    css`
      .rt-td {
        white-space: pre-wrap;
        overflow-wrap: break-word;
      }
    `};
`;

const TableContainer = styled.div`
  position: relative;

  ${(props) =>
    (props.noData || props.noBorderBottom) &&
    css`
      .rt-tbody {
        border-bottom: none !important;
      }
    `};
`;
