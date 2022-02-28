import React, { useEffect, useState, useRef } from "react";
import "./style.less";
export default function LoadMore(props) {
  const more = useRef();
  const [LoadTop, setLoadTop] = useState(10000);
  useEffect(() => {
    //视口高度
    let timer = null;
    let winHeight = document.documentElement.clientHeight;
    window.addEventListener("scroll", () => {
      if (more.current) {
        setLoadTop(more.current.getBoundingClientRect().top);
        if (timer) {
          clearTimeout(timer);
        } else {
          timer = setTimeout(() => {
            if (winHeight > LoadTop) {
              props.onLoadMore();
            }
          }, 300);
        }
      }
    });
  }, [LoadTop]); // eslint-disable-line react-hooks/exhaustive-deps
  return (
    <div className="loadmore" ref={more}>
      加载更多
    </div>
  );
}
