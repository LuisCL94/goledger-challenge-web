import styled from 'styled-components';

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
