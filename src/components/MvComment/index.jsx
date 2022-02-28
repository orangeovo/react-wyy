import React from "react";
import "./style.less";
import { useState, useEffect } from "react";
import timestampToTime2 from "../DigitalConversion/timerchanger";
import api from "../../api";
import LoadMore from "../LoadMore";

export default function MvComment(props) {
  const [mvcomments, setmvcomments] = useState([]);
  const [mvcommentsflag, setmvcommentsflag] = useState(false);
  const [mvcoms, setcoms] = useState([]);
  const [count, setCount] = useState(0);
  useEffect(() => {
    http(count);
    setCount(count + 20);
  }, []); // eslint-disable-line react-hooks/exhaustive-deps
  function http(value) {
    api.getMvcomments(props.id, value).then((res) => {
      if (res.status === 200) {
        setmvcomments(res.data);
        setcoms(mvcoms.concat(res.data.comments));
        setmvcommentsflag(true);
      }
    });
  }
  function loadMoreHandle() {
    http(count);
    setCount(count + 20);
  }
  return (
    <div className="mv-comments">
      <h2>评论({mvcomments.total})</h2>
      <div className="mv-comments-lists">
        {mvcommentsflag ? (
          mvcoms.map((element, index) => {
            return (
              <div className="mv-comments-text" key={index}>
                <div className="mv-left">
                  <img src={element.user.avatarUrl} alt="" />
                  <div className="mv-content-text">
                    <div style={{ marginLeft: "5px" }}>
                      {element.user.nickname}
                    </div>
                    <div style={{ marginLeft: "5px" }}>
                      {timestampToTime2(element.time)}
                    </div>
                  </div>
                  <div className="mv-content-dianzan">
                    <i className="iconfont icon-dianzan"></i>
                    {element.likedCount}
                  </div>
                </div>
                <div className="mv-bottom">
                  <p className="mv-bottom-text ">{element.content}</p>
                </div>
              </div>
            );
          })
        ) : (
          <div>loading....</div>
        )}
      </div>
      {mvcomments.total - count > 0 ? (
        <LoadMore onLoadMore={loadMoreHandle}></LoadMore>
      ) : (
        <div style={{ textAlign: "center" }}>没数据咯</div>
      )}
      <div className="diankuai"></div>
    </div>
  );
}
