import styled from 'styled-components';

export const Info = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const AssetList = styled.ul`
  list-style: none;
  /* border: solid black; */
  border-radius: 10px;
  padding: 20px 30px;
  background: white;
  margin: 20px 550px;

  box-shadow: 4px 4px 6px rgba(0, 0, 0, 0.1);

  li {
    padding: 5px 0;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    
    span {
      color:#9d9d9c;

      strong {
        color: #706f6f;
        font-weight: 600;
        letter-spacing: 0.5px;
        margin-right: 5px;
      }
    }
  }
`;

export const Content = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;

  margin-top: 30px;

  button {
    margin-left: 105px;
  }
`;