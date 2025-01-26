import axios from "axios";
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { BASE_URL } from "../utils/constants";
import { addRequest } from "../utils/requestSlice";
import RequestCard from "./RequestCard";

const Requests = () => {
  const request = useSelector((store) => store.requests); // Select Redux state
  // console.log('Redux State:', request);
  const dispatch = useDispatch();
  const [loading, setLoading] = useState(true);

  const fetchRequest = async () => {
    try {
      const res = await axios.get(BASE_URL + "/user/requests/received", {
        withCredentials: true,
      });

      console.log("API Response:", res.data); // Check response structure
      dispatch(addRequest(res.data.data || [])); // Dispatch data to Redux
      //console.log('Dispatched Requests:', res.data.data); // Debug dispatched data
    } catch (err) {
      console.error("Error fetching requests:", err);
    } finally {
      setLoading(false);
      //console.log("Finally block executed");
    }
  };

  useEffect(() => {
    fetchRequest();
  }, []);

  if (loading) {
    return <h1 className="mt-20 flex justify-center">Loading...</h1>;
  }

  // Check if connections is null or an empty array
  if (request === null || request.length === 0) {
    return  <div className="flex flex-col items-center justify-center mt-20">
    <h1 className="text-2xl font-semibold text-gray-700">No new Request found</h1>
   
  </div>
  }

  return (
    <div className="text-center my-10">
      <h1 className="text-bold text-3xl mt-20">Request</h1>
      {request.map((req) => (
        <RequestCard key={req._id} request={req} />
      ))}
    </div>
  );
};

export default Requests;
