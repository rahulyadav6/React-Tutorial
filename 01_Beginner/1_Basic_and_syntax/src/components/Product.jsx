import "./Product.css";
import PropTypes from 'prop-types'; 
function Product(props){
    const myTitle = props.title;
    const myPrice = props.price;
    return(
        <>
            <div className="Product">
                <h3>{myTitle}</h3>
                <h5>{myPrice}</h5>
            </div>
        </>
    );
}
Product.propTypes = {
    title:PropTypes.string,
    price:PropTypes.number
}
export default Product;