import React from "react";
// import { CSSTransition } from "react-transition-group";
import { useState, useEffect, useRef, useCallback } from "react";
import { useSelector, useDispatch } from "react-redux";
import { createdplaysong } from "../../redux/actions/Player_song";
import { createdmusicsrc } from "../../redux/actions/Music_src";
import { useHistory } from "react-router-dom";
import api from "../../api/index";
import dateformat from "./methods";
import { Slider } from "antd";
import { format } from "./ui-help";
import "./style.less";
export default function SongBar() {
  let history = useHistory();
  const audios = useRef(null);
  const panelRefs = useRef(null);
  const [flag, setflag] = useState(true);
  const [flag2, setflag2] = useState(false);
  // 播放是否切换为暂停
  const [flag3, setflag3] = useState(true);
  const [songsdetails, setsongsdetails] = useState([]);
  const playersongs = useSelector((state) => state.playsongs);
  const musicsrcs = useSelector((state) => state.musicsrc);

  const [duration, setduration] = useState(0);
  const [currentTime, setCurrentTime] = useState("00:00"); //歌曲播放的时间
  const [progress, setProgress] = useState(0); //进度条的位置
  const [isChanging, setIsChanging] = useState(false); //滑动进度条与歌曲本身的冲突判断终止行为
  const [lyrics, setlyrics] = useState(null); //歌词
  const [currentLyc, setcurrentLyc] = useState(0); //当前歌词
  const [lyricList, setlyricList] = useState([]);
  const [lycStyle, setlycStyle] = useState({});
  const [flag4, setflag4] = useState(false); //敬请期待提示
  //判断是哪一首歌曲
  const [idx, setidx] = useState(0);
  const dispatch = useDispatch();

  function show() {
    setflag(false);
  }
  function hidden() {
    setflag(true);
  }

  function showsong() {
    setflag2(true);
  }
  function hidden2() {
    setflag2(false);
  }
  function damei() {
    setflag4(true);
    setTimeout(() => {
      setflag4(false);
    }, 1000);
  }
  //清空列表信息
  function clear() {
    dispatch(createdplaysong(""));
    dispatch(createdmusicsrc(""));
    setsongsdetails([]);
    setlyrics(null);
    setlyricList([]);

    setidx(0);
    audios.current.load();
  }
  //播放
  function bofang() {
    if (musicsrcs !== "") {
      audios.current.play();
      setflag3(false);
    }
  }
  //暂停
  function zant() {
    audios.current.pause();
    setflag3(true);
  }
  //获取音乐src
  function bfmusic(data, index) {
    setidx(index);
    api.getmusicurl(data).then((res) => {
      dispatch(createdmusicsrc(res.data.data[0]));
      setTimeout(() => {
        setduration(audios.current.duration);
      }, 100);
    });
  }
  //下一首
  function xiayishou() {
    if (musicsrcs !== "") {
      api.getmusicurl(playersongs[idx + 1].id).then((res) => {
        dispatch(createdmusicsrc(res.data.data[0]));
        setTimeout(() => {
          setduration(audios.current.duration);
        }, 100);
      });
      setidx(idx + 1);
      setlyricList([]);
    }
  }
  //上一首
  function shangyishou() {
    if (idx > 0) {
      api.getmusicurl(playersongs[idx - 1].id).then((res) => {
        dispatch(createdmusicsrc(res.data.data[0]));
        setTimeout(() => {
          setduration(audios.current.duration);
        }, 100);
      });
      setidx(idx - 1);
      setlyricList([]);
    }
  }
  //歌曲结束后自动播放下一首
  function zidong() {
    if (idx < playersongs.length) {
      api.getmusicurl(playersongs[idx + 1].id).then((res) => {
        dispatch(createdmusicsrc(res.data.data[0]));
        setTimeout(() => {
          setduration(audios.current.duration);
        }, 100);
      });
      setidx(idx + 1);
      setlyricList([]);
    }
  }
  //跳到评论页
  function pl(id) {
    history.push(`/songpl/${id}`);
    setflag2(false);
  }
  //播放的时候
  const timeUpdate = (e) => {
    setlycStyle({ marginTop: `0px` });
    setcurrentLyc(0);
    // console.log(audios.current.currentTime);
    let timer = format(audios.current.currentTime);
    for (let i = currentLyc; i < lyricList.length; i++) {
      if (
        lyricList[i + 1] &&
        timer < lyricList[i + 1].time &&
        timer > lyricList[i].time
      ) {
        setcurrentLyc(i);
        setlycStyle({ marginTop: `${-0.543 * i}rem` });
      }
    }
    if (!isChanging) {
      setCurrentTime(e.target.currentTime);
      setProgress((currentTime / e.target.duration) * 100);
    }
  };

  function getLyric(value) {
    // 获得歌词
    let result = value;
    setlyricList([]);
    result
      .split(/[\n]/) // 截取中括号
      .forEach((item) => {
        let temp = item.split(/\[(.+?)\]/);
        if (temp[2] !== "" && temp[2] !== undefined) {
          lyricList.push({
            time: temp[1], // 时间
            lyc: temp[2], //歌词内容
          });
        }
      });
    setlyricList(lyricList);
  }
  const sliderChange = useCallback(
    (value) => {
      setIsChanging(true);
      const currentTime = (value / 100) * duration;
      setCurrentTime(currentTime);
      setProgress(value);
    },
    [duration]
  );
  const sliderAfterChange = useCallback(
    (value) => {
      const currentTime = (value / 100) * duration;
      audios.current.currentTime = currentTime;
      setCurrentTime(currentTime);
      setIsChanging(false);
    },
    [duration]
  );
  useEffect(() => {
    if (playersongs !== "") {
      setidx(0);
      api.getmusicurl(playersongs[0].id).then((res) => {
        dispatch(createdmusicsrc(res.data.data[0]));
        setTimeout(() => {
          setduration(audios.current.duration);
        }, 100);
      });
    } else if (playersongs === "") {
    }
  }, [playersongs]); // eslint-disable-line react-hooks/exhaustive-deps

  useEffect(() => {
    if (musicsrcs !== "") {
      api.getSongsDetails(musicsrcs.id).then((res) => {
        setsongsdetails(res.data.songs);
        setflag3(false);
      });
      api.getlyric(musicsrcs.id).then((res) => {
        if (res.status === 200) {
          setlyrics(res.data.lrc.lyric);
          getLyric(res.data.lrc.lyric);
        }
      });
    } else {
      console.log("空");
    }
  }, [musicsrcs]); // eslint-disable-line react-hooks/exhaustive-deps

  return (
    <div className="song-bar-box">
      <audio
        ref={audios}
        autoPlay={true}
        src={musicsrcs.url}
        onEnded={zidong}
        onTimeUpdate={timeUpdate}
        onChange={sliderChange}
        value={progress}
      ></audio>
      {flag ? (
        <div className="song-bar">
          <div className="cd-box" onClick={showsong}>
            {songsdetails.length === 0 ? (
              <img src={require("../../assets/img/cd.jpg")} alt="" />
            ) : (
              <img src={songsdetails[0].al.picUrl} alt="" />
            )}
          </div>
          <div className="song-name">
            {songsdetails.length === 0 ? (
              <p>欢迎使用-orange</p>
            ) : (
              <p>
                {songsdetails[0].name}-{songsdetails[0].ar[0].name}
              </p>
            )}
          </div>
          <div className="bofang">
            {flag3 ? (
              <i
                className="iconfont icon-bofang2"
                style={{ fontSize: "18px" }}
                onClick={bofang}
              ></i>
            ) : (
              <i className="iconfont icon-zanting" onClick={zant}></i>
            )}
          </div>
          <div className="song-more">
            <i className="iconfont icon-danlieliebiao" onClick={show}></i>
          </div>
        </div>
      ) : (
        <div className="song-detail-box">
          <div className="mask-box" onClick={hidden}></div>
          <div className="songs-box">
            <h1>当前播放({playersongs === "" ? 0 : playersongs.length})</h1>
            <h2 onClick={clear}>清空</h2>
            {playersongs === "" ? (
              <div className="songs-details"></div>
            ) : (
              playersongs.map((ele, index) => {
                return (
                  <div className="songs-details" key={index}>
                    <div onClick={() => bfmusic(ele.id, index)}>
                      <span style={index === idx ? { color: "red" } : {}}>
                        {ele.name}
                      </span>
                      - {ele.ar[0].name}
                    </div>
                  </div>
                );
              })
            )}
          </div>
        </div>
      )}
      {flag2 ? (
        <div className="danqu-detail">
          <div className="header">
            <i className="iconfont icon-xiajiantou" onClick={hidden2}></i>
            <i className="iconfont  icon-fenxiang"></i>
          </div>
          <div className="title">
            {songsdetails.length === 0 ? (
              <h2>欢迎使用</h2>
            ) : (
              <h2>{songsdetails[0].name}</h2>
            )}
            {songsdetails.length === 0 ? (
              <p>orange</p>
            ) : (
              <p>{songsdetails[0].ar[0].name}</p>
            )}
          </div>
          <div className="img-box">
            {songsdetails.length === 0 ? (
              <img src={require("../../assets/img/cd.jpg")} alt="" />
            ) : (
              <img src={songsdetails[0].al.picUrl} alt="" />
            )}
          </div>
          <div className="geci" ref={panelRefs}>
            <div className="neikuai" style={lycStyle}>
              {lyrics === null ? (
                <p>暂无歌词</p>
              ) : (
                // lyrics.map((ele, index) => {
                //   return <div key={index}>{ele.content}</div>;
                // })
                lyricList.map((item, index) => {
                  return (
                    <p
                      style={currentLyc === index ? { color: "#fff" } : {}}
                      key={index}
                    >
                      {item.lyc}
                    </p>
                  );
                })
              )}
            </div>
          </div>
          <div className="gongn-yi">
            <i className="iconfont  icon-kongxin" onClick={damei}></i>
            <i className="iconfont  icon-xiazai1" onClick={damei}></i>
            {playersongs === "" ? (
              <i className="iconfont  icon-pinglun"></i>
            ) : (
              <i
                className="iconfont  icon-pinglun"
                onClick={() => pl(playersongs[idx].id)}
              ></i>
            )}
            <i className="iconfont icon-gengduo" onClick={damei}></i>
          </div>
          <div className="jindutiao">
            {musicsrcs !== "" ? dateformat(currentTime) : "00:00"}
            <Slider
              defaultValue={0}
              value={progress}
              onChange={sliderChange}
              onAfterChange={sliderAfterChange}
            />
            {musicsrcs !== "" ? dateformat(audios.current.duration) : "00:00"}
          </div>
          <div className="gongn-er">
            <i className="iconfont  icon-liebiaoxunhuan" onClick={damei}></i>
            <i
              className="iconfont  icon-shangyishoushangyige"
              onClick={shangyishou}
            ></i>
            {flag3 ? (
              <i
                className="iconfont icon-bofang2"
                style={{ fontSize: "20px" }}
                onClick={bofang}
              ></i>
            ) : (
              <i className="iconfont icon-zanting" onClick={zant}></i>
            )}
            <i
              className="iconfont  icon-xiayigexiayishou"
              onClick={xiayishou}
            ></i>
            <i className="iconfont icon-danlieliebiao" onClick={show}></i>
          </div>
          {flag4 ? <div className="kfz">开发中</div> : null}
        </div>
      ) : null}
    </div>
  );
}
