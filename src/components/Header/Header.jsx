import React from "react";
import SearchBar from "../SearchBar/SearchBar";
import Container from "./Container";

const Header = () => {
  return (
    <header className="w-full z-10  shadow-dark-more px-2">
      <div
        className="
        py-4
        border-b-[1px]
        w-full
        "
      >
        <Container>
          <SearchBar />
        </Container>
      </div>
    </header>
  );
};

export default Header;
