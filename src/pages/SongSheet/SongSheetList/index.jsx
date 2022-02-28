import React from "react";
import { useDispatch } from "react-redux";
import { createdplaysong } from "../../../redux/actions/Player_song";
import "./style.less";

export default function SongSheetList(props) {
  const dispatch = useDispatch();
  function add() {
    dispatch(createdplaysong(props.data));
  }
  return (
    <div className="songs-sheetlist">
      <div className="sheetlist-header" onClick={add}>
        <i className="iconfont icon-bofang"></i>
        播放全部({props.data.length})
      </div>
      {props.data.map((element, index) => {
        return (
          <div className="songs-lists" key={element.id}>
            <div className="list-title">{element.name}</div>
            <div className="list-name">{element.al.name}</div>
          </div>
        );
      })}
      <div className="songs-bottom"></div>
    </div>
  );
}
