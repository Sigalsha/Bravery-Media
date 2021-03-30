import React from "react";
import Header from "./components/header/Header";
import Navbar from "./components/navbar/Navbar";
import Search from "./components/search/Search";
import { BrowserRouter as Router, Route } from "react-router-dom";
import { GlobalStyles } from "./styles/global";

function App() {
  return (
    <Router>
      <GlobalStyles />
      <Navbar />
      <Header />
      <Route path="/"></Route>
      <Search />
    </Router>
  );
}

export default App;
