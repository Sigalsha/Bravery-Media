import React from "react";
import {Grid,Item} from "./style"
const SearchResults = ({ searchResults }) => {
  return (
    <Grid>
      {searchResults.map((item) => (
        <Item key={item.id}>
          <p>
            name:{item.name}<br/>
            type:{item.searchType}<br/>
            description:<br/>
            {item.description}
          </p>
          {/*<span>name: {item.name}</span>*/}
          {/*<span>term type: {item.searchType}</span>*/}
          {/*<p>*/}
          {/*  description:*/}
          {/*  {item.description}*/}
          {/*</p>*/}
          {/*<span>heroism rate: {item.heroismRate} / 5</span>*/}
          {/*/!*<ul>*!/*/}
          {/*/!*  {item.recommendations.map((rec) => {*!/*/}
          {/*/!*    return <li>{rec}</li>;*!/*/}
          {/*/!*  })}*!/*/}
          {/*/!*</ul>*!/*/}
          {/*/!*<ul>*!/*/}
          {/*/!*  {item.selectedHeroismMoments.map((moment) => {*!/*/}
          {/*/!*    return <li>{moment}</li>;*!/*/}
          {/*/!*  })}*!/*/}
          {/*/!*</ul>*!/*/}
          {/*{item.suitableForEducation}*/}
        </Item>
      ))}
    </Grid>
  );
};

export default SearchResults;
