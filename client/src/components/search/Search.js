import React, { useState, useEffect } from "react";
import SearchIcon from "@material-ui/icons/Search";
import { SearchContainer, Input } from "./style";
import { colors } from "../../styles/colors";
import SearchResults from "../searchResults/SearchResults";

const searchResultsItems = [
  {
    name: "Schindler's List",
    searchType: "movie",
    description:
      "In German-occupied Poland during World War II, industrialist Oskar Schindler...",
    heroismIndex: 3,
    selectedHeroismMoments: [57, 88],
    recommendation: ["המלצה 1", "המלצה 2"],
    suitableForEducation: true,
  },
  {
    name: "The Pianist",
    searchType: "movie",
    description: "A Polish Jewish musician...",
    heroismIndex: 5,
    selectedHeroismMoments: [60, 90],
    recommendation: ["המלצה 1", "המלצה 2"],
    suitableForEducation: true,
  },
];

const classes = {
  input: {
    backgroundColor: `${colors.TRANSPARENT}`,
    border: "none",
    outline: "none",
    color: `${colors.BLACK}`,
    marginTop: "1%",
  },
};

const Search = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [searchResults, setSearchResults] = useState([]);

  const handleChange = (e) => {
    setSearchTerm(e.target.value);
  };

  useEffect(() => {
    const results = searchResultsItems.filter((term) =>
      term.name.toLowerCase().includes(searchTerm)
    );
    setSearchResults(results);
  }, [searchTerm]);

  return (
    <div>
      <SearchContainer>
        <SearchIcon />
        <input
          style={classes.input}
          type="text"
          name="search"
          placeholder="חיפוש..."
          value={searchTerm}
          onChange={handleChange}
        />
      </SearchContainer>
      <ul>
        {searchResults.map((item) => {
          return <div>{item.name}</div>;
        })}
      </ul>
      {/*  <SearchResults searchResults={searchResults} /> */}
    </div>
  );
};

export default Search;
