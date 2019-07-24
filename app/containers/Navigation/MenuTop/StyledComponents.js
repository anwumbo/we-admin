import styled from 'styled-components';
import { colorConfig } from 'config/style';

export const TopNavContainer = styled.div`
  position: fixed;
  top: 0;
  right: 0;
  left: 0;
  height: 70px;
  z-index: 20;
  background: #1a1a1a;
  display: inline-flex;
  justify-content: space-between;
`;

export const Left = styled.div`
  display: inline-flex;
`;

export const CompanyLogo = styled.div`
  padding: 16px;
  height: 70px;
  width: 70px;

  img {
    border-radius: 4px;
    width: 50px;
  }
`;

export const Right = styled.div`
  display: inline-flex;
`;

export const VerticalDivider = styled.div`
  height: 70px;
  margin: 0;
  width: 1px;
  background-color: ${colorConfig.borderInput};
`;
