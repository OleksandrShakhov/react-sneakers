import React from 'react'
import styles from "./Card.module.scss"

function Card({imageUrl, title, price, onPlus}) {
  const [isAdded, setIsAdded] = React.useState(false);
  const [isFavorite, setIsFavorite] = React.useState(false);

  // function to change the Heart button onCLick
  const onClickFavorite = () => {
    setIsFavorite(!isFavorite);
  }

//function to change the Plus button onClick
  const onClickPlus = () => {
    onPlus({title, price, imageUrl});
    setIsAdded(!isAdded);
  }

  return (
    <div className={styles.card}>
      <div className={styles.favorite}>
        <img 
          onClick={onClickFavorite}
          src={isFavorite ? "/img/heart-liked.svg" : "/img/heart-unliked.svg"}
          alt="Unliked" />
      </div>
      <img width="133" height="112" src={imageUrl} alt="sneakers" />
      <h5>{title}</h5>
      <div className={styles.cardBottom}>
        <div className={styles.cardBottomPrice}>
          <span>Price:</span> 
          <b>$ {price}</b>
        </div>
        <img
          onClick={onClickPlus}
          src={isAdded ? "/img/btn-checked.svg" : "/img/plus.svg"} alt="add" />
      </div>
    </div>
  );
}

export default Card;