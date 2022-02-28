import React, { useState, useEffect } from "react";
import api from "../../../../api";
import FindNetizenView from "../findNetizenView";
export default function FindNetizenList() {
  const [NetizenSelection, setNetizenSelection] = useState([]);
  useEffect(() => {
    api.getNetizenSelection().then((res) => {
      if (res.status === 200) {
        setNetizenSelection(res.data.playlists);
      }
    });
  }, []);
  return (
    <div className="find-hit-list">
      <div className="fin-hit-list-title">网友精选</div>
      <FindNetizenView data={NetizenSelection} />
    </div>
  );
}
