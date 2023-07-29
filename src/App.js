import React, { useState } from "react";
import Counter from './components/Counter';
import ClassCounter from './components/ClassCounter'
function App() {

    // const [value, setvalue] = useState('a text in input')

  return (
    <div className="App">
       {/* <h1>{value}</h1>
       <input 
        type='text'
        value={value} 
        onChange={event => setvalue(event.target.value)}/> */}
      <Counter/>
      <ClassCounter/> 
    </div>
  );
}

export default App;
