import React, { useState, useEffect, useContext } from "react";
import { SearchContainer, Input, StyledButton, StyledIcon } from "./style";
import SearchResults from "../searchResults/SearchResults";
import ResultContextProvider from "../../contexts/ResultContext";
import { ResultContext } from "../../contexts/ResultContext";
import axios from "axios";
import Loader from "react-loader-spinner";
import { colors } from "../../styles/colors";

const URL = "https://www.googleapis.com/books/v1/volumes/ux44DgAAQBAJ";

const searchResultsItems = [
  {
    id: "tt0108052",
    title: "Schindler's List",
    type: "Movie",
    creator: "Steven Spielberg",
    image:
      "https://imdb-api.com/images/original/MV5BNDE4OTMxMTctNmRhYy00NWE2LTg3YzItYTk3M2UwOTU5Njg4XkEyXkFqcGdeQXVyNjU0OTQ0OTY@._V1_Ratio0.6791_AL_.jpg",
    plot:
      "Oskar Schindler is a vain and greedy German businessman who becomes an unlikely humanitarian amid the barbaric German Nazi reign when he feels compelled to turn his factory into a refuge for Jews. Based on the true story of Oskar Schindler who managed to save about 1100 Jews from being gassed at the Auschwitz concentration camp, it is a testament to the good in all of us.",
    braveryRate: 3,
    selectedHeroismMoments: [57, 88],
    recommendations: ["recommendation 1...", "recommendation 2..."],
    suitableForEducation: true,
  },
  {
    id: "tt01080456",
    title: "The Pianist",
    type: "Movie",
    creator: "Steven Spielberg",
    image:
      "https://imdb-api.com/images/original/MV5BNDE4OTMxMTctNmRhYy00NWE2LTg3YzItYTk3M2UwOTU5Njg4XkEyXkFqcGdeQXVyNjU0OTQ0OTY@._V1_Ratio0.6791_AL_.jpg",
    plot:
      "A Polish Jewish musician struggles to survive the destruction of the Warsaw ghetto of World War II.",
    braveryRate: 8,
    selectedHeroismMoments: [40, 95],
    recommendations: ["recommendation 1...", "recommendation 2..."],
    suitableForEducation: true,
  },
  {
    id: "tt0108088",
    title: "Life Is Beautiful",
    type: "Movie",
    creator: "Steven Spielberg",
    image:
      "https://imdb-api.com/images/original/MV5BNDE4OTMxMTctNmRhYy00NWE2LTg3YzItYTk3M2UwOTU5Njg4XkEyXkFqcGdeQXVyNjU0OTQ0OTY@._V1_Ratio0.6791_AL_.jpg",
    plot:
      "When an open-minded Jewish librarian and his son become victims of the Holocaust, he uses a perfect mixture of will, humor, and imagination to protect his son from the dangers around their camp.",
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
  const { onResultClick, resultOpen } = useContext(ResultContext);
  const [data, setData] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [isError, setErrorStat] = useState(false);

  const handleChange = (e) => {
    setSearchTerm(e.target.value);
  };

  const handleSearch = () => {
    // TODO - send req to server with searchType (/route) & searchQuery.
    // should be async, maybe useEffect()
    const results = searchResultsItems.filter((term) =>
      term.title.toLowerCase().includes(searchTerm)
    );
    setSearchTerm("");
    setSearchResults(results);
  };

  useEffect(() => {
    const fetchData = async () => {
      setIsLoading(true);
      try {
        const result = await axios(URL);
        setData(result.data);
        console.log(result.data);
        setIsLoading(false);
      } catch (err) {
        console.log("err: ", err);
        setErrorStat(true);
      }
    };

    fetchData();
    return () => setIsLoading(false);
  }, []);

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
      {isLoading ? (
        <div id="loader">
          <Loader
            type="BallTriangle"
            color={colors.GREY}
            height={300}
            width={300}
          />
        </div>
      ) : (
        <SearchResults searchResults={searchResults} bookData={data} />
      )}
      {isError && <h1>Something went wrong ...</h1>}
    </div>
  );
};

export default Search;
// resultOpen={resultOpen}
