import React, { useState, useEffect } from "react";
import api from "../../../../api";
import FindHitView from "../findHitView";
import "./style.less";
export default function FindHitList() {
  const [Radarsonglist, setRadarsonglist] = useState([]);
  const [flag, setflag] = useState(false);
  useEffect(() => {
    api.getHomepage().then((res) => {
      if (res.status === 200) {
        setRadarsonglist(res.data.data.blocks[6]);
        setflag(true);
      }
    });
  }, []);
  return (
    <div className="find-hit-list">
      <div className="fin-hit-list-title">音乐雷达</div>
      <FindHitView data={Radarsonglist} type={flag} />
    </div>
  );
}
