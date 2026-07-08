import ProfileSection from "./ProfileSection";


function Dashboard({ user, editProfile }) {

  return (
    <div>

      <h2>Dashboard</h2>
      <ProfileSection
        user={user}
        editProfile={editProfile}
      />

    </div>
  );
}


export default Dashboard;