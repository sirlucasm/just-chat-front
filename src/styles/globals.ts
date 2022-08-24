import { createGlobalStyle } from "styled-components";
import { colors } from "./constants";

export const GlobalStyle = createGlobalStyle`
  html,
  body {
    padding: 0;
    margin: 0;
    font-family: Bambino;
    background-color: ${colors.TERTIARY};
  }

  a {
    color: inherit;
    text-decoration: none;
  }

  * {
    box-sizing: border-box;
  }
`;
