/* eslint-disable react/prefer-stateless-function */
import React from 'react';
import { Tooltip } from 'antd';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import uuid from 'uuid';
import { compose, bindActionCreators } from 'redux';
import { createStructuredSelector } from 'reselect';
import { connect } from 'react-redux';

import { makeSelectLocation } from 'containers/App/selectors';
import formatMessage from 'containers/LanguageProvider/formatMessage';
import { Wrapper, MenuContainer, MenuItem, Icon } from './StyledComponents';
import { adminNavItems } from './navigationItems';

export class SideNav extends React.Component {
  isActiveMenuItem = (path) => {
    const location = this.getPathname();
    return location === path;
  };

  getPathname = () => this.props.location.pathname;

  render() {
    return (
      <Wrapper>
        <MenuContainer>
          {adminNavItems.map((item) => (
            <Tooltip
              key={uuid()}
              placement="right"
              title={formatMessage(item.label)}
            >
              <div>
                <Link to={item.path}>
                  <MenuItem active={this.isActiveMenuItem(item.path)}>
                    <Icon>
                      {this.isActiveMenuItem(item.path)
                        ? item.activeIcon
                        : item.icon}
                    </Icon>
                  </MenuItem>
                </Link>
              </div>
            </Tooltip>
          ))}
        </MenuContainer>
      </Wrapper>
    );
  }
}

SideNav.propTypes = {
  location: PropTypes.object,
};

const mapStateToProps = createStructuredSelector({
  location: makeSelectLocation(),
});
const mapDispatchToProps = (dispatch) => bindActionCreators({}, dispatch);

const withConnect = connect(
  mapStateToProps,
  mapDispatchToProps,
);

export default compose(withConnect)(SideNav);
