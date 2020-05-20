import {rerenderEntireTree} from "../rerender";

let state = {
  profilePage: {
    posts:
      [
        {id: 1, message: 'Hi, how are you?', likesCount: 0},
        {id: 2, message: 'It\'s my first post', likesCount: 48},
        {id: 3, message: 'Second post', likesCount: 8},
        {id: 4, message: 'e-ge-gey', likesCount: 4}
      ],
    newPostText: 'exampl test'
  },
  dialogsPage: {
    dialogs:
      [
        {id: 1, name: 'Dmitry'},
        {id: 2, name: 'Andrey'},
        {id: 3, name: 'Alexander'},
        {id: 4, name: 'Victoriya'},
        {id: 5, name: 'Nadezhda'},
        {id: 6, name: 'Alex'}
      ],
    messages:
      [
        {id: 1, message: 'Hi'},
        {id: 2, message: 'What it is'},
        {id: 3, message: 'Go-go-go'},
        {id: 4, message: 'Good'},
        {id: 5, message: 'thanksgiving'},
        {id: 6, message: 'fame and honor'}
      ]
  },
  sidebar: {}
};

window.state = state;

export let addPost = () => {
  let newPost = {
    id: 5,
    message: state.profilePage.newPostText,
    likesCount: 0
  };
  state.profilePage.posts.push(newPost);
  state.profilePage.newPostText = '';
  rerenderEntireTree(state);
};

export let updateNewPostText = (newText) => {
  state.profilePage.newPostText = newText;
  rerenderEntireTree(state);
};

export default state;