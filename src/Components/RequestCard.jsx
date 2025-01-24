// ConnectionCard.js
import React from "react";

const RequestCard = ({ request }) => {
  const { _id, firstName, lastName, photoUrl, age, gender, about, email, location } = request.fromUserId
  ;

  return (
    <div
      key={_id}
      className="flex m-4 p-4 rounded-lg bg-base-300 w-2/3 mx-auto shadow-lg justify-between items-center"
    >
      <div>
        <img
          alt="photo"
          className="w-20 h-20 rounded-full object-cover"
          src={photoUrl || "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRDKh7tKIyhZWaZqRFmYkPPnbeNqAf4S7eUew&s"}
        />
      </div>
      <div className="text-left mx-4">
        <h2 className="font-bold text-xl">
          {firstName + " " + lastName}
        </h2>
        {age && gender && <p>{age + ", " + gender}</p>}
        <p>{about}</p>
      
      </div>
      <div class>
      <button className="btn btn-active btn-primary mx-2">Reject</button>
      <button className="btn btn-active btn-secondary mx-2">Accept</button>
      </div>
    </div>
  );
};

export default RequestCard;
