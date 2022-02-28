import React from "react";
import { Link } from "react-router-dom";
import bigNumberTransform from "../../../../components/DigitalConversion";

export default function FindNetizenView(props) {
  return (
    <div className="find-recommend-list">
      <div className="hot-container">
        {props.data.map((element, index) => {
          return (
            <div key={element.id} className="recommend-item">
              <Link to={`/songsheet/${element.id}/${1}`}>
                <img className="img" src={element.coverImgUrl} alt="" />
                <p>{element.name}</p>
                <div className="Playback-volume">
                  <i className="iconfont icon-bofang"></i>
                  {bigNumberTransform(element.playCount)}
                </div>
              </Link>
            </div>
          );
        })}
      </div>
    </div>
  );
}
