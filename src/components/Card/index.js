import React from 'react';
import styles from './Card.module.scss';

function Card(props){

const [isAdded, setIsAdded] = React.useState(false);

const onClickPlus = () => {
    setIsAdded(!isAdded);
}

return(
    <div className={styles.cart}>
        <div>
            <img 
            className={styles.favorite} 
            onClick={onClickPlus} 
            src={isAdded ? "/img/heart-liked.svg" : "/img/heart-unliked.svg"} 
            alt="Unliked" />
        </div>
        <img width={133} height={112} src={props.imageUrl} alt="" />
        <h5>{props.title}</h5>
        <div className="d-flex justify-between align-center">
        <div className="d-flex flex-column">
            <span>Price:</span>
            <b>{props.price}€</b>
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