import React from 'preact/compat';
import TinderCard from 'react-tinder-card';
import styles from './SwipeCard.module.css';

interface Item {
  title: string;
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
          key={item.title}
          onSwipe={(dir: string) => onCardSwipe(dir)}
          preventSwipe={['up', 'down']}
          className={styles.swipeCard}
        >
          <h3>{item.title}</h3>
        </TinderCard>
      )}
    </div>
  );
};

export default SwipeCard;
