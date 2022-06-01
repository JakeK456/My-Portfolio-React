import React from "react";
import Navigation from "./Navigation";

function Header({ currentPage, handlePageChange }) {
  return (
    <div className="container">
      <div className="row">
        <h1 className="col">HEADER</h1>
        <div className="col">
          <Navigation
            currentPage={currentPage}
            handlePageChange={handlePageChange}
          />
        </div>
      </div>
    </div>
  );
}

export default Header;
