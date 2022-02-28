import { createdsidebar } from "../../redux/actions/sidebar";
import { createduser } from "../../redux/actions/user";
import { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { createduserdetails } from "../../redux/actions/user_detail";
import { useHistory } from "react-router-dom";
import api from "../../api";
import "./style.less";

export default function LoginMessage() {
  let history = useHistory();
  const sidebar = useSelector((state) => state.sidebar);
  const [flag, setflag] = useState(false);
  const [flag2, setflag2] = useState(false);
  var timer1 = null;
  var timer2 = null;
  const dispatch = useDispatch();
  function guanbi() {
    dispatch(createdsidebar(false));
  }
  function loginout() {
    if (localStorage.getItem("user") === null) {
      setflag(true);
      timer1 = setTimeout(() => {
        setflag(false);
      }, 2000);
    } else {
      setflag2(true);
      timer2 = setTimeout(() => {
        setflag2(false);
      }, 2000);
      localStorage.removeItem("user");
      localStorage.removeItem("cookie");
      api.getlogout();
      //清空登录返还的信息
      dispatch(createduser(null));
      //关闭当前侧边栏
      dispatch(createdsidebar(false));
      //清空用户信息
      dispatch(createduserdetails(null));
      history.push("/");
    }
  }

  useEffect(() => {
    return () => {
      clearTimeout(timer1);
      clearTimeout(timer2);
    };
  }, []); // eslint-disable-line react-hooks/exhaustive-deps
  return (
    <div>
      {sidebar ? (
        <div className="login-message">
          <div className="left">
            <div className="vip">
              <h1>黑胶VIP</h1>
              <p>黑胶低至0.3元/天！还有万份好礼</p>
            </div>
            <div className="xinxi">
              <ul>
                <li>我的消息</li>
                <li>云贝中心</li>
                <li>创作者中心</li>
              </ul>
            </div>
            <div className="fuwu">
              <p>音乐服务</p>
              <ul>
                <li>云村有票</li>
                <li>商城</li>
                <li>游戏专区</li>
                <li>口袋彩铃</li>
              </ul>
            </div>
            <div className="qita">
              <p>其它</p>
              <ul>
                <li>设置</li>
                <li>夜间模式</li>
                <li>定时关闭</li>
                <li>个性装扮</li>
                <li>边听边存</li>
                <li>在线听歌免流量</li>
                <li>音乐黑名单</li>
                <li>青少年模式</li>
                <li>音乐闹钟</li>
              </ul>
            </div>
            <div className="dingdan">
              <p>订单</p>
              <ul>
                <li>我的订单</li>
                <li>优惠卷</li>
                <li>我的客服</li>
                <li>分享网易云音乐</li>
                <li>关于</li>
              </ul>
            </div>
            <div className="tuichulogin" onClick={loginout}>
              退出登录/关闭
            </div>
          </div>
          <div className="right" onClick={guanbi}></div>
          {flag ? (
            <div className="message-tanchuang">您还未登录,无法退出</div>
          ) : null}
          {flag2 ? <div className="message-tanchuang">退出成功</div> : null}
        </div>
      ) : null}
    </div>
  );
}
