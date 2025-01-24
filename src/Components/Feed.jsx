import axios from "axios";
import React, { useEffect } from "react";
import { BASE_URL } from "../utils/constants";
import { useDispatch, useSelector } from "react-redux";
import { addFeed } from "../utils/feedSlice";
import UserCard from "./userCard";

const Feed = () => {
  const dispatch = useDispatch();
  const feed = useSelector((store) => store.feed);
  console.log(feed);

  const getFeed = async () => {
    const res = await axios.get(BASE_URL + "/feed", { withCredentials: true });
       console.log(res);

    dispatch(addFeed(res.data));
  };
 
  

  useEffect(() => {
    getFeed();
  }, []);

  return feed.length>0 && (
    <div className=" mt-24 flex justify-center">
      <UserCard user={feed[0]} />
    </div>
  );
};

export default Feed;
