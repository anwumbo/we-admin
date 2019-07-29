import React from 'react';
import PropTypes from 'prop-types';
import { Helmet } from 'react-helmet';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { bindActionCreators, compose } from 'redux';

import { formatMessage } from 'containers/LanguageProvider/IntlGlobalProvider';
import globalMessages from 'containers/App/messages';
import Typography from 'components/Typography';
import { FieldRow, FieldCol } from 'components/Layout';
import Input from 'components/FormElements/Input';
import Button from 'components/Button';
import { routes } from 'config/routes';
import Table from 'components/Table';
import { createStructuredSelector } from 'reselect';
import injectReducer from 'utils/injectReducer';
import {
  makeSelectTourGuide,
  makeSelectLoading,
  makeSelectPagination,
} from './selectors';
import { Wrapper } from './StyledComponents';
import reducer from './reducer';
import getTableColumn from './getTableColumn';

export class TourGuide extends React.Component {
  state = {};

  render() {
    const { loading, listTourGuide, pagination } = this.props;

    return (
      <Wrapper>
        <Helmet>
          <title>{formatMessage(globalMessages.tourGuide)}</title>
        </Helmet>

        <Typography theme="primary" uppercase noMarginTop type="heading2">
          <div>{formatMessage(globalMessages.tourGuide)}</div>
        </Typography>

        <FieldRow>
          <FieldCol md={6}>
            <Input
              placeholder={formatMessage(globalMessages.searchPlaceholder)}
              search
            />
          </FieldCol>
          <FieldCol md={18}>
            <Link to={routes.admin.tourGuide.list} style={{ float: 'right' }}>
              <Button theme="primary">
                {formatMessage(globalMessages.add)}
              </Button>
            </Link>
          </FieldCol>
        </FieldRow>

        <Table
          loading={loading}
          data={listTourGuide}
          columns={getTableColumn()}
          currentPage={pagination.currentPage}
          totalPages={pagination.totalPages}
          margin="0px -20px"
        />
      </Wrapper>
    );
  }
}

TourGuide.propTypes = {
  listTourGuide: PropTypes.array,
  loading: PropTypes.bool,
  pagination: PropTypes.object,
};

const mapStateToProps = createStructuredSelector({
  listTourGuide: makeSelectTourGuide(),
  loading: makeSelectLoading(),
  pagination: makeSelectPagination(),
});

const mapDispatchToProps = (dispatch) => bindActionCreators({}, dispatch);

const withConnect = connect(
  mapStateToProps,
  mapDispatchToProps,
);

const withReducer = injectReducer({
  key: 'Tour_Guide',
  reducer,
});

export default compose(
  withConnect,
  withReducer,
)(TourGuide);
