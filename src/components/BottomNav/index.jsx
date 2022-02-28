import React from "react";

import "./style.less";

import { NavLink } from "react-router-dom";

export default function BottomNav() {
  return (
    <div>
      <div className="nav-footer">
        <ul className="clear-fix">
          <li>
            <NavLink to="/home">
              <i className="iconfont icon-yinle"></i>
              首页
            </NavLink>
          </li>
          <li>
            <NavLink exact to="/">
              <i className="iconfont icon-sousuo"></i>
              发现
            </NavLink>
          </li>
          <li>
            <NavLink to="/mine">
              <i className="iconfont icon-wode"></i>
              我的
            </NavLink>
          </li>
          <li>
            <NavLink to="/video">
              <i className="iconfont icon-shipin"></i>
              视频
            </NavLink>
          </li>
        </ul>
      </div>
    </div>
  );
}
