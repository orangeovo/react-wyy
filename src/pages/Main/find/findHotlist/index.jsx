import React, { useState, useEffect } from "react";
import api from "../../../../api";
import FindHotView from "../findHotView";
import "./style.less";
export default function FindHostlist() {
  const [FindRecommendedSongList, setFindRecommendedSongList] = useState([]);
  useEffect(() => {
    api.getFindRecommendedSongList().then((res) => {
      if (res.status === 200) {
        setFindRecommendedSongList(res.data.result);
      }
    });
  }, []);
  return (
    <div className="find-hot-list">
      <div className="fin-hot-list-title">推荐歌单</div>
      <FindHotView data={FindRecommendedSongList} />
    </div>
  );
}
