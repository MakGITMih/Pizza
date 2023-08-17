import React from "react";

import Categories from '../components/Categories';
import Sort from '../components/Sort';
import PizzaBlock from '../components/PizzaBlock';
import Skeleton from '../components/PizzaBlock/Skeleton.jsx';
import '../scss/app.scss';
import { useEffect, useState } from 'react';


function Home (){

    const [items, setItems] = useState([]);
    const [isLoading, setIsLoading] = useState(true);



    useEffect(() => {
        fetch('https://64cdfe590c01d81da3ee6b14.mockapi.io/items')
            .then((res) => res.json())
            .then((res) => {
                setItems(res);
                setIsLoading(false);
            })
    }, []);

    
  return (
    <>
         <div className="content__top">
              <Categories></Categories>
              <Sort></Sort>
            </div>
            <h2 className="content__title">Все пиццы</h2>
            <div className="content__items">
              {isLoading
                ? [...new Array(10)].map((_,index) => <Skeleton key={index}></Skeleton>)
                : items.map((obj) => <PizzaBlock key={obj.imageUrl}{...obj} ></PizzaBlock>)}
              {/* {
                items.map((obj) => isLoading ? <Skeleton></Skeleton> : (
                <PizzaBlock key={obj.imageUrl}{...obj}
                  // title={obj.title} price= {obj.price} imageUrl = {obj.imageUrl} sizes = {obj.sizes} types = {obj.types} вариант передачи пропсами
                  ></PizzaBlock> ))
              } */}
            </div>
    </>
  )
}

export default Home;

  