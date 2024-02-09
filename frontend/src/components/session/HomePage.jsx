import "./HomePage.css";
import ProductsIndex from "../product/ProductIndex";
import Footer from "../Navigation/Footer";
import Banner from "../Navigation/Banner";

function HomePage() {


  return (
    <div className="HomePage">

      <Banner />
      
      <ProductsIndex />
      <footer className="homeFooter">
        <Footer />
      </footer>
    </div>
  );
}

export default HomePage;


