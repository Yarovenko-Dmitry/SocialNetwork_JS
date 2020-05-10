import React from "react";
import s from './MyPosts.module.css'
import Post from "./Post/Post";

const MyPosts = (props) => {

  let postsElenments = props.posts
    .map(p =>
      <Post message={p.message} likesCount={p.likesCount}/>
    );

  return (
    <div className={s.postsBlock}>
      <h3>My posts</h3>
      <div>
        <div>
          <textarea name="" id="" cols="30" rows="8"></textarea>
        </div>
        <div>
          <button>Add post</button>
        </div>
      </div>
      <div className={s.posts}>
        {postsElenments}
      </div>
    </div>
  )
}

export default MyPosts;