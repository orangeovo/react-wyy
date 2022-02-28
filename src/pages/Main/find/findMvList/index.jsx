import React, { useState, useEffect } from "react";
import api from "../../../../api";
import FindMvView from "../findMvView";
export default function FindMvList() {
  const [findmvlist, setfindmvlist] = useState([]);
  useEffect(() => {
    api.getRecommendedMV().then((res) => {
      if (res.status === 200) {
        setfindmvlist(res.data.result);
      }
    });
  }, []);
  return (
    <div className="find-hit-list">
      <div className="fin-hit-list-title">MV推荐</div>
      <FindMvView data={findmvlist} />
    </div>
  );
}
