import Card from "./components/Card";
import Drawer from "./components/Drawer";
import Header from "./components/Header";

const arr =[
  {
    title: 'Mens Sneakers Nike Blazer Mid Suede', 
    price: 499,
    imageUrl: '/img/sneakers/1.jpg',
  },
  {
    title: 'Mens Sneakers Nike Air Max 270', 
    price: 250,
    imageUrl: '/img/sneakers/2.jpg',
  },
  {
    title: 'Mens Sneakers Nike Blazer Mid Suede', 
    price: 399,
    imageUrl: '/img/sneakers/3.jpg',
  },
  {
    title: 'Sneakers Puma X Aka Boku Future Rider', 
    price: 299,
    imageUrl: '/img/sneakers/4.jpg',
  },
];

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
          {arr.map((obj) => (
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