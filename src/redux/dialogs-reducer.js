const UPDATE_NEW_MESSAGE_BODY = 'UPDATE-NEW-MESSAGE-BODY';
const SEND_MESSAGE = 'SEND-MESSAGE';

let internalState = {
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
};

const dialogsReducer = (state = internalState, action) => {
  switch (action.type) {
    case SEND_MESSAGE:
      let body = state.newMessageBody;
      state.newMessageBody = '';
      state.messages.push({id: 7, message: body});
      return state
    case UPDATE_NEW_MESSAGE_BODY:
      state.newMessageBody = action.body;
      return state;
    default:
      return state
  }
}

export const sendMessageActionCreator = () => ({type: SEND_MESSAGE});
export const updateNewMessageBodyCreator = (body) => ({type: UPDATE_NEW_MESSAGE_BODY, body: body});

export default dialogsReducer;