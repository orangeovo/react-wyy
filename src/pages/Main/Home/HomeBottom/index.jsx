import React from "react";
import { useSelector } from "react-redux";
import api from "../../../../api";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import "./style.less";
export default function HomeBottom() {
  const userinformation = useSelector((state) => state.user);
  const [usersongs, setsuersongs] = useState([]);
  const [createdsongs, setcreatedsongs] = useState([]);
  const [likesongs, setlikesongs] = useState([]);
  const [flag, setflag] = useState(false);
  useEffect(() => {
    if (userinformation !== null) {
      api.getusersonglist(userinformation.profile.userId).then((res) => {
        if (res.status === 200) {
          setsuersongs(res.data.playlist);
          var y = res.data.playlist.filter((ele, index) => {
            return (
              index > 0 && ele.creator.userId === userinformation.profile.userId
            );
          });
          var x = res.data.playlist.filter((ele, index) => {
            return (
              index > 0 && ele.creator.userId !== userinformation.profile.userId
            );
          });
          setlikesongs(x);
          setcreatedsongs(y);
          setflag(true);
        }
      });
    }
  }, []); // eslint-disable-line react-hooks/exhaustive-deps

  return (
    <div className="home-bottom">
      <div className="like-music">
        {flag ? (
          <Link to={`/songsheet/${usersongs[0].id}/${0}`}>
            <img src={usersongs[0].coverImgUrl} alt="" />
          </Link>
        ) : (
          <img src={require("../../../../assets/img/like_music.jpg")} alt="" />
        )}
        <div>
          {/* <Link> */}
          <p style={{ fontSize: "14px" }}>
            {flag ? usersongs[0].name : "我喜欢的音乐"}
          </p>
          {/* </Link> */}
          <p style={{ marginTop: "2px" }}>
            <i className="iconfont icon-icon--yes"></i>{" "}
            {flag ? usersongs[0].trackCount + "首" : "共0首"}
          </p>
        </div>
      </div>
      <div className="gedan-count">收藏歌单 &nbsp; | &nbsp; 创建歌单</div>
      <div className="created-gedan">
        <div className="top">
          <div className="count">
            <p>
              创建歌单为(
              {userinformation !== null ? createdsongs.length : 0}
              )个
            </p>
          </div>
          <div className="jia">+</div>
          <i className="iconfont icon-gengduo"></i>
        </div>
        {userinformation !== null ? (
          <div className="bottom">
            {createdsongs.map((ele, index) => {
              return (
                <div key={index} className="chuangjian-gedan">
                  <Link to={`/songsheet/${ele.id}/${1}`}>
                    <div className="zuoy">
                      <img src={ele.coverImgUrl} alt="" />
                      <div>{ele.name}</div>
                    </div>
                  </Link>
                </div>
              );
            })}
          </div>
        ) : null}
      </div>
      <div className="Collection-gedan">
        <div className="top">
          <div className="count">
            收藏歌单为(
            {userinformation !== null ? likesongs.length : 0}
            )个
          </div>
          <i className="iconfont icon-gengduo"></i>
        </div>
        {userinformation !== null ? (
          <div className="bottom">
            {likesongs.map((ele, index) => {
              return (
                <div key={index} className="chuangjian-gedan">
                  <Link to={`/songsheet/${ele.id}/${1}`}>
                    <div className="zuoy">
                      <img src={ele.coverImgUrl} alt="" />
                      <div>{ele.name}</div>
                    </div>
                  </Link>
                </div>
              );
            })}
          </div>
        ) : null}
      </div>
      <div className="diankuai"></div>
    </div>
  );
}
