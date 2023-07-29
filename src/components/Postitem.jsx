import React from "react";

const Postitem = (props) =>{
    console.log(props)
    return (
        <div className="post">
            <div className="post_content">
                <strong>{props.post.id}. {props.post.title}</strong>
            <div>{props.post.body}</div>
        </div>
            <div className="post_buttons">
                <button>Delete</button>
            </div>
      </div>
    )
}

export default Postitem;