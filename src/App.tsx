/* eslint-disable react/jsx-no-useless-fragment */
import React, { useState } from 'preact/compat';
import SwipeCard from './Components/SwipeCard';
import styles from './App.module.css';
import { dataFull } from './data';
import { mapWords } from './Utils/MapWords';
import { shuffleArray } from './Utils/ShuffleArray';

if (process.env.NODE_ENV === 'development') {
  // eslint-disable-next-line global-require
  require('preact/debug');
}

const shuffledWords = shuffleArray(dataFull);
const words = mapWords(shuffledWords);

const App = () => {
  const [items, setItems] = useState(words.slice(0, 6));
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isTranslated, setIsTranslated] = useState(false);

  const handleSwipeRight = () => {
    setIsTranslated(true);
    setItems((prev) => prev.slice(1));
  };

  const handleSwipeLeft = () => {
    setIsTranslated(false);

    setItems((prev) => {
      if (isTranslated) {
        return prev.slice(1);
      }
      return prev.slice(2);
    });
  };

  const handleAddMoreCards = () => {
    const newItems = words.slice(currentIndex + 6, currentIndex + 12);
    setItems((prev) => [...prev, ...newItems]);
    setCurrentIndex((prev) => prev + 6);
  };

  return (
    <div className={styles.app}>
      {items.map((item, index) => (
        <>
          <SwipeCard
            key={item.word}
            item={item}
            onSwipeRight={handleSwipeRight}
            onSwipeLeft={handleSwipeLeft}
            style={{
              zIndex: items.length - index,
              transform: `translate(-50%, -50%) translateY(-${index * 20}px)`,
            }}
          />
        </>
      ))}
      <button
        className={styles.button}
        type="button"
        onClick={handleAddMoreCards}
      >
        Load More
      </button>
    </div>
  );
};

export default App;
