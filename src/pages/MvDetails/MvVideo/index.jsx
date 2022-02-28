import React from "react";
import "./style.less";
export default function MvVideo(props) {
  return (
    <div className="mv-video">
      <video
        src={props.data.url}
        controls="controls"
        autoPlay={"autoplay"}
      ></video>
    </div>
  );
}
