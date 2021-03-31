import React from "react";
import Header from "./components/header/Header";
import Navbar from "./components/navbar/Navbar";
import Search from "./components/search/Search";
import Landing from "./components/landing/Landing";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { GlobalStyles } from "./styles/global";

function App() {
  return (
    <Router>
      <GlobalStyles />
      <Navbar />
      <Header />
      <Route path="/" exact component={Landing}></Route>
      <Route path="/movies" render={(props) => <Search {...props} />} />
      <Route path="/books" render={(props) => <Search {...props} />} />
      <Route path="/songs" render={(props) => <Search {...props} />} />
      <Route path="/articles" render={(props) => <Search {...props} />} />
    </Router>
  );
}

export default App;
