import React, { Component } from 'react';
import './App.css';

function App() {
  const [data, setData] = React.useState('test');

  return(
      <div>
          {data}

          <button onClick={() => setData('plop')}>yo</button>
      </div>
  )


}

export default App;
