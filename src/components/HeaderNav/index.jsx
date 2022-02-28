import React from "react";
import { Link } from "react-router-dom";
import { createdsidebar } from "../../redux/actions/sidebar";
import { useDispatch } from "react-redux";
import "./style.less";

export default function HeaderNav() {
  const dispatch = useDispatch();
  // const sidebar = useSelector((state) => state.sidebar);
  function sidebarshow() {
    dispatch(createdsidebar(true));
  }
  return (
    <div>
      <div id="home-header" className="clear-fix">
        <div className="home-header-left ">
          <i className="iconfont icon-danlieliebiao" onClick={sidebarshow}></i>
        </div>
        <div className="home-header-right">
          <i className="iconfont icon-maikefeng"></i>
        </div>
        <div className="home-header-middle">
          <div className="search-container">
            <Link to="/search">
              <input placeholder="搜索歌曲、MV" />
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
