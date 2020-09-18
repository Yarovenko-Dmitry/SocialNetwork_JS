import React from 'react';
import {createFild, Input, Textarea} from '../../../common/FormsControls/FormsControls';
import {reduxForm} from 'redux-form';
import s from './ProfileInfo.module.css'
import styles from '../../../common/FormsControls/FormsControls.module.css';

export const ProfileDataForm = ({handleSubmit, profile, error}) => {
  return (
    <form onSubmit={handleSubmit}>
      <div>
        <button>Save Data</button>
      </div>
      {error && <div className={styles.formSummaryError}>
        {error}
      </div>}
      <div>
        <b>Full name</b>:
        {createFild('Full name', 'fullName', Input, [])}
      </div>
      <div>
        <b>Looking for a job</b>:
        {createFild('', 'lookingForAJob', Input, [], {type: 'checkbox'})}
      </div>

      <div>
        <b>My professional skills</b>:
        {createFild('My professional skills', 'lookingForAJobDescription', Textarea, [])}
      </div>

      <div>
        <b>About me</b>:
        {createFild('About me', 'aboutMe', Textarea, [])}
      </div>
      <div>
        <b>contacts</b>: {Object.keys(profile.contacts).map(key => {
        return <div key={key} className={s.contact}>
          <b>{key}: {createFild(key, 'contacts.' + key, Input, [])}</b>
        </div>
      })}
      </div>
    </form>
  )
}

const ProfileDataFormReduxForm = reduxForm({form: 'edit-profile'})(ProfileDataForm)
export default ProfileDataFormReduxForm;