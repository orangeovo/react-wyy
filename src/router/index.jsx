import React from "react";
import { HashRouter as Router, Route, Switch } from "react-router-dom";
import { useSelector } from "react-redux";
import Home from "../pages/Main/Home";
import Find from "../pages/Main/find";
import Mine from "../pages/Main/mine";
import Video from "../pages/Main/video";
import SongSheet from "../pages/SongSheet";
import MvDeatils from "../pages/MvDetails";
import Layout from "../pages/Main/Layout";
import BottomNav from "../components/BottomNav";
import Search from "../pages/Search";
import LoginMessage from "../components/LoginMessage";
import Login from "../pages/Login";
import SongBar from "../pages/SongBar";
import BoFangQi from "../pages/BoFangQi";
import SongPL from "../pages/SongPl";
import Tuijian from "../pages/tuijian";
import Paihb from "../pages/Paihb";
const AppRouter = () => {
  const songbars = useSelector((state) => state.songbar);
  return (
    <Router>
      <LoginMessage />
      <BoFangQi></BoFangQi>
      {songbars ? <SongBar /> : null}
      <Switch>
        <Route path="/login" component={Login}></Route>
        <Route path="/songsheet/:id/:type" component={SongSheet}></Route>
        <Route path="/mvdetails/:id/" component={MvDeatils}></Route>
        <Route path="/search" component={Search}></Route>
        <Route path="/songpl/:id" component={SongPL}></Route>
        <Route path="/tuijian" component={Tuijian}></Route>
        <Route path="/paihangbang" component={Paihb}></Route>
        <Layout path="/">
          <BottomNav />
          <Switch>
            <Route exact path="/" component={Find}></Route>
            <Route path="/home" component={Home}></Route>
            <Route path="/mine" component={Mine}></Route>
            <Route path="/video" component={Video}></Route>
          </Switch>
        </Layout>
      </Switch>
    </Router>
  );
};

export default AppRouter;
