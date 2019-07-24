/**
 *
 * AntTable component
 *
 * Using Table component of Ant Design
 * Visit https://ant.design/components/table for documentation
 *
 * Table component already includes Loading component and Pagination component
 *
 * @prop {array} data:
 * @prop {array} columns:
 * @prop {bool} loading:
 * @prop {bool} wrapCell: make table cell wrap in 1 line or many
 * @prop {int} currentPage:
 * @prop {int} totalPages:
 * @prop {func} onChangePage:
 * @prop {string} margin:
 * @prop {object} style:
 *
 */

import React from 'react';
import PropTypes from 'prop-types';
import { Table } from 'antd';
import styled, { css } from 'styled-components';

import Loading from 'components/Loading';
import { colorConfig } from 'config/style';
import NoDataBanner from 'components/NoData/Banner';
import Pagination from 'components/Table/Pagination';

const AntTable = ({
  loading = false,
  dataSource = [],
  columns = [],
  currentPage = 1,
  totalPages = 0,
  onChangePage,
  margin,
  style,
  tableStyle,
  scroll,
  noDataBanner = <NoDataBanner />,
  wrapContent = true,
  ...rest
}) => (
  <TableContainer
    style={{ ...style, margin }}
    noData={dataSource.length === 0 && !loading}
  >
    <StyledAntTable
      columns={columns}
      dataSource={dataSource}
      sortable
      noDataText=""
      resizable={false}
      showPagination={false}
      pagination={false}
      expandRowByClick
      scroll={{ x: true, ...scroll }}
      style={tableStyle}
      wrapContent={wrapContent}
      {...rest}
    />

    {loading && <Loading height={dataSource.length === 0 ? '580px' : null} />}

    {!loading && dataSource.length === 0 && noDataBanner}

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

AntTable.propTypes = {
  loading: PropTypes.bool.isRequired,
  wrapContent: PropTypes.bool,
  dataSource: PropTypes.array.isRequired,
  columns: PropTypes.array.isRequired,
  currentPage: PropTypes.number,
  totalPages: PropTypes.number,
  onChangePage: PropTypes.func,
  margin: PropTypes.string,
  style: PropTypes.object,
  tableStyle: PropTypes.object,
  scroll: PropTypes.object,
  noDataBanner: PropTypes.object,
};

AntTable.defaultProps = {
  noDataBanner: <NoDataBanner />,
};

export default AntTable;

/**
 * Styled-components
 */

const baseAntTableCSS = css`
  .ant-table-body {
    overflow-x: auto !important;
  }

  .ant-empty {
    display: none;
  }

  .ant-table-thead > tr > th {
    border-top: 1px solid ${colorConfig.borderInput};
    border-bottom: 1px solid ${colorConfig.borderInput};
    font-weight: 600;
    white-space: nowrap;
    width: fit-content;
  }

  .ant-table-tbody > tr > td {
    border-bottom: none;
  }

  .ant-table-body {
    border-bottom: 1px solid ${colorConfig.borderInput};
  }

  .ant-table-tbody {
    tr:nth-child(even) {
      background-color: rgba(244, 244, 244, 0.5);
    }
  }

  .ant-table-expanded-row {
    & > td {
      &:first-child:empty::after {
        content: '';
      }
    }
  }

  .ant-table td {
    white-space: nowrap;
    max-width: 300px;
    overflow: hidden;
    text-overflow: ellipsis;

    &:empty:after {
      content: 'N/A';
      color: #d5d5d5;
    }
  }

  .ant-table-tbody > tr.ant-table-row-selected td {
    background-color: inherit;
  }
`;

const StyledAntTable = styled(Table)`
  ${baseAntTableCSS};

  ${(props) =>
    !props.wrapContent &&
    css`
      .ant-table td {
        white-space: pre-wrap;
        overflow-wrap: break-word;
      }
    `};
`;

const TableContainer = styled.div`
  position: relative;

  ${(props) =>
    props.noData &&
    css`
      .ant-table-placeholder {
        display: none;
      }
      .no-data-banner {
        border-bottom: 1px solid ${colorConfig.borderInput};
      }
      .ant-table-body {
        border-bottom: none;
      }
    `};
`;
