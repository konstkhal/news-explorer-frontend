import "./SearchResults.css";
import NewsCard from "../NewsCard/NewsCard";
import ShowMoreButton from "../ShowMoreButton/ShowMoreButton";
import { useEffect, useState } from "react";
import Preloader from "../Preloader/Preloader";
import ArticleSection from "../ArticleSection/ArticleSection";

const SearchResults = ({ isSearching, searchResults }) => {
  const [displaySets, setDisplaySets] = useState(0);
  const [displayCards, setDisplayCards] = useState([]);

  const getDisplayCards = (cardArray, count = 1, size = 3) => {
    const lastIndex = count * size - 1;
    const cardsToDisplay = cardArray.slice(0, lastIndex + 1);
    return cardsToDisplay.map((card, i) => (
      <NewsCard key={i} {...card}></NewsCard>
    ));
  };

  const handleGetNextCards = () => {
    // temporarily displaying mock data
    const nextThree = getDisplayCards(searchResults, displaySets + 1);
    setDisplayCards(nextThree);
    setDisplaySets(displaySets + 1);
  };

  useEffect(() => {
    setDisplaySets(0);
    setDisplayCards([]);
    if (searchResults.length !== 0) {
      const newCards = getDisplayCards(searchResults);
      setDisplayCards(newCards);
      setDisplaySets(1);
    }
  }, [searchResults]);

  return (
    <>
      {isSearching && <Preloader text={` Searching for news...`} />}
      {displaySets !== 0 && (
        <ArticleSection>
          {displaySets !== 0 && (
            <h2 className="results__title">Search results</h2>
          )}
          <ul className="results__article-container">{displayCards}</ul>
          {!isSearching && <ShowMoreButton getNextCards={handleGetNextCards} />}
        </ArticleSection>
      )}
    </>
  );
};

export default SearchResults;
