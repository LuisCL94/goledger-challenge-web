import { createGlobalStyle } from "styled-components";

export default createGlobalStyle`
  *{
    margin: 0;
    padding: 0;
    outline: 0;
    box-sizing: border-box;
}
  html, body, #root {
    min-height: 100%;
    background:#f0f0f0;
  }

  body {
    -webkit-font-smoothing: antialiased !important;
    overflow-y:scroll;
  }
  body, input, button {
    color: #222;
    font-size: 14px;
    font-family: Arial, Helvetica, sans-serif;
  }

  button {
    cursor: pointer;
  }
`;
