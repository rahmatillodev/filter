import { useEffect, useState } from "react";
import Input from "../../components/Input"
import "./Colors.css"
import data from "../../db/data";

const Colors = ({handleChange}) => {
  const [categories, setcategories] = useState([])

  useEffect(() => {
    const uniqueCategories = Array.from(new Set(data.map(item => item.color)));
    setcategories(uniqueCategories);
  }, []);
  return (
    <div className="title colors">
      <h2>Colors</h2>
      <Input title="All" value="all"   handleChange={handleChange} name="color" />
      {
        categories.map(item => 
          <Input key={item} title={item} value={item} color={item} handleChange={handleChange} name="color" />
          )
        }
    </div>
  )
}

export default Colors