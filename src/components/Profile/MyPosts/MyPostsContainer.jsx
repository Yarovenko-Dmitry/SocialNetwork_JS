import React from "react";
import {addPostActionCreator, updateNewPostTextActionCreator} from "../../../redux/profile-reducer";
import MyPosts from "./MyPosts";
import StoreContext from "../../../StoreContext";

const MyPostsContainer = () => {

  return (
    <StoreContext.Consumer>
      {
        store => {
          let state = store.getState();

          const addPost = () => {
            store.dispatch(addPostActionCreator());
          };

          const onPostChange = (text) => {
            let action = updateNewPostTextActionCreator(text);
            store.dispatch(action);
          }
          return (
            <MyPosts updatedNewPostText={onPostChange}
                     addPost={addPost}
                     posts={store.getState().profilePage.posts}
                     newPostText={store.getState().profilePage.newPostText}
            />
          )
        }
      }
    </StoreContext.Consumer>
  )
}

export default MyPostsContainer;