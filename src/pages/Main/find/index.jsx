import React, { useState, useEffect } from "react";
import HeaderNav from "../../../components/HeaderNav";
import Swiper from "../../../components/Swiper";
import SecondHeaderNav from "../../../components/SecondHeaderNav";
//推荐歌单
import FindHostlist from "./findHotlist";
//新碟上架
import FindHitList from "./findHitList";
//热门歌单
import FindPopularAlbumList from "./findPopularAlbumList";
// 网友精选
import FindNetizenList from "./findNetizenList";
//推荐MV
import FindMvList from "./findMvList";
import api from "../../../api";

const Find = () => {
  const [bannerList, setBannerList] = useState([]);

  // 获取轮播图
  useEffect(() => {
    api.getBanners().then((res) => {
      if (res.status === 200) {
        setBannerList(res.data.banners);
      }
    });
  }, []);

  return (
    <div>
      <HeaderNav />
      <Swiper banners={bannerList} />
      <SecondHeaderNav />
      <FindHostlist />
      <FindHitList />
      <FindNetizenList />
      <FindPopularAlbumList />
      <FindMvList />
    </div>
  );
};

export default Find;
