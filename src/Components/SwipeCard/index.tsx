/* eslint-disable react/jsx-props-no-spreading */
import React from 'preact/compat';
import TinderCard from 'react-tinder-card';
import styles from './SwipeCard.module.css';

interface Item {
  word: string;
  isTranslate?: boolean;
}

interface SwipeCardProps extends React.HTMLAttributes<HTMLDivElement> {
  onSwipeLeft: () => void;
  onSwipeRight: () => void;
  item?: Item;
}

const SwipeCard: React.FC<SwipeCardProps> = ({
  item,
  onSwipeLeft,
  onSwipeRight,
  ...rest
}) => {
  const onCardSwipe = (direction: string) => {
    if (direction === 'left') {
      onSwipeLeft();
    }
    if (direction === 'right') {
      onSwipeRight();
    }
  };

  return (
    <div className={styles.cardContainer} {...rest}>
      {item && (
        <TinderCard
          key={item.word}
          onSwipe={(dir: string) => onCardSwipe(dir)}
          preventSwipe={['up', 'down']}
          className={styles.swipeCard}
        >
          <h3>{item.word}</h3>
          {item.isTranslate && <p>TRANSLATED</p>}
        </TinderCard>
      )}
    </div>
  );
};

export default SwipeCard;
