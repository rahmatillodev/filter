import Input from "../../components/Input"
import "./Category.css"
import data from "../../db/data"
import { useEffect, useState } from "react"
const Category = ({handleChange}) => {
  const [categories, setcategories] = useState([])

  useEffect(() => {
    const uniqueCategories = Array.from(new Set(data.map(item => item.category)));
    setcategories(uniqueCategories);
  }, []);
  
  return (
    <div className="title">
      <h2>Category</h2>
      <div>
      <Input title="All" value="all" handleChange={handleChange} name="categories" />
        {
          categories.map(item => 
            <Input key={item} title={item} value={item} handleChange={handleChange} name="categories" />
          )
        }
      </div>
      {/* <label className="label">
        <input type="radio" name="category"/>
        <span className="mark">All</span>
      </label>
      <label className="label">
        <input type="radio" name="category"/>
        <span className="mark">Sneakers</span>
      </label>
      <label className="label">
        <input type="radio" name="category"/>
        <span className="mark">Flats</span>
      </label>
      <label className="label">
        <input type="radio" name="category"/>
        <span className="mark">Sandals</span>
      </label>
      <label className="label">
        <input type="radio" name="category"/>
        <span className="mark">Heels</span>
      </label> */}
    </div>
  )
}

export default Category