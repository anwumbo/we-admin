/**
 *
 * Pagination
 * @prop {number} totalPages: total pages ( = total-records / rows-per-page)
 * @prop {func} onChangePage(pageNumber): call back when page changed
 *
 */

import React from 'react';
import PropTypes from 'prop-types';
import styled, { css } from 'styled-components';

import { colorConfig } from 'config/style';
import globalMessages from 'containers/App/messages';
import formatMessage from 'containers/LanguageProvider/formatMessage';

const Wrapper = styled.div`
  display: flex;
  justify-content: center;
  text-transform: uppercase;
  padding: 20px 0;

  .active-page {
    font-weight: bold;
  }
`;

const PaginationButton = styled.div`
  padding: 5px 12px;
  cursor: pointer;

  :hover {
    background-color: ${colorConfig.tabHeader};
  }
`;

const First = styled(PaginationButton)`
  ${(props) =>
    props.isFirst &&
    css`
      cursor: not-allowed;
    `};
`;

const Last = styled(PaginationButton)`
  ${(props) =>
    props.isLast &&
    css`
      cursor: not-allowed;
    `};
`;

const Prev = styled(First)``;
const Next = styled(Last)``;

const More = styled.div`
  padding: 5px 12px;
`;

const PAGE_GROUP = 5;

export default class Pagination extends React.Component {
  state = {
    startPageGroup: 1,
    endPageGroup:
      this.props.totalPages > PAGE_GROUP ? PAGE_GROUP : this.props.totalPages,
    currentPage: this.props.currentPage,
  };

  componentWillReceiveProps(nextProps) {
    if (nextProps.currentPage === 1) {
      this.setState({
        startPageGroup: 1,
        endPageGroup:
          nextProps.totalPages > PAGE_GROUP ? PAGE_GROUP : nextProps.totalPages,
        currentPage: nextProps.currentPage,
      });
    } else if (
      this.props.totalPages !== nextProps.totalPages ||
      (this.props.currentPage !== nextProps.currentPage &&
        nextProps.currentPage > 0)
    ) {
      this.changeCurrentPage(nextProps.currentPage, nextProps.totalPages);
    }
  }

  getPositiveNumber = (number) => (number <= 1 ? 1 : number);

  goToPage = (page) => {
    const { totalPages, onChangePage, loading } = this.props;

    if (loading) return;

    if (page >= 1 && page <= totalPages && onChangePage) {
      onChangePage(page);
      this.changeCurrentPage(page);
    }
  };

  changeCurrentPage = (pageToGo, totalPages = this.props.totalPages) => {
    // const { startPageGroup, endPageGroup } = this.state;

    let page = pageToGo;

    if (page < 1) return;
    if (page > totalPages) {
      page = totalPages;
    }

    let left = Math.floor((pageToGo - 1) / PAGE_GROUP) * PAGE_GROUP + 1;
    let right = left + PAGE_GROUP - 1;

    if (totalPages - left < PAGE_GROUP) {
      left = totalPages - PAGE_GROUP + 1;
      right = totalPages;
    }

    if (right > totalPages) {
      right = totalPages;
    }

    if (left < 1) {
      left = 1;
    }

    this.setState({
      currentPage: page,
      startPageGroup: left,
      endPageGroup: right,
    });
  };

  renderButtonPages = () => {
    const { startPageGroup, endPageGroup } = this.state;
    const currentPage = this.getPositiveNumber(this.state.currentPage);
    const pages = [];

    for (let i = startPageGroup; i <= endPageGroup; i += 1) {
      pages.push(
        <PaginationButton
          className={currentPage === i ? 'active-page' : ''}
          key={i}
          onClick={() => this.goToPage(i)}
        >
          {i}
        </PaginationButton>,
      );
    }

    return pages;
  };

  render() {
    const { totalPages, ...rest } = this.props;
    const { currentPage, startPageGroup, endPageGroup } = this.state;

    return (
      <Wrapper {...rest}>
        <First isFirst={currentPage === 1} onClick={() => this.goToPage(1)}>
          « {formatMessage(globalMessages.first)}
        </First>

        <Prev
          isFirst={currentPage === 1}
          onClick={() => this.goToPage(currentPage - 1)}
        >
          ‹ {formatMessage(globalMessages.prev)}
        </Prev>

        {startPageGroup > 1 && <More>...</More>}

        {this.renderButtonPages()}

        {endPageGroup < totalPages && <More>...</More>}

        <Next
          isLast={currentPage === totalPages}
          onClick={() => this.goToPage(currentPage + 1)}
        >
          {formatMessage(globalMessages.next)} ›
        </Next>

        <Last
          isLast={currentPage === totalPages}
          onClick={() => this.goToPage(totalPages)}
        >
          {formatMessage(globalMessages.last)} »
        </Last>
      </Wrapper>
    );
  }
}

Pagination.propTypes = {
  totalPages: PropTypes.number,
  currentPage: PropTypes.number,
  onChangePage: PropTypes.func.isRequired,
  loading: PropTypes.bool,
};

Pagination.defaultProps = {
  totalPages: 1,
  currentPage: 1,
  loading: false,
};
