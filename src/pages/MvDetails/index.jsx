import React from "react";
import { useState, useEffect } from "react";
import Mvheader from "../../components/Mvheader";
import MvVideo from "./MvVideo";
import MvInformation from "./MvInformation";
import MvComment from "../../components/MvComment";
import api from "../../api";
export default function MvDeatils(props) {
  const { id } = props.match.params;
  const [mvdetails, setmvdetails] = useState([]);
  const [mvurl, setmvurl] = useState([]);
  useEffect(() => {
    api.getMvDetails(id).then((res) => {
      if (res.status === 200) {
        setmvdetails(res.data.data);
      }
    });
    api.getMvurl(id).then((res) => {
      if (res.status === 200) {
        setmvurl(res.data.data);
      }
    });
  }, []); // eslint-disable-line react-hooks/exhaustive-deps

  return (
    <div>
      <Mvheader></Mvheader>
      <MvVideo data={mvurl}></MvVideo>
      <MvInformation data={mvdetails}></MvInformation>
      <MvComment id={id}></MvComment>
    </div>
  );
}
