import React from 'react'
import { createGlobalStyle } from 'styled-components';
import Template from './Components/Template';
import Head from './Components/Head';
import List from './Components/List';
import Create from './Components/Create';
import { TodoProvider } from './TodoContext';

const GlobalStyle = createGlobalStyle`
  body{
    background:#e9ecef;
  }
`;

const App = () =>{
  return (
    <TodoProvider>
      <GlobalStyle />
      <Template>
        <Head />
        <List />
        <Create />
      </Template>
    </TodoProvider>
  );
}

export default App;
