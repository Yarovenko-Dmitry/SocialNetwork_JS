import React from "react";
import s from './ProfileInfo.module.css'
import Preloader from "../../../common/Preloader/Preloader";
import {ProfileStatusWithHooks} from './ProfileStatusWithHooks';

export const ProfileInfo = ({profile,status, updateStatus}) => {
  if (!profile) {
    return <Preloader/>
  }

  return (
    <div>
      <div className={s.descriptionBlock}>
        <img src={profile.photos.large}/>
        avatar + discription
        <ProfileStatusWithHooks status={status}
                                updateStatus={updateStatus}/>
      </div>
    </div>
  )
};