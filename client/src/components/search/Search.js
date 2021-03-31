import React, { useState, useEffect } from "react";
import { SearchContainer, Input, StyledButton, StyledIcon } from "./style";
import SearchResults from "../searchResults/SearchResults";

const searchResultsItems = [
  {
    id: "tt0108052",
    title: "Schindler's List",
    type: "Movie",
    image:
      "https://imdb-api.com/images/original/MV5BNDE4OTMxMTctNmRhYy00NWE2LTg3YzItYTk3M2UwOTU5Njg4XkEyXkFqcGdeQXVyNjU0OTQ0OTY@._V1_Ratio0.6791_AL_.jpg",
    plot:
      "Oskar Schindler is a vain and greedy German businessman who becomes an unlikely humanitarian amid the barbaric German Nazi reign when he feels compelled to turn his factory into a refuge for Jews. Based on the true story of Oskar Schindler who managed to save about 1100 Jews from being gassed at the Auschwitz concentration camp, it is a testament to the good in all of us.",
    creator: "Steven Spielberg",
    braveryRate: 3,
    selectedHeroismMoments: [57, 88],
    recommendations: ["recommendation 1...", "recommendation 2..."],
    suitableForEducation: true,
  },
  {
    id: "tt01080456",
    title: "The Pianist",
    type: "Movie",
    image:
      "https://imdb-api.com/images/original/MV5BNDE4OTMxMTctNmRhYy00NWE2LTg3YzItYTk3M2UwOTU5Njg4XkEyXkFqcGdeQXVyNjU0OTQ0OTY@._V1_Ratio0.6791_AL_.jpg",
    plot:
      "A Polish Jewish musician struggles to survive the destruction of the Warsaw ghetto of World War II.",
    creator: "Roman Polanski",
    braveryRate: 8,
    selectedHeroismMoments: [40, 95],
    recommendations: ["recommendation 1...", "recommendation 2..."],
    suitableForEducation: true,
  },
  {
    id: "tt0108088",
    title: "Life Is Beautiful",
    type: "Movie",
    image:
      "https://imdb-api.com/images/original/MV5BNDE4OTMxMTctNmRhYy00NWE2LTg3YzItYTk3M2UwOTU5Njg4XkEyXkFqcGdeQXVyNjU0OTQ0OTY@._V1_Ratio0.6791_AL_.jpg",
    plot:
      "When an open-minded Jewish librarian and his son become victims of the Holocaust, he uses a perfect mixture of will, humor, and imagination to protect his son from the dangers around their camp.",
    creator: "Roberto Benigni",
    braveryRate: 7,
    selectedHeroismMoments: [35, 72],
    recommendations: ["recommendation 1...", "recommendation 2..."],
    suitableForEducation: true,
  },
];

const Search = (props) => {
  const searchType = props.location.pathname;
  console.log(searchType);
  const [searchTerm, setSearchTerm] = useState("");
  const [searchResults, setSearchResults] = useState([]);

  const handleChange = (e) => {
    setSearchTerm(e.target.value);
  };

  const handleSearch = () => {
    // TODO - send req to server with searchType (/route) & searchQuery.
    // should be async, maybe useEffect()
    const results = searchResultsItems.filter((term) =>
      term.title.toLowerCase().includes(searchTerm)
    );
    setSearchResults(results);
  };

  /*   useEffect(() => {
    const results = searchResultsItems.filter((term) =>
      term.title.toLowerCase().includes(searchTerm)
    );
    setSearchResults(results);
  }, [searchTerm]); */

  return (
    <div>
      <SearchContainer>
        <Input
          type="text"
          name="search"
          placeholder="search..."
          value={searchTerm}
          onChange={handleChange}
        />
        <StyledButton type="button" onClick={handleSearch}>
          <StyledIcon />
        </StyledButton>
      </SearchContainer>
      <SearchResults searchResults={searchResults} />
    </div>
  );
};

export default Search;
