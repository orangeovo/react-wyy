import React from "react";
import "./style.less";
export default function MvInformation(props) {
  return (
    <div className="mv-information">
      <span>{props.data.name}</span>
      <div className="information-text">
        <div>作者:{props.data.artistName}</div>
        <div>播放:{props.data.playCount}</div>
        <div>发布时间:{props.data.publishTime}</div>
      </div>
      <br />
      <div className="mv-jieshao">
        描述:
        {props.data.desc !== null && props.data.desc !== ""
          ? props.data.desc
          : "没有介绍哦!"}
      </div>
    </div>
  );
}
