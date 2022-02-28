import React from "react";
import { useSelector } from "react-redux";
import { useHistory } from "react-router-dom";
import { useState, useEffect } from "react";
// import { Link } from "react-router-dom";
import "./style.less";
export default function SecondHeaderNav() {
  let history = useHistory();
  const userinformation = useSelector((state) => state.user);
  var x = null;
  var y = null;
  useEffect(() => {
    return () => {
      clearTimeout(x);
      clearTimeout(y);
    };
  }, []); // eslint-disable-line react-hooks/exhaustive-deps
  const [flag, setflag] = useState(false);
  const [loginflag, setloginflag] = useState(false);
  function show() {
    setflag(true);
    x = setTimeout(() => {
      setflag(false);
    }, 1000);
  }
  function loginpd() {
    if (userinformation === null) {
      setloginflag(true);
      y = setTimeout(() => {
        setloginflag(false);
      }, 1000);
    } else {
      history.push("/tuijian");
    }
  }
  function goaway() {
    history.push("/paihangbang");
  }
  return (
    <div>
      <div className="scond-header-nav">
        <ul className="clear-fix">
          <li>
            <i className="iconfont icon-rili" onClick={loginpd}></i>
            每日推荐
          </li>
          <li>
            <i
              className="iconfont icon-luyinjishouyinjidiantai"
              onClick={show}
            ></i>
            私人FM
          </li>
          <li>
            <i className="iconfont icon-gedan" onClick={show}></i>
            歌单
          </li>
          <li>
            <i
              className="iconfont icon-paihangbang_paiming"
              onClick={goaway}
            ></i>
            排行榜
          </li>
          <li>
            <i className="iconfont icon-zhuanjiguangpan" onClick={show}></i>
            数字专辑
          </li>
        </ul>
        {flag ? <div className="zwkf">暂未开放,敬请期待</div> : null}
        {loginflag ? <div className="zwkf">求你先登录</div> : null}
      </div>
    </div>
  );
}
