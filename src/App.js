import React, { useState } from "react";
import Counter from './components/Counter';
import ClassCounter from './components/ClassCounter'
import Postitem from "./components/Postitem";
import Postlist from "./components/Postlist";
import MyButton from "./components/UI/Button/MyButton";
import MyInput from "./components/UI/Input/MyInput"
import './styles/App.css'
function App() {

    // const [value, setvalue] = useState('a text in input')
    const [posts, setPosts] = useState( [
      {id: 1, title: 'Javascript 1', body: "Description"},
      {id: 2, title: 'Javascript 2', body: "Description"},
      {id: 3, title: 'Javascript 3', body: "Description"},
    ])

    
  return (
    <div className="App">
       {/* <h1>{value}</h1>
       <input 
        type='text'
        value={value} 
        onChange={event => setvalue(event.target.value)}/> */}
      {/* <Counter/>
      <ClassCounter/>  */}
      <form>
        <MyInput type="text" placeholder="Name of post"/>
        <MyInput type="text" placeholder="Desc of post"/>
        <MyButton disabled>Create post</MyButton>
      </form>
      <Postlist posts={posts} title="List of posts 1"/>
      

    </div>
  );
}

export default App;
