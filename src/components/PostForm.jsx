import React, {useState} from "react";
import MyButton from "./UI/Button/MyButton";
import MyInput from "./UI/Input/MyInput";

const PostForm = ({create}) => {
  const [post, setPost] = useState({ title: "", body: "" });

  const addNewPost = (e) => {
    e.preventDefault();
   // setPosts([...posts, { ...post, id: Date.now() }]); // добавление поста в массив с постами и доваление айдишника
    const newPost = {
        ...post, id: Date.now()
    }
    create(newPost)
    setPost({ title: "", body: "" }); // очищение полей после отправки
  };

  return(
    <form>
      {/* Управляемый компонент */}
      <MyInput
        type="text"
        value={post.title}
        placeholder="Name of post"
        onChange={(e) => setPost({ ...post, title: e.target.value })} // передача тайтла в объект поста через сетПост
      />
      <MyInput
        type="text"
        value={post.body}
        placeholder="Body of post"
        onChange={(e) => setPost({ ...post, body: e.target.value })} // передача бади в объект поста через сетПост
      />
      {/* Неуправляемый компонент */}
      {/* <MyInput 
        ref={bodyInputRef}
        type="text" 
    placeholder="Desc of post"
        /> */}
      <MyButton onClick={addNewPost}>Create post</MyButton>
    </form>
  );
};

export default PostForm;
