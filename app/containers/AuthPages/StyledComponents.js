import styled, { css } from 'styled-components';
import colorConfig from 'config/style';

export const Wrapper = styled.div`
  width: 100%;
  height: 100%;
  position: fixed;
  top: 0;
  left: 0;
  background-color: ${colorConfig.grayBackground};
  z-index: 10;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

export const FormWrapper = styled.div`
  width: 424px;
  max-width: 90%;
  max-height: 534px;
  background-color: white;
  padding: 40px;
  position: relative;

  a {
    font-size: 14px;
    text-decoration: underline;
    display: flex;
    justify-content: center;
    color: ${colorConfig.darkPrimary};
  }
`;

export const FormAlertWrapper = styled.div`
  text-align: center;
  position: relative;
  width: 100%;
  height: 0px;
`;

export const AlertContent = styled.div`
  font-size: 14px;
  font-weight: normal;

  position: absolute;
  top: -20px;
  width: 100%;
  min-height: 40px;
  border-radius: 2px;

  display: flex;
  align-items: center;
  justify-content: center;

  background-color: ${colorConfig.borderInput};
  animation: swing-in-top-fwd 0.5s cubic-bezier(0.175, 0.885, 0.32, 1.275) both;

  &:before {
    content: '';
    position: absolute;
    top: -5px;
    left: 50%;
    width: 0;
    height: 0;
    transform: translateX(-50%);
    border-left: 5px solid transparent;
    border-right: 5px solid transparent;
    border-bottom: 5px solid ${colorConfig.borderInput};
  }

  @keyframes swing-in-top-fwd {
    0% {
      transform: rotateX(-100deg);
      transform-origin: top;
      opacity: 0;
    }
    100% {
      transform: rotateX(0deg);
      transform-origin: top;
      opacity: 1;
    }
  }

  ${(props) =>
    props.error &&
    css`
      color: ${colorConfig.error};
    `};

  ${(props) =>
    props.success &&
    css`
      color: ${colorConfig.primary};
    `};
`;
