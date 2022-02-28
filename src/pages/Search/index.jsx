import React from "react";
import HeaderNav from "./HeaderNav";
import SearchList from "./SearchList";
import SearchResult from "./SearchResult";
export default function Search() {
  return (
    <div>
      <HeaderNav></HeaderNav>
      <SearchList></SearchList>
      <SearchResult></SearchResult>
    </div>
  );
}
