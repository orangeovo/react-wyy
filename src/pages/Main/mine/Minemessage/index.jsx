import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { createduserdetails } from "../../../../redux/actions/user_detail";
import api from "../../../../api";
import { useEffect, useState } from "react";
import timestampToTime2 from "../../../../components/DigitalConversion/timerchanger";
import { Link } from "react-router-dom";
import "./style.less";

export default function Minemesaage() {
  const userinformation = useSelector((state) => state.user);
  const userdetails = useSelector((state) => state.userdetails);
  const [usersongs, setsuersongs] = useState([]);
  const [createdsongs, setcreatedsongs] = useState([]);
  const [likesongs, setlikesongs] = useState([]);
  const [flag, setflag] = useState(false);
  const dispatch = useDispatch();
  useEffect(() => {
    if (userinformation !== null) {
      api.getloginuser(userinformation.profile.userId).then((res) => {
        if (res.status === 200) {
          dispatch(createduserdetails(res.data));
          setflag(true);
        }
      });
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
      return usersongs;
    }
  }, []); // eslint-disable-line react-hooks/exhaustive-deps
  return (
    <div className="mine-message">
      <div className="bkimg-box">
        {!flag ? (
          <img
            className="bkimg"
            src={require("../../../../assets/img/background.png")}
            alt=""
          />
        ) : (
          <img
            className="bkimg"
            src={userinformation.profile.backgroundUrl}
            alt=""
          />
        )}
      </div>
      <div className="message">
        <div className="header">
          <div className="user">
            {!flag ? (
              <img
                src={require("../../../../assets/img/loginout.png")}
                alt=""
              />
            ) : (
              <img src={userinformation.profile.avatarUrl} alt="" />
            )}
          </div>
          <div className="xinxi-box">
            <div className="xinxi">
              <div className="first-box">
                <div>{!flag ? 0 : `${userinformation.profile.followeds}`}</div>
                <div>??????</div>
              </div>
              <div className="first-box">
                <div>{!flag ? 0 : `${userinformation.profile.follows}`}</div>
                <div>??????</div>
              </div>
              <div className="first-box">
                <div>{!flag ? 0 : userdetails.level}</div>
                <div>??????</div>
              </div>
            </div>
            <div className="change-message">
              <div>????????????</div>
            </div>
          </div>
        </div>
        <div className="mid">
          <h1>????????????</h1>
          <div className="text">
            ?????? :{" "}
            {!flag
              ? "????????????"
              : `${(userdetails.createDays / 365).toFixed(0)} ???`}
          </div>
          <div className="text">
            ?????? :{" "}
            {!flag
              ? "????????????"
              : `${userdetails.profile.gender}` === "1"
              ? "???"
              : "???"}
          </div>
          <div className="text">
            ?????? :
            {!flag
              ? " ????????????"
              : timestampToTime2(userdetails.profile.birthday)}
          </div>
          <div className="all">????????????</div>
        </div>
        <div className="bottom">
          <div className="created-gedan">
            <div className="top">
              <div className="count">
                <p>
                  ???????????????(
                  {userinformation !== null ? createdsongs.length : 0}
                  )???
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
                      <Link to={`/songsheet/${ele.id}/${0}`}>
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
                ???????????????(
                {userinformation !== null ? likesongs.length : 0}
                )???
              </div>
              <i className="iconfont icon-gengduo"></i>
            </div>
            {userinformation !== null ? (
              <div className="bottom">
                {likesongs.map((ele, index) => {
                  return (
                    <div key={index} className="chuangjian-gedan">
                      <Link to={`/songsheet/${ele.id}/${0}`}>
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
        </div>
        <div className="diankuai"></div>
      </div>
    </div>
  );
}
