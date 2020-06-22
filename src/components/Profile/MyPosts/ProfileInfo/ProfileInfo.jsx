import React from "react";
import s from './ProfileInfo.module.css'
import Preloader from "../../../common/Preloader/Preloader";

export const ProfileInfo = (props) => {
  if (!props.profile) {
    return <Preloader/>
  }

  return (
    <div>
      <div><img
        src="https://lh4.googleusercontent.com/proxy/x0kSBZDM2lLD9jxQXJ2TydhhwWn8NHTEVtvtAwKCqMVcuNY4EMDe7c2EfnHm5fbGLBVHxqs8HJbBfKhNEZoAAhDe2YFv6HOPAUIec1KHuT-K4adL"
        alt="img"/>
      </div>
      <div className={s.descriptionBlock}>
        <img src={props.profile.photos.large}/>
        avatar + discription
      </div>
    </div>
  )
};