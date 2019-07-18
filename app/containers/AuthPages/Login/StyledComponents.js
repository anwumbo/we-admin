import styled from 'styled-components';
import colorConfig from 'config/style';

export const FormWrapper = styled.div`
  margin-top: 60px;

  button {
    margin-top: 20px;
    margin-bottom: 90px;
  }
`;

export const TermWrapper = styled.div`
  position: absolute;
  bottom: 90px;
  font-size: 11.7px;
  padding-right: 25px;
  span {
    color: ${colorConfig.darkPrimary};
    font-weight: bold;
    cursor: pointer;
  }
`;
