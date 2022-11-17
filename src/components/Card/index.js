import React from 'react';
import styles from './Card.module.scss';

function Card({ id,title, price, onFavorite, imageUrl, onPlus, favorites = false }){
    const [isAdded, setIsAdded] = React.useState(false);
    const [isFavorite, setIsFavorite] = React.useState(favorites);

    const onClickPlus = () => {
        onPlus({ title, imageUrl, price });
        setIsAdded(!isAdded);
    }

    const onClickFavorite = () => {
        onFavorite({ title, id, imageUrl, price });
        setIsFavorite(!isFavorite);
    }
return(
    <div className={styles.cart}>
        <div>
            <img 
                className={styles.favorite} 
                onClick={onClickFavorite} 
                src={ isFavorite ? "/img/heart-liked.svg" : "/img/heart-unliked.svg"}
                alt="Unliked" />
        </div>
        <img width={133} height={112} src={imageUrl} alt="" />
        <h5>{title}</h5>
        <div className="d-flex justify-between align-center">
        <div className="d-flex flex-column">
            <span>Price:</span>
            <b>{price}€</b>
        </div>
            <img 
            className={styles.plus} 
            onClick={onClickPlus} 
            src={isAdded ? "/img/btn-checked.svg" : "/img/btn-plus.svg"} 
            alt="Plus" />
        </div>
    </div>
    
    );
} 

export default Card;