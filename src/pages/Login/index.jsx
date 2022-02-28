import React from "react";
import { useRef, useState, useEffect } from "react";
import { useDispatch } from "react-redux";
import { createduser } from "../../redux/actions/user";
import { createdsongbar } from "../../redux/actions/songbar";
import api from "../../api";
import "./style.less";
export default function Login(props) {
  const inputEl1 = useRef(null);
  const inputEl2 = useRef(null);
  const [flag, setflag] = useState(false);
  const [flag2, setflag2] = useState(false);
  var timer1 = null;
  var timer2 = null;
  const dispatch = useDispatch();
  function login() {
    const user = inputEl1.current.value;
    const password = inputEl2.current.value;
    if (inputEl1.current.value === "" || inputEl2.current.value === "") {
      setflag2(true);
      timer1 = setTimeout(() => {
        setflag2(false);
      }, 3000);
    }
    api.getLogin(user, password).then((res) => {
      if (res.data.code === 400) {
        setflag(true);
        timer2 = setTimeout(() => {
          setflag(false);
        }, 3000);
      } else if (res.data.code === 200) {
        dispatch(createduser(res.data));
        localStorage.setItem("cookie", JSON.stringify(res.data.cookie));
        localStorage.setItem("user", JSON.stringify(res.data));
        inputEl1.current.value = "";
        inputEl2.current.value = "";
        props.history.push("/home");
      }
    });
  }
  useEffect(() => {
    dispatch(createdsongbar(false));
    return () => {
      clearTimeout(timer1);
      clearTimeout(timer2);
      dispatch(createdsongbar(true));
    };
  }, []); // eslint-disable-line react-hooks/exhaustive-deps

  return (
    <div className="login">
      <div className="login-box">
        <input type="text" placeholder="请输入账号" ref={inputEl1} />
        <input type="password" placeholder="请输入密码" ref={inputEl2} />
        <br />
        <button onClick={login}>登录</button>
        <p>暂时只支持手机密码方式登录，其他方式正在开发中..</p>
      </div>
      {flag ? <div className="errormessage">账号或密码有误</div> : null}
      {flag2 ? <div className="errormessage">账号密码不能为空</div> : null}
    </div>
  );
}
