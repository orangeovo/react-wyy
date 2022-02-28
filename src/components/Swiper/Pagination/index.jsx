import React from "react";
import classNames from "classnames";
import "./style.less";

export default function Pagination(props) {
  let arr = new Array(props.len).fill(1);
  let currentIndex = props.currentIndex;
  return (
    <div className="swiper-pagination">
      <ul>
        {arr.map((ele, index) => {
          return (
            <li
              className={classNames({ selected: currentIndex === index })}
              key={index}
            ></li>
          );
        })}
      </ul>
    </div>
  );
}
