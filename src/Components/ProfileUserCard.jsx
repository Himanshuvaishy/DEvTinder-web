import React from "react";

const ProfileUserCard = ({ user }) => {

  const imgSrc = user.photoUrl?.includes("localhost")
  ? user.photoUrl.replace("http://localhost:7777", "https://devtinder-a3l5.onrender.com")
  : user.photoUrl;

  
  return (
    <div className="card card-compact bg-base-100 w-96 h-auto shadow-xl">
      <figure>
        <img
          src={imgSrc }
          className="w-full h-64 object-cover " // Adjust the size of the image here
        />
      </figure>
      <div className="card-body">
        <h2 className="card-title">
          {user.firstName} {user.lastName}
        </h2>
        <p>Age:{user.age || 18}</p>
        <p> Gender:{user.gender || "male"}</p>
        <p>{user.about}</p>
        
      </div>
    </div>
  );
};

export default ProfileUserCard;
