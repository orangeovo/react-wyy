import React from "react";
import { createdSearch, searchclear } from "../../../redux/actions/search";
import { createdSongs } from "../../../redux/actions/songs";
import { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import api from "../../../api";
import "./style.less";

export default function SearchList() {
  const [hotmessage, sethotmessage] = useState([]);
  const searchs = useSelector((state) => state.search);
  const dispatch = useDispatch();
  useEffect(() => {
    api.getHotSearch().then((res) => {
      if (res.status === 200) {
        sethotmessage(res.data.data);
      }
    });
  }, []);
  function add(value) {
    api.getSearchMessage(value).then((res) => {
      if (res.status === 200) {
        dispatch(createdSongs(res.data.result.songs));
      }
    });
  }
  function add2(value) {
    api.getSearchMessage(value).then((res) => {
      if (res.status === 200) {
        dispatch(createdSongs(res.data.result.songs));
      }
    });
    if (searchs.indexOf(value) === -1) {
      dispatch(createdSearch(value));
    }
  }
  return (
    <div className="search-list">
      <div className="history-search">
        <p>历史搜索</p>
        <div className="clear-all" onClick={() => dispatch(searchclear())}>
          清空
        </div>
        <div className="history-serach-list">
          {searchs.map((ele, index) => {
            return (
              <div onClick={() => add(ele)} key={index} className="hsl-text">
                {ele}
              </div>
            );
          })}
        </div>
      </div>
      <div className="hot-search">
        <p>热门搜索</p>
        <div className="hot-serach-list">
          {hotmessage.map((element, idnex) => {
            return (
              <div
                key={idnex}
                className="hsl-text"
                onClick={() => add2(element.searchWord)}
              >
                {element.searchWord}
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}
