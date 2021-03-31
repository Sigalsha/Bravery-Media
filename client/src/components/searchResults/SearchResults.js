import React, { useContext } from "react";
import { ResultContext } from "../../contexts/ResultContext";
import { Grid, Item } from "./style";
import SearchResult from "../searchResult/SearchResult";

const SearchResults = ({ searchResults, bookData }) => {
  const { onResultClick, resultOpen } = useContext(ResultContext);

  return (
    <Grid>
      {searchResults.map((item) => (
        <SearchResult item={item} key={item.id} bookData={bookData} />
      ))}
    </Grid>
  );
};

export default SearchResults;
