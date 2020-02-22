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
`;

export const TitlePage = styled.h1`
  margin-top: 30px;
  text-align: center;
`;

export const AssetList = styled.ul`
  list-style: none;
  margin-top: 5px;
  border: solid black;
  border-radius: 10px;
  padding: 0 20px;

  margin: 20px 400px;

  li {
    padding: 15px 0;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;

    & + li {
      border-top: 1px solid #eee;
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

export const Options = styled.ul`
  list-style: none;
  display: flex;
  justify-content: center;
  align-items: center;
`;