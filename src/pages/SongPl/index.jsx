import React from "react";
import { useEffect } from "react";
import Header from "../../components/PubHeader";
import SongBottom from "./SongBottom";
export default function SongPL(props) {
  useEffect(() => {}, [props.match.params.id]);
  return (
    <div>
      <Header title="评论"></Header>
      <SongBottom id={props.match.params.id}></SongBottom>
    </div>
  );
}
