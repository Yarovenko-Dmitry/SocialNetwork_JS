import React from "react";
import s from './Post.module.css'

const Post = (props) => {
  return (
    <div className={s.item}>
      <img src={'https://i.pinimg.com/originals/63/2d/6f/632d6f00a809cf8c77f65142395458de.png'}/>
      {props.message}
      <div>
        <span>like </span>{props.likesCount}
      </div>
    </div>
  )
}

export default Post;