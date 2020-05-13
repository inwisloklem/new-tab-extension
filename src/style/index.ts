import {createGlobalStyle} from 'styled-components'

export const Style = createGlobalStyle`
  html {
    --color-background-from: #348ac7;
    --color-background-to: #7474bf;
    --color-box-shadow: #444;
    --color-text: #fff;
  }

  html, body {
    overflow: hidden;
    height: 100%;
    min-height: 100vh;

  }

  body, button {
    font-family: 'Jost', sans-serif;
  }

  body, div, dl, dt, dd, ul, li, h1, h2, h3, h4, h5, h6, pre, code, form, figure, fieldset,
  input, textarea, p, blockquote, th, td {
    margin: 0;
    padding: 0;
  }

  main {
    overflow-y: auto;
    height: 100%;
  }

  table {
    border-spacing: 0;
    border-collapse: collapse;
  }

  fieldset, img, abbr {
    border: none;
  }

  address, caption, cite, code, dfn, em, strong, th, var {
    font-weight: normal;
    font-style: normal;
  }

  ul li {
    list-style: none;
  }

  caption, th {
    text-align: left;
  }

  h1, h2, h3, h4, h5, h6 {
    font-weight: normal;
    font-size: 100%;
  }

  sup {
    vertical-align: text-top;
  }

  sub {
    vertical-align: text-bottom;
  }

  button, input, textarea, select {
    font-weight: inherit;
    font-size: inherit;
    font-family: inherit;
  }

  legend {
    color: black;
  }

  article, aside, details, figcaption, figure, footer, header, hgroup, menu, nav, section, main {
    display: block;
  }

  img {
    max-width: 100%;
    height: auto;
  }
`
