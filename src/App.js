import React, {useState } from "react";
import Postlist from "./components/Postlist";
import "./styles/App.css";
import PostForm from "./components/PostForm";
function App() {
  // const [value, setvalue] = useState('a text in input')
  const [posts, setPosts] = useState([
    { id: 1, title: "Javascript 1", body: "Description" },
    { id: 2, title: "Javascript 2", body: "Description" },
    { id: 3, title: "Javascript 3", body: "Description" },
  ]);

  // const bodyInputRef = useRef()
  const createPost = (newPost) =>{
    setPosts([...posts, newPost])
  }

  const removePost = (post) => {
    setPosts(posts.filter(p => p.id !== post.id))
  }

  return (
    <div className="App">
      {/* <h1>{value}</h1>
       <input 
        type='text'
        value={value} 
        onChange={event => setvalue(event.target.value)}/> */}
      {/* <Counter/>
      <ClassCounter/>  */}
      <PostForm create={createPost}/>
      {posts.length
        ? <Postlist remove = {removePost} posts={posts} title="List of posts 1" />
        : <h1 style={{textAlign: 'center'}}>Posts are not found</h1>
      }
      
    </div>
  );
}

export default App;
