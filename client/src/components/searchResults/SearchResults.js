import React from "react";
import {SearchResultContainer} from "./style"
const SearchResults = ({ searchResults }) => {
  return (
    <SearchResultContainer>
    <ul>
      {searchResults.map((item) => (
        <div key={item.id}>
          <span>name: {item.name}</span>
          <br />
          <span>term type: {item.searchType}</span>
          <br />
          <p>
            description:
            {item.description}
          </p>
          <br />
          <span>heroism rate: {item.heroismRate} / 5</span>
          <br />
          <ul>
            {item.recommendations.map((rec) => {
              return <li>{rec}</li>;
            })}
          </ul>
          <ul>
            {item.selectedHeroismMoments.map((moment) => {
              return <li>{moment}</li>;
            })}
          </ul>
          {item.suitableForEducation}
        </div>
      ))}
    </ul>
    </SearchResultContainer>
  );
};

export default SearchResults;
