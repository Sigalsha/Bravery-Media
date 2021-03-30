import React from "react";

const SearchResults = ({ searchResults }) => {
  return (
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
  );
};

export default SearchResults;
