function UserProfile({ user, editProfile }) {


  const handleEdit = () => {


    const updatedUser = {

      ...user,

      name: "Michael Johnson",

      role: "Full Stack Developer",

      status: "Online"

    };


    editProfile(updatedUser);

  };


  return (

    <div
      style={{
        border:"1px solid gray",
        padding:"20px",
        width:"300px"
      }}
    >

      <h2>User Profile</h2>


      <img
        src={user.image}
        width="100"
        height="100"
        alt="profile"
      />


      <p>
        <strong>Name:</strong> {user.name}
      </p>


      <p>
        <strong>Role:</strong> {user.role}
      </p>


      <p>
        <strong>Email:</strong> {user.email}
      </p>


      <p>
        <strong>Location:</strong> {user.location}
      </p>


      <p>
        <strong>Status:</strong> {user.status}
      </p>



      <button onClick={handleEdit}>
        Edit Profile
      </button>


    </div>

  );
}


export default UserProfile;