import "./HomePage.css";
import ProductsIndex from "../product/ProductIndex";
import Footer from "../Navigation/Footer";

function HomePage() {

  return (
    <div className="HomePage">
      <img className='background' src="https://m.media-amazon.com/images/I/71pQ0d+gByL._SR1500,300_.jpg" alt="" />
      <ProductsIndex />
      <footer className="homeFooter">
        <Footer />
      </footer>
    </div>
  );
}

export default HomePage;
