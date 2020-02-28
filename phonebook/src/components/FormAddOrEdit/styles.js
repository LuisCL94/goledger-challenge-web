import styled, { keyframes, css } from 'styled-components';

const rotate = keyframes`
  from {
    transform: rotate(0deg);

  }  to {
    transform: rotate(360deg);
  }
`;

export const Content = styled.div`
  
  ${props =>
    props.loading &&
    css`
      > svg {
        animation: ${rotate} 2s linear infinite;
      }
  `}
  
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;

  button {
    margin-right: 15px;
  }
  margin-top: 115px;
`;

export const Form = styled.div`
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
  
  border-radius: 10px;
  box-shadow: 4px 4px 6px rgba(0, 0, 0, 0.1);

  background: white;

  margin: 0 423px;

  padding-top: 6px;
  padding-bottom:20px;

  margin-top: 20px;
  margin-bottom: 35px;
  
`;