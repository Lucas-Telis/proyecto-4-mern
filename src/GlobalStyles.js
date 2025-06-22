import { createGlobalStyle } from 'styled-components'

const GlobalStyle = createGlobalStyle`
* {
  box-sizing: border-box;
  margin: 0;
  padding: 0;
}

body {
font-family: 'Roboto', sans-serif;
transition: all 0.3s ease;
}

button {
  display: inline-block;
  padding: 10px 20px;
  font-size: 18px;
  cursor: pointer;
  text-align: center;
  color: #fff;
  background-color:rgb(0, 3, 77);
  border: none;
  border-radius: 13px;
  box-shadow: 0 7px #999;
}

button:hover {background-color:rgb(144, 148, 222)}

button:active {
  background-color:rgb(144, 148, 222);
  box-shadow: 0 3px #999;
  transform: translateY(4px);
}
`
export default GlobalStyle
5
