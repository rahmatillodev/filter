import { useState } from "react";
import Nav from "./Navigation/Nav";
import Products from "./Products/Products";
import Recomended from "./Recomended/Recomended";
import Sidebar from "./Sidebar/Sidebar";

import profucts from "./db/data";
import Card from "./components/Card";

const App = () => {
  const [selectedCategory, setSelectedCategory] = useState(null);

  const [query, setQuery] = useState("");

  const handleInputChange = (event) => {
    setQuery(event.target.value);
  };

  const filterItems = profucts.filter((profuct) =>
    profuct.title.toLocaleLowerCase().indexOf(query.toLocaleLowerCase() !== -1)
  );

  const handleChange = (event) => {
    const value = event.target.value;
    setSelectedCategory(value === "all" ? null : value);
  };

  const handleClick = (event) => {
    const value = event.target.value;
    setSelectedCategory(value === "all" ? null : value);
    };

  function filterData(products, selected, query) {
    let filterProducts = products;

    if (query) {
      filterProducts = filterProducts.filter((product) =>
        product.title.toLowerCase().includes(query.toLowerCase())
      );
    }
    if (selected) {
      filterProducts = filterProducts.filter(
        ({ category, color, company, newPrice, title }) =>
          category === selected ||
          color === selected ||
          company === selected ||
          newPrice === selected ||
          title === selected
      );
    }
    return filterProducts.map(({ img, title, star, reviews, prevPrice,newPrice }) => (
      <Card
        key={Math.random()}
        img={img}
        title={title}
        star={star}
        reviews={reviews}
        newPrice={newPrice}
        prevPrice={prevPrice}
      />
    ));
  }

  const result = filterData(profucts,selectedCategory,query)

  return (
    <>
      <Nav query={query} handleInputChange={handleInputChange} />
      <div className="filter">
        <Sidebar handleChange={handleChange} />
        <div className="products">
          <Recomended handleClick={handleClick} />
          <Products result={result} />
        </div>
      </div>
    </>
  );
};

export default App;
