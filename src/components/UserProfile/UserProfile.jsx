import profile from '../../assets/profile.png'
import classes from "./UserProfile.module.css";

function UserProfile({userData}) { 
  return (
    <div className={classes.container}>
      <div className={classes.dp_name}>
        <img className={classes.avatar} src={profile} />
        <h1 className={classes.username}>{userData.username}</h1>
      </div>
    </div>
  );
}

export default UserProfile;
