import React, { useState, useEffect } from "react";
import SearchIcon from "@material-ui/icons/Search";
import { SearchContainer, Input } from "./style";
import { colors } from "../../styles/colors";
import SearchResults from "../searchResults/SearchResults";

const searchResultsItems = [
  {
    id: 1,
    name: "Schindler's List",
    searchType: "movie",
    description:
      "In German-occupied Poland during World War II, industrialist Oskar Schindler...",
    heroismRate: 3,
    selectedHeroismMoments: [57, 88],
    recommendations: ["המלצה 1", "המלצה 2"],
    suitableForEducation: true,
  },
  {
    id: 2,
    name: "The Pianist",
    searchType: "movie",
    description: "A Polish Jewish musician...",
    heroismRate: 5,
    selectedHeroismMoments: [60, 90],
    recommendations: ["המלצה 1", "המלצה 2"],
    suitableForEducation: true,
  },
  {
    id: 3,
    name: "Night",
    searchType: "book",
    creator: "Elie Wiesel",
    description: "Night is Elie Wiesel's masterpiece, a candid, horrific...",
    heroismRate: 9,
    selectedHeroismMoments: [100, 138],
    recommendations: ["recommendation 1...", "recommendation 2..."],
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
  icon: {
    margin: "1%",
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
        <SearchIcon style={classes.icon} />
        <input
          style={classes.input}
          type="text"
          name="search"
          placeholder="search..."
          value={searchTerm}
          onChange={handleChange}
        />
      </SearchContainer>
      {/*<ul>*/}
      {/*  {searchResults.map((item) => {*/}
      {/*    return <div key={item.id}>{item.name}</div>;*/}
      {/*  })}*/}
      {/*</ul>*/}

        <SearchResults searchResults={searchResults} />
    </div>
  );
};

export default Search;
