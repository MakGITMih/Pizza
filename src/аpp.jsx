import Header from './components/Header';
import Categories from './components/Categories';
import Sort from './components/Sort';
import PizzaBlock from './components/PizzaBlock';
import Skeleton from './components/PizzaBlock/Skeleton.jsx';
import './scss/app.scss';
import { useEffect, useState } from 'react';







function App() {

  const [items,setItems] = useState ([]);
  const [isLoading,setIsLoading] = useState (true);



  useEffect(()=> {
    fetch ( 'https://64cdfe590c01d81da3ee6b14.mockapi.io/items' )
      .then ((res) => res.json())
      .then ((res) => {
        setItems (res);
      })
  },[]);

  
 
  return (
    <>
      <div className="wrapper">
        <Header></Header>
        <div className="content">
          <div className="container">
            <div className="content__top">
              <Categories></Categories>
              <Sort></Sort>
            </div>
            <h2 className="content__title">Все пиццы</h2>
            <div className="content__items">
              {
                items.map(obj => <PizzaBlock 
                  key={obj.imageUrl}
                  {...obj}
                  // title={obj.title} price= {obj.price} imageUrl = {obj.imageUrl} sizes = {obj.sizes} types = {obj.types} вариант передачи пропсами
                  ></PizzaBlock> )
              }
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
