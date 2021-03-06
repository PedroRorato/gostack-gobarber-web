import styled from 'styled-components';
import { shade } from 'polished';

export const Container = styled.button`
  background: #ff9000;
  border-radius: 10px;
  border: 0;
  color: #313238;
  font-weight: 500;
  height: 56px;
  margin-top: 16px;
  padding: 0 16px;
  width: 100%;
  transition: background 0.3s;

  &:hover {
    background: ${shade(0.2, '#ff9000')};
  }
`;
