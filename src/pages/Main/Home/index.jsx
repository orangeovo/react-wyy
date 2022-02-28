import React from "react";
import PubHeader from "../../../components/PubHeader";
import HomeTitle from "./HomeTitle";
import HomeBottom from "./HomeBottom";
const Home = () => {
  return (
    <div>
      <PubHeader typeof={true} title={"主页"} type={true}></PubHeader>
      <HomeTitle></HomeTitle>
      <HomeBottom></HomeBottom>
    </div>
  );
};

export default Home;
