import React from "react";
import {
  Route,
} from "react-router-dom";
import axios from "axios";
import Drawer from "./components/Drawer";
import Header from "./components/Header";
import Home from "./pages/Home";
import Favorite from "./pages/Favorite";

function App() {
  const [items, setItems] = React.useState([]);
  const [cardItems, setCardItems] = React.useState([]);
  const [favorites, setFavorites] = React.useState([]);
  const [searchValue, setSearchValue] = React.useState('');
  const [cardOpen, setCardOpen] = React.useState(false);

  React.useEffect(() => {
      axios.get('https://63527e63ffbb7da0f2d9deaf.mockapi.io/items').then(res => {
        setItems(res.data);
      });
      axios.get('https://63527e63ffbb7da0f2d9deaf.mockapi.io/cart').then(res => {
        setCardItems(res.data);
      });
      axios.get('https://63527e63ffbb7da0f2d9deaf.mockapi.io/favorite').then(res => {
        setFavorites(res.data);
      });
    }, []);

  const onAddToCart = (obj) => {
    axios.post('https://63527e63ffbb7da0f2d9deaf.mockapi.io/cart', obj);
    setCardItems((prev) => [...prev, obj]);
  };

  const onRemoveItem = (id) => {
    axios.delete(`https://63527e63ffbb7da0f2d9deaf.mockapi.io/cart/${id}`);
    setCardItems((prev) => prev.filter((item) => item.id === id));
  };

  const onAddToFavorite = async (obj) => {
    try {
      if (favorites.find((favObj => favObj.id === obj.id))){
        axios.delete(`https://63527e63ffbb7da0f2d9deaf.mockapi.io/favorite/${obj.id}`);
      }else{
        const { data } = await axios.post('https://63527e63ffbb7da0f2d9deaf.mockapi.io/favorite', obj);
        setFavorites((prev) => [...prev, data]);
      }
    } catch(error) {
      alert('Failed to add');
    }
  };

  const onChangeSearchInput = (event) => {
    setSearchValue(event.target.value);
  };

  return (
    <div className='wrapper clear'>
      {cardOpen && (
        <Drawer 
          items={cardItems} 
          onClose={() => setCardOpen(false)} 
          onRemove={onRemoveItem}
        />
      )}
      <Header onClickCard={() => setCardOpen(true)}/>

          <Route path="/" exact>
            <Home 
              items={items} 
              searchValue={searchValue} 
              setSearchValue={setSearchValue} 
              onChangeSearchInput={onChangeSearchInput} 
              onAddToFavorite={onAddToFavorite}
              onAddToCart={onAddToCart}
            />
          </Route>

          <Route path="/favorite" exact>
            <Favorite 
              items={favorites} 
              onAddToFavorite={onAddToFavorite} 
            />
          </Route> 
    </div>
  );
}

export default App;