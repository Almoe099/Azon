import "./HomePage.css";
import ProductsIndex from "../product/ProductIndex";

function HomePage() {

  return (
    <div className="HomePage">
      <img className='background' src="https://m.media-amazon.com/images/I/71pQ0d+gByL._SR1500,300_.jpg" alt="" />
      <ProductsIndex />
    </div>
  );
}

export default HomePage;
