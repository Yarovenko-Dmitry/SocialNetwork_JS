import React from "react";
import s from './Dialogs.module.css'
import {DialogsItem} from "./DialogItem/DialogItem";
import {Message} from "./Message/Message";

const Dialogs = (props) => {

  let state = props.dialogsPage;

  let dialogElements = state.dialogs.map(d => <DialogsItem name={d.name} key={d.id} id={d.id}/>);
  let messagesElements = state.messages.map(m => <Message message={m.message} key={m.id}/>);
  let newMessagesBody = state.newMessageBody;

  let onSendMessageClick = () => {
    props.sendMessage();
  }

  let onNewMessageChange = (e) => {
    let body = e.target.value;
    props.updateNewMessageBody(body);
  }
  return (
    <div className={s.dialogs}>
      <div className={s.dialogsItems}>
        {dialogElements}
      </div>

      <div className={s.messages}>
        <div>{messagesElements}</div>
        <div>
          <div>
            <textarea
              value={newMessagesBody}
              onChange={onNewMessageChange}
              placeholder={'Enter your message'}
            >
            </textarea>
          </div>
          <div>
            <button onClick={onSendMessageClick}>Send</button>
          </div>
        </div>
      </div>
    </div>
  )
};

export default Dialogs;