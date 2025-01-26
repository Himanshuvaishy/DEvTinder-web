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
    try {
      const res = await axios.get(BASE_URL + "/feed", { withCredentials: true });
      console.log(res);
      dispatch(addFeed(res.data));
    } catch (err) {
      console.log(err);
    }
  };

  useEffect(() => {
    getFeed();
  }, []);

  if (!feed) return;

  if (feed.length <= 0)
    return (
      <div className="flex flex-col items-center justify-center mt-20">
        <h1 className="text-2xl font-semibold text-gray-700">No new users found</h1>
        <p className="text-gray-500 mt-2">Try refreshing the page or check back later.</p>
      </div>
    );

  return (
    feed.length > 0 && (
      <div className="mt-24 flex justify-center">
        <UserCard user={feed[0]} />
      </div>
    )
  );
};

export default Feed;
