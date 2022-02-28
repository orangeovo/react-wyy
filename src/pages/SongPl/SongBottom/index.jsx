import React from "react";
import { useEffect, useState } from "react";
import timestampToTime2 from "../../../components/DigitalConversion/timerchanger";
import LoadMore from "../../../components/LoadMore";
import api from "../../../api";
import "./style.less";
export default function SongBottom(props) {
  const [songs, setsongs] = useState();
  const [flag, setflag] = useState(false);
  const [songcomments, setsongcomments] = useState([]);
  const [songcommentsflag, setsongcommentsflag] = useState(false);
  const [songcoms, setsongcoms] = useState([]);
  const [count, setCount] = useState(0);
  useEffect(() => {
    api.getSongsDetails(props.id).then((res) => {
      if (res.status === 200) {
        setsongs(res.data.songs[0]);
        setflag(true);
      }
    });
    http(count);
  }, []); // eslint-disable-line react-hooks/exhaustive-deps
  function http(value) {
    api.getsongscomment(props.id, value).then((res) => {
      if (res.status === 200) {
        setsongcomments(res.data);
        setsongcoms(songcoms.concat(res.data.comments));
        setsongcommentsflag(true);
      }
    });
  }
  function loadMoreHandle() {
    http(count);
    setCount(count + 20);
  }
  return (
    <div className="songbottom">
      <div className="header">
        {flag ? <img src={songs.al.picUrl} alt="" /> : "Lodaing..."}
        <p style={{ marginLeft: "10px" }}>{flag ? songs.name : null}-</p>
        <p style={{ color: "#8c939d" }}>{flag ? songs.ar[0].name : null}</p>
      </div>
      <div className="pl">
        <h2>评论({songcomments.total})</h2>
        <div className="mv-comments-lists">
          {songcommentsflag ? (
            songcoms.map((element, index) => {
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
        {songcomments.total - count > 0 ? (
          <LoadMore onLoadMore={loadMoreHandle}></LoadMore>
        ) : (
          <div style={{ textAlign: "center" }}>没数据咯</div>
        )}
      </div>
    </div>
  );
}
