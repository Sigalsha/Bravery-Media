import React, { useContext } from "react";
import { ResultContext } from "../../contexts/ResultContext";
import { Grid, Item } from "./style";
import SearchResult from "../searchResult/SearchResult";

const SearchResults = ({ searchResults }) => {
  const { onResultClick, open } = useContext(ResultContext);

  return (
    <Grid open={open}>
      {searchResults.map((item) => (
<<<<<<< HEAD
        <SearchResult item={item} />
=======
        <Item key={item.id}>
          <p>
            name:{item.title}
            <br />
            type:{item.type}
            <br />
            description:
            <br />
            {item.plot}
          </p>
        </Item>
>>>>>>> d1eed0b014f21744279a17fb193f1b21387652de
      ))}
    </Grid>
  );
};

export default SearchResults;

{
  /* <Item key={item.id} open={open} onClick={onResultClick}>
  <p>
    name:{item.title}
    <br />
    type:{item.type}
    <br />
    description:
    <br />
    {item.plot}
  </p>
</Item>; */
}
