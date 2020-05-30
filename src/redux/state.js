import profileReducer from "./profile-reducer";
import dialogsReducer from "./dialogs-reducer";
import sidebarReducer from "./siderbar-reducer";

let store = {
  _state: {
    profilePage: {
      posts:
        [
          {id: 1, message: 'Hi, how are you?', likesCount: 0},
          {id: 2, message: 'It\'s my first post', likesCount: 48},
          {id: 3, message: 'Second post', likesCount: 8},
          {id: 4, message: 'e-ge-gey', likesCount: 4}
        ],
      newPostText: 'example test'
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
        ],
      newMessageBody: ''
    },
    sidebar: {}
  },
  _callSubscriber() {
    console.log('State changed');
  },

  getState() {
    return this._state;
  },
  subscribe(observer) {
    this._callSubscriber = observer;
  },

  dispatch(action) {

    this._state.profilePage = profileReducer(this._state.profilePage, action);
    this._state.dialogsPage = dialogsReducer(this._state.dialogsPage, action);
    this._state.sidebar = sidebarReducer(this._state.sidebar, action);

    this._callSubscriber(this._state);

  }
}


export default store;

window.store = store;