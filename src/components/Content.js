import Product from "./Product";
import PizzaData from "./PizzaData";


const Content = () => {

    //const [productData, setProductData] = useState(pizzaData)

  return (
    <div className="content">
      <div className="content-title">
        <h2>Our Menu</h2>
      </div>
      <div className="products">
       { PizzaData.map((item) => (
        <Product item={item}/>
       ))}
        
      </div>
    </div>
  );
};

export default Content;
