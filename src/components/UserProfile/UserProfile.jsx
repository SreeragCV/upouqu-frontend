import profile from '../../assets/profile.png'
import classes from "./UserProfile.module.css";

function UserProfile({userData}) { 
  
  return (
    <div className={classes.container}>
      <div className={classes.dp_name}>
        <img className={classes.avatar} src={userData ? userData.dp_url : profile} />
        <h1 className={classes.username}>{userData.full_name}</h1>
      </div>
    </div>
  );
}

export default UserProfile;
