import { useEffect, useState } from "react";
import Buttons from "../components/Buttons";
import "./Recomended.css";
import data from "../db/data";

const Recomended = ({ handleClick }) => {
  const [categories, setcategories] = useState([]);

  useEffect(() => {
    const uniqueCategories = Array.from(
      new Set(data.map((item) => item.category))
    );
    setcategories(uniqueCategories);
  }, []);

  return (
    <div className="title">
      <h2>Recomended</h2>
      <div className="btns">
        <Buttons handleClick={handleClick} title="All Products" value="all" />

        {categories.map((item) => (
          <Buttons
            handleClick={handleClick}
            key={item}
            title={item}
            value={item}
          />
        ))}
      </div>
    </div>
  );
};

export default Recomended;
