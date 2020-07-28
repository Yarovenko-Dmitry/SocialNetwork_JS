import React from "react";
import s from './Dialogs.module.css'
import {DialogsItem} from "./DialogItem/DialogItem";
import {Message} from "./Message/Message";
import {Redirect} from 'react-router-dom';
import {Field, reduxForm} from 'redux-form';
import {Textarea} from '../common/FormsControls/FormsControls';
import {maxLengthCreator, required} from '../../utils/validators/validators';

const Dialogs = (props) => {

  let state = props.dialogsPage;

  let dialogElements = state.dialogs.map(d => <DialogsItem name={d.name} key={d.id} id={d.id}/>);
  let messagesElements = state.messages.map(m => <Message message={m.message} key={m.id}/>);
  // let newMessagesBody = state.newMessageBody;

  // let onSendMessageClick = () => {
  //   props.sendMessage();
  // }

  let addNewMessage = (values) => {
    props.sendMessage(values.newMessageBody);
  }

  if (!props.isAuth) {
    return <Redirect to={'/login'}/>
  }

  return (
    <div className={s.dialogs}>
      <div className={s.dialogsItems}>
        {dialogElements}
      </div>
      <div className={s.messages}>
        <div>{messagesElements}</div>
        <AddMassageFormRedux onSubmit={addNewMessage}/>
      </div>
    </div>
  )
};

const maxLength50 = maxLengthCreator(50)

const AddMassageForm = (props) => {
  return (
    <form onSubmit={props.handleSubmit}>
      <div>
        <Field component={Textarea}
               name={'newMessageBody'}
               placeholder={'Enter your message'}
               validate = {[required, maxLength50]}
        />
      </div>
      <div>
        <button>Send</button>
      </div>
    </form>
  )
}

const AddMassageFormRedux = reduxForm({form: 'dialogAddMassageForm'})(AddMassageForm);


export default Dialogs;