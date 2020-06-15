import React from 'react';
import styles from './users.module.css'
import * as axios from "axios";
import userPhoto from '../../assets/images/default_user.png'

class Users extends React.Component {

  constructor(props) {
    super(props);

    axios.get("https://social-network.samuraijs.com/api/1.0/users")
      .then(response => {
        this.props.setUsers(response.data.items);
      });
  }

  getUsers = () => {

  }

  render() {
    return (
      <div>
        {/*<button onClick={this.getUsers}> Get Users</button>*/}
        {
          this.props.users.map(u => <div key={u.id}>
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
                  this.props.unFollow(u.id)
                }}>Unfollow</button>
                : <button onClick={() => {
                  this.props.follow(u.id)
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
  }
}

export default Users;