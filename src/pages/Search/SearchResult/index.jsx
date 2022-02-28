import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { createdplaysong } from "../../../redux/actions/Player_song";
import "./style.less";
export default function SearchResult() {
  const songs = useSelector((state) => state.songs);
  const dispatch = useDispatch();
  function addsongs() {
    dispatch(createdplaysong(songs[0]));
  }
  return (
    <div className="search-result">
      <div className="result-lists">
        <div className="play">
          {songs.length > 0 ? (
            <span onClick={addsongs}>播放全部{songs[0].length}</span>
          ) : null}
        </div>
        {songs.length > 0 ? (
          songs[0].map((ele, index) => {
            return (
              <div className="results-box" key={index}>
                <div style={{ fontSize: "17px" }}>{ele.name}</div>
                <div
                  style={{
                    color: "#8c939d",
                    marginTop: "5px",
                    paddingBottom: "10px",
                  }}
                >
                  {ele.ar[0].name}
                </div>
              </div>
            );
          })
        ) : (
          <div></div>
        )}
      </div>
    </div>
  );
}
