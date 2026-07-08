import UserProfile from "./UserProfile";


function ProfileSection({ user, editProfile }) {


  return (

    <div>

      <h3>Profile Section</h3>


      <UserProfile
        user={user}
        editProfile={editProfile}
      />


    </div>

  );
}


export default ProfileSection;