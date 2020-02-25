import styled from 'styled-components';

export const AssetList = styled.ul`
  list-style: none;
  border: solid black;
  border-radius: 10px;
  padding: 10px 15px;

  margin: 20px 550px;

  li {
    padding: 5px 0;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    
    strong{
      margin-right: 5px;
    }
  }
`;

export const Content = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content:center;
`;