import React from 'react';
import styles from './users.module.css'
import * as axios from "axios";
import userPhoto from '../../assets/images/default_user.png'

const Users = (props) => {

  let getUsers = () => {
    if (props.users.length === 0) {

      axios.get("https://social-network.samuraijs.com/api/1.0/users")
        .then(response => {
          props.setUsers(response.data.items);
        });
    }
  }


  return (
    <div>
      <button onClick={getUsers}> Get Users</button>
      {
        props.users.map(u => <div key={u.id}>
          <span>
            <div>
              <img
                className={styles.userPhoto}
                src={u.photos.small ? u.photos.small : userPhoto}
                // alt="img"
              />
            </div>
            <div>
              {u.followed
                ? <button onClick={() => {
                  props.unFollow(u.id)
                }}>Unfollow</button>
                : <button onClick={() => {
                  props.follow(u.id)
                }}>Follow</button>
              }
            </div>
          </span>
          <span>
             <span>
               <div> {u.name}</div>
               <div>{u.status}</div>
             </span>
             <span>
               <div>{"u.location.country"}</div>
               <div>{'u.location.city'}</div>
             </span>
          </span>

        </div>)
      }
    </div>
  )
};

export default Users;