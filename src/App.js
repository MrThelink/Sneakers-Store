import Card from "./components/Card";
import Drawer from "./components/Drawer";
import Header from "./components/Header";

function App() {
  return (
    <div className='wrapper clear'>
      <Drawer />
      <Header />
        <div className='content p-40'>
          <div className="d-flex align-center justify-between mb-40">
            <h1 className="">All sneakers</h1>
            <div className="search-block d-flex">
              <img src="/img/search.svg" alt="Search" />
              <input placeholder="Search..."/>
          </div>
        </div>

        <div className="d-flex">
          <Card />

          <div className="cart">
          <div className="favorite">
              <img src="/img/heart-unliked.svg" alt="Unliked" />
            </div>
            <img width={133} height={112} src="/img/sneakers/2.jpg" alt="" />
            <h5>Men's Sneakers Nike Air Max 270</h5>
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

          <div className="cart">
          <div className="favorite">
              <img src="/img/heart-unliked.svg" alt="Unliked" />
            </div>
            <img width={133} height={112} src="/img/sneakers/3.jpg" alt="" />
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

          <div className="cart">
          <div className="favorite">
              <img src="/img/heart-unliked.svg" alt="Unliked" />
            </div>
            <img width={133} height={112} src="/img/sneakers/4.jpg" alt="" />
            <h5>Sneakers Puma X Aka Boku Future Rider</h5>
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
          
        </div>

      </div>
    </div>
  );
}

export default App;
