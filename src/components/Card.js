function Card(){
    return(

    <div className="cart">
        <div className="favorite">
        <img src="/img/heart-unliked.svg" alt="Unliked" />
        </div>
        <img width={133} height={112} src="/img/sneakers/1.jpg" alt="" />
        <h5>Men's Sneakers Nike Blazer Mid Suede</h5>
        <div className="d-flex justify-between align-center">
        <div className="d-flex flex-column">
            <span>Price:</span>
            <b>250€</b>
        </div>
        <button className="button">
            <img width={11} height={11} src="/img/plus.svg" alt="Plus" />
        </button>
        </div>
    </div>
    
    );
} 

export default Card;