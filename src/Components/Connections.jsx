import axios from "axios";
import React, { useEffect, useState } from "react";
import { BASE_URL } from "../utils/constants";
import { useDispatch, useSelector } from "react-redux";
import { addConnections } from "../utils/connectionSlice";
import ConnectionCard from "./ConnectionCard";
import { useNavigate } from "react-router-dom";

const Connections = () => {
  const connections = useSelector((store) => store.connection); // Get the state from Redux
  const dispatch = useDispatch();
  const [loading, setLoading] = useState(true);
  const navigate = useNavigate();

  const fetchConnections = async () => {
    try {
      const res = await axios.get(BASE_URL + "/user/connections", {
        withCredentials: true,
      });

      console.log("Fetched Data:", res?.data?.data);
      dispatch(addConnections(res.data.data)); // Dispatch to Redux
      console.log("Dispatched");
    } catch (err) {
      console.log("Error fetching connections:", err);
    } finally {
      setLoading(false);
      //console.log("Finally block executed");
    }
  };

  useEffect(() => {
    fetchConnections();
  }, []);

  // If the connections are still loading
  if (loading) {
    return <h1 className="mt-20 flex justify-center">Loading...</h1>;
  }

  // Check if connections is null or an empty array
  if (connections === null || connections.length === 0) {
    return (
      <div className="mt-20 flex flex-col items-center">
        <h1 className="text-2xl font-semibold text-gray-500">No connections found</h1>
        <p className="text-gray-400 mt-2">It seems you haven't connected with anyone yet.</p>
        <button onClick={()=>navigate("/")} className="mt-4 px-6 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600">
          Find Connections
        </button>
      </div>
    );
  }

  return (
    <div className="text-center my-20">
      <h1 className="text-bold text-3xl">Connections</h1>

      {connections.map((connection) => {
        return <ConnectionCard key={connection._id} connection={connection} />;
      })}
    </div>
  );
};

export default Connections;
