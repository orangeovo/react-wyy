import React from "react";
import { useState, useEffect } from "react";
import api from "../../api";
import SongSheetHeader from "../../components/PubHeader";
import SongSheetList from "./SongSheetList";
import SongTitle from "./SongTittle";
export default function SongSheet(props) {
  const { id, type } = props.match.params;
  const [Songslits, setSongslists] = useState([]);
  const [SongsCreator, setSongsCreator] = useState([]);

  useEffect(() => {
    if (type === "1") {
      api.getSongListDetails(id).then((res) => {
        if (res.status === 200) {
          setSongslists(res.data.songs);
        }
      });
      api.getSongsList(id).then((res) => {
        if (res.status === 200) {
          setSongsCreator(res.data.playlist);
        }
      });
    } else if (type === "0") {
      var cookie = localStorage.getItem("cookie");
      api.getSongListDetails(id, cookie).then((res) => {
        if (res.status === 200) {
          setSongslists(res.data.songs);
        }
      });
      api.getSongsList(id, cookie).then((res) => {
        if (res.status === 200) {
          setSongsCreator(res.data.playlist);
        }
      });
    }
  }, []); // eslint-disable-line react-hooks/exhaustive-deps
  return (
    <div>
      <SongSheetHeader title={"歌单"}></SongSheetHeader>
      <SongTitle data={SongsCreator}></SongTitle>
      <SongSheetList data={Songslits}></SongSheetList>
    </div>
  );
}
