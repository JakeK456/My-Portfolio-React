import React, { useState } from "react";
import Header from "./Header";
import Footer from "./Footer";
import Home from "./pages/Home";
import About from "./pages/About";
import Work from "./pages/Work";
import Contact from "./pages/Contact";

export default function PortfolioContainer() {
  const [currentPage, setCurrentPage] = useState("Home");

  // This function is checking to see what the value of `currentPage` is. Depending on the value of currentPage, we return the corresponding component to render.
  const renderPage = () => {
    switch (currentPage) {
      case "Home":
        return <Home />;
      case "About":
        return <About />;
      case "Work":
        return <Work />;
      default:
        return <Contact />;
    }
  };

  const handlePageChange = (page) => setCurrentPage(page);

  return (
    <div>
      {/* We are passing the currentPage from state and the function to update it */}
      <Header currentPage={currentPage} handlePageChange={handlePageChange} />
      {/* Here we are calling the renderPage function which will return a component  */}
      {renderPage()}
      <Footer />
    </div>
  );
}
