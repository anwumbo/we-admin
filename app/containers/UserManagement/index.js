import React from 'react';
import PropTypes from 'prop-types';
import { Helmet } from 'react-helmet';
import { createStructuredSelector } from 'reselect';
import { connect } from 'react-redux';
import { bindActionCreators, compose } from 'redux';
import { Link } from 'react-router-dom';

import injectReducer from 'utils/injectReducer';
import formatMessage from 'containers/LanguageProvider/formatMessage';
import globalMessages from 'containers/App/messages';
import Typography from 'components/Typography';
import Table from 'components/Table';
import { FieldRow, FieldCol } from 'components/Layout';
import Input from 'components/FormElements/Input';
import Select from 'components/FormElements/Select';
import Button from 'components/Button';
import { routes } from 'config/routes';

import getTableColumn from './getTableColumn';
import {
  makeSelectUsers,
  makeSelectLoading,
  makeSelectPagination,
} from './selectors';
import reducer from './reducer';
import { Wrapper } from './StypledComponents';
import { RELATED_PAGE_OPTIONS } from './constants';

export class UserManagement extends React.Component {
  state = {};

  render() {
    const { pagination, users, loading } = this.props;

    return (
      <Wrapper>
        <Helmet>
          <title>{formatMessage(globalMessages.usersManagement)}</title>
        </Helmet>

        <Typography theme="primary" uppercase noMarginTop type="heading2">
          <div>{formatMessage(globalMessages.usersManagement)}</div>
        </Typography>

        <FieldRow>
          <FieldCol md={6}>
            <Input
              placeholder={formatMessage(globalMessages.searchPlaceholder)}
              search
              // onChange={this.onChangeFilter(KEYWORD)}
              // onPressEnter={this.onPressEnter}
            />
          </FieldCol>
          {/* <FieldCol md={6}>
            <Select
              options={RELATED_PAGE_OPTIONS}
              isClearable
              // onChange={this.onChangeFilter(ROLE)}
              placeholder={formatMessage(globalMessages.selectRole)}
            />
          </FieldCol>
          <FieldCol md={6}>
            <Select
              options={RELATED_PAGE_OPTIONS}
              isClearable
              // onChange={this.onChangeFilter(STATUS)}
              placeholder={formatMessage(globalMessages.selectStatus)}
            />
          </FieldCol> */}
          <FieldCol md={6}>
            <Link to={routes.admin.users} style={{ float: 'right' }}>
              <Button theme="primary">
                {formatMessage(globalMessages.add)}
              </Button>
            </Link>
          </FieldCol>
        </FieldRow>

        <Table
          loading={loading}
          data={users || []}
          columns={getTableColumn()}
          currentPage={pagination.currentPage}
          totalPages={pagination.totalPages}
          // onChangePage={this.onReloadPage}
          margin="0px -20px"
        />
      </Wrapper>
    );
  }
}

const mapStateToProps = createStructuredSelector({
  users: makeSelectUsers(),
  loading: makeSelectLoading(),
  pagination: makeSelectPagination(),
});

const mapDispatchToProps = (dispatch) => bindActionCreators({}, dispatch);

const withConnect = connect(
  mapStateToProps,
  mapDispatchToProps,
);

const withReducer = injectReducer({
  key: 'User_Managements',
  reducer,
});

export default compose(
  withReducer,
  withConnect,
)(UserManagement);
