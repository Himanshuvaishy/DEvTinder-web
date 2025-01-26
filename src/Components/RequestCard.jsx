// ConnectionCard.js
import axios from "axios";
import React from "react";
import { BASE_URL } from "../utils/constants";
import { useDispatch } from "react-redux";
import { removeRequest } from "../utils/requestSlice";

const RequestCard = ({ request }) => {
  const dispatch = useDispatch();
  const {
    _id,
    firstName,
    lastName,
    photoUrl,
    age,
    gender,
    about,
    email,
    location,
  } = request.fromUserId;
  const reviewRequest = async (status, _id) => {
    try {
      const res = await axios.post(
        BASE_URL + "/request/review" + "/" + status + "/" + _id,
        {},
        { withCredentials: true }
      );

      dispatch(removeRequest(_id));
    } catch (err) {}
  };

  return (
    <div
      key={_id}
      className="flex flex-col md:flex-row m-4 p-4 rounded-lg bg-base-300 w-2/3 mx-auto shadow-lg justify-between items-center"
    >
      <div>
        <img
          alt="photo"
          className="w-20 h-20 rounded-full object-cover"
          src={
            photoUrl ||
            "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRDKh7tKIyhZWaZqRFmYkPPnbeNqAf4S7eUew&s"
          }
        />
      </div>
      <div className="text-left mx-4 mt-4 md:mt-0">
        <h2 className="font-bold text-xl">{firstName + " " + lastName}</h2>
        {age && gender && <p>{age + ", " + gender}</p>}
        <p>{about}</p>
      </div>
      <div className="flex flex-col md:flex-row mt-4 md:mt-0">
        <button
          className="btn btn-active btn-primary mx-2 mb-2 md:mb-0"
          onClick={() => reviewRequest("rejected", request._id)}
        >
          Reject
        </button>
        <button
          className="btn btn-active btn-secondary mx-2"
          onClick={() => reviewRequest("accepted", request._id)}
        >
          Accept
        </button>
      </div>
    </div>
  );
};

export default RequestCard;
