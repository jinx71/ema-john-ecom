import Product from '../Product/Product';
import './Productdata.css';

const Productdata = ({ products, cartHandler }) => {
    return (
        <div class="productData">
            {
                products.map(product => <Product product={product} cartHandler={cartHandler}></Product>)
            }
        </div>
    );
};

export default Productdata;