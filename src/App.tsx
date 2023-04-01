/* eslint-disable react/jsx-no-useless-fragment */
import React, { useState } from 'preact/compat';
import SwipeCard from './Components/SwipeCard';
import styles from './App.module.css';
import { data } from './data';
import { mapWords } from './Utils/MapWords';

if (process.env.NODE_ENV === 'development') {
  // eslint-disable-next-line global-require
  require('preact/debug');
}
const words = mapWords(data);

const App = () => {
  const [items, setItems] = useState(words);
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
    </div>
  );
};

export default App;
