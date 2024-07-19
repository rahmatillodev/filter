import "./Nav.css"
import {FiHeart} from "react-icons/fi"
import {AiOutlineShoppingCart , AiOutlineUserAdd} from "react-icons/ai"
const Nav = ({ query,handleInputChange}) => {
  console.log(query);
  return (
    <nav>
      <div className="navContainer">
        <input type="text" onChange={handleInputChange} placeholder="Enter your search shoes." className="searchInput" />
      </div>
      <div className="profileContainer">
        <a href="#">
          <FiHeart className="navIcons"/>
        </a>
        <a href="#">
          <AiOutlineShoppingCart className="navIcons"/>
        </a>
        <a href="#">
          <AiOutlineUserAdd className="navIcons"/>
        </a>
      </div>
    </nav>
  )
}

export default Nav