/* eslint-disable react/jsx-props-no-spreading */
import React from 'preact/compat';
import TinderCard from 'react-tinder-card';
import {WordPair}  from '../../../types';
import styles from './SwipeCard.module.css';

interface SwipeCardProps extends React.HTMLAttributes<HTMLDivElement> {
  onSwipeLeft: () => void;
  onSwipeRight: () => void;
  item?: WordPair;
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
          key={item}
          onSwipe={(dir: string) => onCardSwipe(dir)}
          preventSwipe={['up', 'down']}
          className={styles.swipeCard}
        >
          <h3 className={styles.title}>{item.word}</h3>
          <h3 className={styles.translate}>{item.translate}</h3>
        </TinderCard>
      )}
    </div>
  );
};

export default SwipeCard;
