import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { createduserdetails } from "../../../../redux/actions/user_detail";
import api from "../../../../api";
import { Link } from "react-router-dom";
import { useEffect } from "react";
import "./style.less";
export default function HomeTitle() {
  const userinformation = useSelector((state) => state.user);
  const userdetails = useSelector((state) => state.userdetails);
  const dispatch = useDispatch();
  useEffect(() => {
    if (userinformation !== null) {
      api.getloginuser(userinformation.profile.userId).then((res) => {
        if (res.status === 200) {
          dispatch(createduserdetails(res.data));
        }
      });
    }
  }, []); // eslint-disable-line react-hooks/exhaustive-deps
  return (
    <div className="home-title">
      <div className="top-header">
        <div className="left">
          {userinformation === null ? (
            <img src={require("../../../../assets/img/loginout.png")} alt="" />
          ) : (
            <img src={userinformation.profile.avatarUrl} alt="" />
          )}
        </div>
        <div className="right">
          {userinformation === null ? (
            <Link to="/login">
              <p>未登录,点击登录</p>
            </Link>
          ) : (
            <p>{userinformation.profile.nickname}</p>
          )}
          {userdetails === null ? (
            <div>Lv.</div>
          ) : (
            <div>Lv.{userdetails.level}</div>
          )}
        </div>
        <div className="go-login">
          {userinformation === null ? (
            <Link to="/login">
              <i className="iconfont icon-tiaozhuan"></i>
            </Link>
          ) : null}
        </div>
      </div>
      <div className="top-bottom">
        <ul>
          <li>
            <div>
              <i className="iconfont icon-xiazai"></i>
              <p>本地/下载</p>
            </div>
          </li>
          <li>
            <div>
              <i className="iconfont icon-yunpan"></i>
              <p>云盘</p>
            </div>
          </li>
          <li>
            <div>
              <i className="iconfont icon-qianbao"></i>
              <p>已购</p>
            </div>
          </li>
          <li>
            <div>
              <i className="iconfont icon-bofangqi-bofangxiaodianshi"></i>
              <p> 最近播放</p>
            </div>
          </li>
          <li>
            <div>
              <i className="iconfont icon-yonghu-yuan"></i>
              <p>我的好友</p>
            </div>
          </li>
          <li>
            <div>
              <i className="iconfont icon-guanli"></i>
              <p>应用</p>
            </div>
          </li>
        </ul>
      </div>
    </div>
  );
}
