import styled, { css } from 'styled-components';

export const Wrapper = styled.aside`
  float: left;
  position: fixed;
  display: flex;
  left: 0;
  bottom: 0;
  top: 70px;
  z-index: 1;
  width: 70px;
  background-color: #1a1a1a;
  box-shadow: 0 -5px 4px 2px rgba(0, 0, 0, 0.1);
`;

export const MenuContainer = styled.ul`
  width: 70px;
  list-style-type: none;
  margin: 0;
  padding: 0;
  margin-top: 20px;
`;

export const MenuItem = styled.div`
  height: 70px;
  padding: 10px;
  position: relative;
  color: white;
  text-align: center;

  :hover {
    background-color: rgba(255, 255, 255, 0.1);

    .anticon {
      color: #05c2d1;
    }
  }

  ${(props) =>
    props.active &&
    css`
      background-color: rgba(255, 255, 255, 0.1);

      i {
        color: #05c2d1;
      }
      ::after {
        content: ' ';
        position: absolute;
        left: 0;
        top: 0;
        background-color: #05c2d1;
        height: 70px;
        width: 4px;
      }
    `};
`;

export const Icon = styled.span`
  img {
    margin-top: 8px;
    width: 32px;
    height: 34px;
  }
`;
