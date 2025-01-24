import React from 'react';

const UserCard = ({ user }) => {
  console.log(user);

  return (
    <div className="card card-compact bg-base-100 w-96 h-auto shadow-xl">
      <figure>
        <img
          src={user.photoUrl }
          className="w-full h-64 object-cover " // Adjust the size of the image here
        />
      </figure>
      <div className="card-body">

        <h2 className="card-title">{user.firstName} {user.lastName}</h2>
        <p>Age:{user.age || 18}</p>
        <p> Gender:{ user.gender || 'M'}</p>
        <p>{user.about}</p>
        <div className="card-actions justify-end">
          <button className="btn btn-primary">Ignore</button>
          <button className="btn btn-secondary">Interested</button>
        </div>
      </div>
    </div>
  );
};

export default UserCard;
