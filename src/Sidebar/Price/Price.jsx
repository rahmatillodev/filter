import Input from "../../components/Input"
import "./Price.css"

const Price = ({handleChange}) => {
  return (
    <div className="title">
      <h2>Price</h2>
      <Input title="All" value="all" handleChange={handleChange} name="price" />
      <Input title="0 - 50$" value="50" handleChange={handleChange} name="price" />
      <Input title="50 - 150$" value="100" handleChange={handleChange} name="price" />
      <Input title="150 - 250$" value="150" handleChange={handleChange} name="price" />
      <Input title="250$+" value="200" handleChange={handleChange} name="price" />

    </div>
  )
}

export default Price