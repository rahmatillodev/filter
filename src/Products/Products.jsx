import "./Products.css";

import Card from "../components/Card";
const Products = ({ result }) => {
  return (
    <>
      <section className="cardContainer">
        {result.map((item) => 
          <Card item={item} key={Math.random()} />
        )}
      </section>
    </>
  );
};

export default Products;
