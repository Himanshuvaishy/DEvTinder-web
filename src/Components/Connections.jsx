import axios from "axios";
import React, { useEffect, useState } from "react";
import { BASE_URL } from "../utils/constants";
import { useDispatch, useSelector } from "react-redux";
import { addConnections } from "../utils/connectionSlice";
import ConnectionCard from "./ConnectionCard";

const Connections = () => {
  const connections = useSelector((store) => store.connection); // Get the state from Redux
  const dispatch = useDispatch();
  const [loading, setLoading] = useState(true);

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
    return <h1 className="mt-20 flex justify-center">No connections found</h1>;
  }

  return (
    <div className="text-center my-20">
      <h1 className="text-bold text-3xl">Connections</h1>

      {connections.map((connection) => {
       return  <ConnectionCard key={connection._id} connection={connection}/>

        
      })}
    </div>
  );
};

export default Connections;
