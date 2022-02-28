import React from "react";
import { useEffect, useState } from "react";
import SongSheetHeader from "../../components/PubHeader";
import Tuijiantitle from "./tuijiantitle";
import Tuijianlist from "./tuijianlist";
import api from "../../api";
export default function Tuijian() {
  const [songs, setsongs] = useState([]);
  useEffect(() => {
    api.gettuijian(localStorage.getItem("cookie")).then((res) => {
      if (res.status === 200) {
        setsongs(res.data.data.dailySongs);
      }
    });
  }, []); // eslint-disable-line react-hooks/exhaustive-deps
  return (
    <div>
      <SongSheetHeader title={"每日推荐"}></SongSheetHeader>
      <Tuijiantitle></Tuijiantitle>
      <Tuijianlist data={songs}></Tuijianlist>
    </div>
  );
}
