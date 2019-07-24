/**
 * Button Component
 *
 * @prop {string} theme: theme of button (info, secondary, warning, danger, cancel, pink and default (no specify `theme` props))
 * @prop {bool} outline: No background color
 * @prop {bool} small: make button smaller
 * @prop {bool} disabled: make button disabled
 * @prop {bool} circle: make circle button
 * @prop {bool} capitalize: capitalize first letter of each word in label
 * @prop {bool} uppercase: capitalize all letter in label
 *
 */
import React from 'react';
import styled, { css } from 'styled-components';
import { colorConfig } from 'config/style';

function getColor(props) {
  const { theme, outline } = props;
  let background;
  let text;
  let border;

  switch (theme) {
    case 'primary':
    case 'info':
      background = colorConfig.btn;
      border = colorConfig.btn;
      text = '#FFF';
      break;
    case 'close':
      background = '#FFF';
      border = colorConfig.info;
      text = colorConfig.info;
      break;
    case 'pink':
      background = colorConfig.pink;
      border = colorConfig.pink;
      text = '#FFF';
      break;
    case 'warning':
      background = colorConfig.warning;
      border = colorConfig.warning;
      text = '#FFF';
      break;
    case 'danger':
      background = colorConfig.danger;
      border = colorConfig.danger;
      text = '#FFF';
      break;
    case 'cancel':
      background = colorConfig.cancel;
      border = colorConfig.cancel;
      text = '#FFF';
      break;
    case 'attach':
      background = colorConfig.bgBody;
      border = colorConfig.bgBody;
      text = colorConfig.text; // eslint-disable-line
      break;
    default:
      background = '#FFF';
      border = colorConfig.borderInput;
      text = colorConfig.text; // eslint-disable-line
      break;
  }
  if (outline && theme !== 'close') {
    text = background === '#FFF' ? '#000' : background;
    background = '#FFF';
  }
  return { background, text, border };
}

/* eslint-disable indent */
const Button = styled.button`
  cursor: pointer;
  display: inline-block;
  vertical-align: middle;
  touch-action: manipulation;
  font-size: 14px;
  line-height: 21px;
  min-height: 40px;
  letter-spacing: 0.3px;
  text-transform: capitalize;
  padding: 6px 25px;
  border-radius: 3px;
  border: 1px ${colorConfig.borderInput} solid;

  :hover {
    transition: all, 0.3s ease-in-out;
    ${(props) =>
      props.outline &&
      css`
        background-color: ${getColor(props).border} !important;
        color: white;
      `}
  }

  :focus,
  :active {
    outline: none !important;
    box-shadow: none;
  }

  ${(props) => {
    const { background, text, border } = getColor(props);
    return css`
      background-color: ${background};
      color: ${text};
      border-color: ${border};
    `;
  }};


  ${(props) =>
    props.small &&
    css`
      font-size: 12px;
      line-height: 12px;
      padding: 3px 10px;
      height: 24px !important;
      min-height: 24px !important;
      ${props.circle &&
        css`
          width: 24px !important;
          height: 24px !important;
          font-size: 15px !important;
          padding: 0 !important;
          display: inline-flex;
          justify-content: center;
        `};
    `}

  ${(props) =>
    props.medium &&
    css`
      font-size: 14px;
      line-height: 16px;
      padding: 8px 16px;
      height: 32px !important;
      min-height: 32px !important;
      ${props.circle &&
        css`
          width: 32px !important;
          height: 2432px !important;
          font-size: 14px !important;
          padding: 0 !important;
          display: inline-flex;
          justify-content: center;
        `};
    `}

  ${(props) =>
    props.disabled &&
    css`
      opacity: 0.65;
      cursor: not-allowed;
      :hover {
        filter: brightness(100%);
      }
    `}

  ${(props) =>
    props.circle &&
    css`
      border-radius: 50%;
      padding: 0px;
      width: 35px;
      height: 35px;
      min-height: 35px;
      font-size: 20px;
      line-height: 35px;
    `}

  ${(props) => props.uppercase && 'text-transform: uppercase'};

  ${(props) =>
    props.linkButton &&
    css`
      border: 0;

      :hover {
        color: ${colorConfig.primary};
      }
    `}
  
  ${(props) =>
    props.text &&
    css`
      border: none;
      :hover {
        color: ${colorConfig.primary};
      }
    `};

  ${(props) =>
    props.width &&
    css`
      width: ${props.width};
    `};
  `;

export default (props) => <Button type="button" {...props} />;
