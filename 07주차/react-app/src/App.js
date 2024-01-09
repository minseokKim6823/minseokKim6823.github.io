import React from 'react';
import Hello from './components/Hello';
import Wrapper from './components/Wrapper';

const App = () => {
  return (
    <Wrapper>
      <Hello name="react" color="red" isTrue={true}/>
      <Hello color="pink"/>
    </Wrapper>
  );
}

export default App;
