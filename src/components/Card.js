function Card(props){
    return(

    <div className="cart">
        <div className="favorite" onClick={props.onFavorite}>
        <img src="/img/heart-unliked.svg" alt="Unliked" />
        </div>
        <img width={133} height={112} src={props.imageUrl} alt="" />
        <h5>{props.title}</h5>
        <div className="d-flex justify-between align-center">
        <div className="d-flex flex-column">
            <span>Price:</span>
            <b>{props.price}€</b>
        </div>
        <button className="button" onClick={props.onPlus}>
            <img width={11} height={11} src="/img/plus.svg" alt="Plus" />
        </button>
        </div>
    </div>
    
    );
} 

export default Card;