import React from "react";
import { createdsidebar } from "../../redux/actions/sidebar";
import { useDispatch } from "react-redux";
import "./style.less";
const PubHeader = (props) => {
  const dispatch = useDispatch();
  function sidebarshow() {
    dispatch(createdsidebar(true));
  }
  function backHandle() {
    window.history.back();
  }
  return (
    <div id="common-header">
      {props.typeof !== true ? (
        <span className="back-icon" onClick={backHandle}>
          <i className="icon-chevron-left"></i>
        </span>
      ) : (
        <span className="back-icon">
          <i className="iconfont icon-danlieliebiao" onClick={sidebarshow}></i>
        </span>
      )}
      <h1>{props.title}</h1>
      {props.type ? (
        <span className="right-icon">
          <i className="iconfont iconfont icon-sousuo"></i>
        </span>
      ) : (
        <span className="right-icon">
          <i className="iconfont icon-gengduo"></i>
        </span>
      )}
    </div>
  );
};

export default PubHeader;
