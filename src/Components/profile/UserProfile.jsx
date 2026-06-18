function UserProfile() {
  const user = {
    name: "Nilesh rajbhar",
    email: "nian@example.com",
    role: "React Developer",
    location: "Lucknow, India",
    image: "https://plus.unsplash.com/premium_photo-1738976630382-6935c27d2146?q=80&w=1332&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  };

  return (
    <div className="container mt-5">
      <div className="card mx-auto shadow" style={{ width: "22rem" }}>
        <img
          src={user.image}
          className="card-img-top"
          alt={user.name}
        />

        <div className="card-body text-center">
          <h3 className="card-title">{user.name}</h3>
          <p className="text-muted text-bg-info">{user.role}</p>

          <hr />

          <p>
            <strong>Email:</strong> {user.email}
          </p>

          <p>
            <strong>Location:</strong> {user.location}
          </p>

          <button className="btn btn-primary">
            Edit Profile
          </button>
        </div>
      </div>
    </div>
  );
}

export default UserProfile;