import { useState } from "react";


function Categories (){

    const[activeIndex,setActiveIndex]=useState(0);

    const categories = ['Все','Мясные','Вегетарианская','Гриль','Острые','Закрытые'];

    const onClickCategoru = (index) => {
      setActiveIndex(index)
    };
 
    
  return (
    <>
      <div className="categories">
        <ul>{categories.map((item, index) =>
          <li
            key={item}
            onClick={() => onClickCategoru(index)} 
            className={activeIndex === index ? "active" : ''}>{item}
          </li>)}
        </ul>
      </div>
    </>
  )
}

export default Categories;

  