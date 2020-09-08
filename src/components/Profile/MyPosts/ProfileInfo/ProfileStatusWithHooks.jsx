import React, {useEffect, useState} from "react";


export const ProfileStatusWithHooks = (props) => {

  let [editMode, setEditMode] = useState(false);
  let [status, setStatus] = useState(props.status);

  useEffect(() =>{
    setStatus(props.status);
  },[props.status]);

  const activateEditMode = () => {
    setEditMode(true)
  }

  const deActivateEditMode = () => {
    setEditMode(false);
    props.updateStatus(status);
  }

  const onStatusChange = (e) => {
    setStatus(e.currentTarget.value);
  }

  return (
    <div>
      {!editMode &&
      <div>
        <span onDoubleClick={activateEditMode}>{props.status || 'no STATUS'}</span>
      </div>
      }
      {editMode &&
      <div>
        <input autoFocus={true}
               onBlur={deActivateEditMode}
               onChange={onStatusChange}
               value={status}/>
      </div>
      }
    </div>
  )

}

