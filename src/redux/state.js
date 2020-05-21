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
  },
  getState() {
    return this._state;
  },
  _callSubscriber() {
    console.log('State changed');
  },
  addPost() {
    let newPost = {
      id: 5,
      message: this._state.profilePage.newPostText,
      likesCount: 0
    };
    this._state.profilePage.posts.push(newPost);
    this._state.profilePage.newPostText = '';
    this._callSubscriber(this._state);
  },
  updateNewPostText(newText) {
    this._state.profilePage.newPostText = newText;
    this._callSubscriber(this._state);
  },
  subscribe(observer) {
    this._callSubscriber = observer;
  }
}

export default store;

window.store = store;