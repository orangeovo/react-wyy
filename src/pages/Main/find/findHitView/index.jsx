import React from "react";
import "../findHotView/style.less";
import { Link } from "react-router-dom";
import { useEffect } from "react";
import bigNumberTransform from "../../../../components/DigitalConversion";
export default function FindHitView(props) {
  useEffect(() => {}, [props.type]);
  return (
    <div className="find-recommend-list">
      <div className="hot-container">
        {props.type ? (
          props.data.creatives.map((element, index) => {
            return (
              <div key={index} className="recommend-item">
                <Link to={`/songsheet/${element.resources[0].resourceId}/${1}`}>
                  <img
                    className="img"
                    src={element.uiElement.image.imageUrl}
                    alt=""
                  />
                  <p>{element.uiElement.mainTitle.title}</p>
                  <div className="Playback-volume">
                    <i className="iconfont icon-bofang"></i>
                    {bigNumberTransform(
                      element.resources[0].resourceExtInfo.playCount
                    )}
                  </div>
                </Link>
              </div>
            );
          })
        ) : (
          <div>loading</div>
        )}
      </div>
    </div>
  );
}
