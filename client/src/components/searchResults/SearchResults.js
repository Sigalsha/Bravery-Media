import React from "react";
import { Grid, Item } from "./style";
const SearchResults = ({ searchResults }) => {
  return (
    <Grid>
      {searchResults.map((item) => (
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
      ))}
    </Grid>
  );
};

export default SearchResults;
