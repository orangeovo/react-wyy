import React from "react";
import "./style.less";
const Mvheader = () => {
  function backHandle() {
    /**
     * 返回上一页两种方案
     *
     * hisotry.pushState()
     */
    // props.history.go(-1)
    window.history.back();
  }
  return (
    <div id="mv-header">
      <span className="back-icon" onClick={backHandle}>
        <i className="icon-chevron-left"></i>
      </span>
      <span className="icon-fenx">
        <i className="iconfont  icon-fenxiang"></i>
      </span>
    </div>
  );
};

export default Mvheader;
