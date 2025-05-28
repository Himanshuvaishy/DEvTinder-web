import React from "react";

const ProfileUserCard = ({ user }) => {
  return (
    <div className="card card-compact bg-base-100 w-96 shadow-xl">
      <figure>
        <div className="w-full h-64 overflow-hidden rounded-lg">
          <img
            src={user.photoUrl}
            alt={`${user.firstName} ${user.lastName}`}
            className="w-full h-full object-cover object-top"
          />
        </div>
      </figure>
      <div className="card-body">
        <h2 className="card-title">
          {user.firstName} {user.lastName}
        </h2>
        <p>Age: {user.age || 18}</p>
        <p>Gender: {user.gender || "male"}</p>
        <p>{user.about}</p>
      </div>
    </div>
  );
};

export default ProfileUserCard;
