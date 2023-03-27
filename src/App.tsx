import React, { useState } from 'preact/compat';
import SwipeCard from './Components/SwipeCard';
import styles from './App.module.css';

if (process.env.NODE_ENV === 'development') {
  // eslint-disable-next-line global-require
  require('preact/debug');
}

const App = () => {
  const [items, setItems] = useState([
    { title: 'Uno' },
    { title: 'Dos' },
    { title: 'Tres' },
    { title: 'Cuatro' },
  ]);

  const handleSwipeRight = () => {
    setItems((prev) => prev.slice(1));
  };

  const handleSwipeLeft = () => {
    setItems((prev) => prev.slice(1));
  };

  return (
    <div className={styles.app}>
      {items.map((item, index) => (
        <SwipeCard
          key={item.title}
          item={item}
          onSwipeRight={handleSwipeRight}
          onSwipeLeft={handleSwipeLeft}
          style={{
            zIndex: items.length - index,
            transform: `translateY(-${index * 15}px)`,
          }}
        />
      ))}
    </div>
  );
};

export default App;
