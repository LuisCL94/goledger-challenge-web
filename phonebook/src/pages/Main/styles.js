import styled, { keyframes, css } from "styled-components";

const rotate = keyframes`
  from {
    transform: rotate(0deg);

  }  to {
    transform: rotate(360deg);
  }
`;

export const SchemeInput = styled.div.attrs(props => ({
}))`

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
  justify-content:center;

  button {
    margin-top: 8px;
    margin-left: 10px;
    height: 35px;
  }
`;

export const TitlePage = styled.h1`
  margin-top: 30px;
  text-align: center;
`;

export const AssetList = styled.ul`
  list-style: none;
  margin-top: 5px;
  /* border: solid black; */
  border-radius: 10px;
  padding: 0 20px;
  background: white;
  margin: 20px 400px;
  
  box-shadow: 4px 4px 6px rgba(0, 0, 0, 0.1);

  span {
    color: #706f6f;
    font-weight: 600;
    letter-spacing: 0.5px;
  }

  li {
    padding: 10px 0;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;

    & + li {
      border-top: 1px solid #dbdbdb;
    }

    a {
      color: blue;
      text-decoration: none;
      margin-left: 40px;
      &:hover {
        color: #7159c1;
      }
    }
  }
`;

export const AddButton = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;

  background: #7159c1;
  border: 0;
  padding: 15px 15px;
  margin-left: 10px;
  margin-top: 7px;
  border-radius: 4px;

  color: white;
  display: flex;
  justify-content: center;
  align-items: center;
`;