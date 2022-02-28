import React, { useEffect, useState } from "react";
// import BScroll from "better-scroll";
import "./style.less";
import api from "../../../../api";
import { Link } from "react-router-dom";
import LoadMore from "../../../../components/LoadMore";
export default function VideoList() {
  const [videoList, setvideoList] = useState([]);
  const [flag, setflag] = useState(false);
  const [count, setCount] = useState(0);
  useEffect(() => {
    http(count);
    setCount(count + 10);
  }, []); // eslint-disable-line react-hooks/exhaustive-deps
  function loadMoreHandle() {
    http(count);
    setCount(count + 10);
  }
  function http(index) {
    api.getRecommendedVideo(index).then((res) => {
      if (res.status === 200) {
        setvideoList(videoList.concat(res.data.data));
        setflag(true);
      }
    });
  }
  return (
    <div className="video-lists">
      <ul>
        {flag ? (
          videoList.map((element, index) => {
            return (
              <li key={index}>
                <Link to={`/mvdetails/${element.id}`}>
                  <i className="iconfont icon-bofang1"></i>
                </Link>
                <img src={element.cover} alt="" />
                {element.name}
              </li>
            );
          })
        ) : (
          <li>可能调不到接口或者是在加载中,我也不知道..</li>
        )}
      </ul>
      <LoadMore onLoadMore={loadMoreHandle}></LoadMore>
      <div className="diankuai"></div>
    </div>
  );
}
