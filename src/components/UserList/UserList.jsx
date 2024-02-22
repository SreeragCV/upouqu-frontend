import React from "react";
import classes from "./UserList.module.css";

function UserList({ users }) {
  return (
    <div className={classes.container}>
      <h1 className={classes.h1}>User List</h1>
      <table className={classes.table}>
        <tr>
        <th className={classes.th}>No.</th>
          <th className={classes.th}>Username</th>
          <th className={classes.th}>Email</th>
        </tr>
        {users && users.length > 0 &&
          users.map((user, index) => {
            return (
              <tr key={user.user_id}>
                <td className={classes.td}>{index + 1}</td>
                <td className={classes.td}>{user.username}</td>
                <td className={classes.td}>{user.email}</td>
              </tr>
            );
          })}
      </table>
    </div>
  );
}

export default UserList;
