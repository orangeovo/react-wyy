import React, { useState, useEffect } from "react";
import api from "../../../../api";
import FindPopularAlbumView from "../findPopularAlbumView";
export default function FindPopularAlbumList() {
  const [FinHitList, setFinHitList] = useState([]);
  useEffect(() => {
    api.getFinHitList().then((res) => {
      if (res.status === 200) {
        setFinHitList(res.data.playlists);
      }
    });
  }, []);
  return (
    <div className="find-hit-list">
      <div className="fin-hit-list-title">热门推荐</div>
      <FindPopularAlbumView data={FinHitList} />
    </div>
  );
}
