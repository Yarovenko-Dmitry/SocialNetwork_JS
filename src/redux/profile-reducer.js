import {usersAPI} from '../api/api';

const ADD_POST = 'ADD-POST';
const UPDATE_NEW_POST_TEXT = 'UPDATE-NEW-POST-TEXT';
const SET_USER_PROFILE = 'SET_USER_PROFILE';

let internalState = {
  posts:
    [
      {id: 1, message: 'Hi, how are you?', likesCount: 0},
      {id: 2, message: 'It\'s my first post', likesCount: 48},
      {id: 3, message: 'Second post', likesCount: 8},
      {id: 4, message: 'e-ge-gey', likesCount: 4}
    ],
  newPostText: 'http://localhost:3000/users',
  profile: null
};

const profileReducer = (state = internalState, action) => {

  switch (action.type) {
    case ADD_POST:
      let newPost = {
        id: 5, message:
        state.newPostText,
        likesCount: 0
      };
      return {
        ...state,
        posts: [...state.posts, newPost],
        newPostText: ''
      };
    case UPDATE_NEW_POST_TEXT: {
      return {
        ...state,
        newPostText: action.newText
      };
    }
    case SET_USER_PROFILE: {
      return {
        ...state,
        profile: action.profile
      };
    }
    default:
      return state;
  }
}

export const addPostActionCreator = () => ({type: ADD_POST});
export const setUserProfile = (profile) => ({type: SET_USER_PROFILE, profile});

export const getUserProfile = (userId) => (dispatch) => {

  usersAPI.getProfile(userId).then(response => {
    dispatch(setUserProfile(response.data));
  });

} ;
export const updateNewPostTextActionCreator = (text) => ({type: UPDATE_NEW_POST_TEXT, newText: text});

export default profileReducer