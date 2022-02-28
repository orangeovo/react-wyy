import React from "react";
import PubHeader from "../../../components/PubHeader";
import Minemesaage from "./Minemessage";
const Mine = () => {
  return (
    <div>
      <PubHeader title={"我的"} type={false} typeof={true}></PubHeader>
      <Minemesaage></Minemesaage>
    </div>
  );
};

export default Mine;
