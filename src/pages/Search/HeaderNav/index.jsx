import React from "react";
import { useEffect, useRef } from "react";
import { createdSearch } from "../../../redux/actions/search";
import { createdSongs } from "../../../redux/actions/songs";
import { useDispatch } from "react-redux";
import api from "../../../api";
import "./style.less";
export default function HeaderNav() {
  const inputEl = useRef(null);
  const dispatch = useDispatch();
  function backHandle() {
    window.history.back();
  }

  function keyUpHandle(e) {
    if (e.keyCode === 13) {
      dispatch(createdSearch(inputEl.current.value));
      api.getSearchMessage(inputEl.current.value).then((res) => {
        if (res.status === 200) {
          dispatch(createdSongs(res.data.result.songs));
        }
      });
      inputEl.current.value = "";
    }
  }
  useEffect(() => {
    inputEl.current.focus();
  }, []);
  return (
    <div id="home-header2" className="clear-fix">
      <div className="home-header-left ">
        <i
          className="icon-chevron-left"
          onClick={backHandle}
          style={{ color: "black" }}
        ></i>
      </div>
      <div className="home-header-right">
        <i className="iconfont icon-maikefeng" style={{ color: "black" }}></i>
      </div>
      <div className="home-header-middle">
        <div className="search-container">
          <input
            ref={inputEl}
            onKeyUp={keyUpHandle}
            placeholder="搜索歌曲、MV"
          />
        </div>
      </div>
    </div>
  );
}
