/* eslint-disable react/prop-types */
import React from 'react';
import { Input } from 'antd';
import styled, { css } from 'styled-components';
import { colorConfig } from 'config/style';

const inputErrorStyle = css`
  border: 1px solid ${colorConfig.error} !important;

  :focus {
    box-shadow: 0 0 0 2px ${colorConfig.error}20 !important;
  }
`;

const AntdInput = ({ error, ...rest }) => <Input {...rest} />;

const AntdTextArea = ({ error, ...rest }) => <Input.TextArea {...rest} />;

export const StyledInput = styled(AntdInput)`
  &.ant-input,
  input {
    ${(props) => props.error && inputErrorStyle};

    ${/* eslint-disable indent */
    (props) =>
      props.disabled &&
      css`
        background-color: ${colorConfig.disabled};
        border-radius: 5px;

        cursor: not-allowed;
        color: ${colorConfig.text};
      `};
  }
`;

export const StyledTextArea = styled(AntdTextArea)`
  ${(props) => props.error && inputErrorStyle};
`;

export default StyledInput;
