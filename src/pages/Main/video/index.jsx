import React from "react";
import VideoPubHeader from "../../../components/PubHeader";
import VideoList from "./VideoList";
const Video = () => {
  return (
    <div>
      <VideoPubHeader title={"视频"} typeof={true}></VideoPubHeader>
      <VideoList></VideoList>
    </div>
  );
};

export default Video;
