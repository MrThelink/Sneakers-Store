import React from "react";
import Card from "./components/Card";
import Drawer from "./components/Drawer";
import Header from "./components/Header";

function App() {
  const [items, setItems] = React.useState([]);
  const [cardOpen, setCardOpen] = React.useState(false);

  React.useEffect(() => {
      fetch('https://63527e63ffbb7da0f2d9deaf.mockapi.io/items')
      .then((res) => {
        return res.json();
      })
      .then((json) => {
        setItems(json);
      });
  }, []);

  return (
    <div className='wrapper clear'>
      {cardOpen && <Drawer onClose={() => setCardOpen(false)}/>}
      <Header onClickCard={() => setCardOpen(true)}/>
        <div className='content p-40'>
          <div className="d-flex align-center justify-between mb-40">
            <h1 className="">All sneakers</h1>
            <div className="search-block d-flex">
              <img src="/img/search.svg" alt="Search" />
              <input placeholder="Search..."/>
            </div>
        </div>

        <div className="d-flex flex-wrap">
          {items.map((obj) => (
            <Card 
              title={obj.title}
              price={obj.price}
              imageUrl={obj.imageUrl}
              onFavorite={() => console.log('Add to favorite')}
              onPlus={() => console.log('Click plus')}
            />
          ))} 

        </div>

      </div>
    </div>
  );
}

export default App;