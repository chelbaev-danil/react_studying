import React from "react";
import Postitem from "./Postitem";
const Postlist = ({posts, title}) =>{
    return (
        <div>
            <h1 style={{textAlign: 'center'}}>{title}</h1>
            {posts.map(post =>
                <Postitem post={post} key={post.id}/>
            )}
        </div>
    )
}

export default Postlist;