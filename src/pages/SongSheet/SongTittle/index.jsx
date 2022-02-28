import React from "react";
import "./style.less";
export default function SongTitle(props) {
  const { name, coverImgUrl, creator } = props.data;
  return (
    <div className="songs-title">
      <div className="songs-header">
        <img src={coverImgUrl} alt="" />
        <div className="creater-title">
          <div className="creater-text">{name}</div>
          {props.data.length !== 0 ? (
            <div className="creater-text">{creator.nickname}</div>
          ) : (
            <div>Loading...</div>
          )}
        </div>
      </div>
      <div className="creater-bottom">
        <div className="bottom-text">收藏</div>
        <div
          className="bottom-text"
          style={{
            borderLeft: "1px solid #d4d5d3",
            borderRight: "1px solid #d4d5d3",
          }}
        >
          评论
        </div>
        <div className="bottom-text">分享</div>
      </div>
    </div>
  );
}
