import axios from "axios";
import React from "react";
import { BASE_URL } from "../utils/constants";
import { useDispatch } from "react-redux";
import { removeFeed } from "../utils/feedSlice";

const UserCard = ({ user }) => {
  const dispatch = useDispatch();
  const imgSrc = user.photoUrl?.includes("localhost")
  ? user.photoUrl.replace("http://localhost:7777", "https://devtinder-a3l5.onrender.com")
  : user.photoUrl;

  const handleSendReuest = async (status, userId) => {
    try {
      const res = await axios.post(
        BASE_URL + "/request/send/" + status + "/" + userId,
        {},
        { withCredentials: true }
      );

      dispatch(removeFeed(userId));
    } catch (err) {}
  };

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
        <div className="card-actions justify-end">
          <button
            className="btn btn-primary"
            onClick={() => handleSendReuest("ignored", user._id)}
          >
            Ignore
          </button>
          <button
            className="btn btn-secondary"
            onClick={() => handleSendReuest("interested", user._id)}
          >
            Interested
          </button>
        </div>
      </div>
    </div>
  );
};

export default UserCard;
