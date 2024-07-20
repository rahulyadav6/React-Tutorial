import Product from "./Product";
function ProductTab(){
    return(
        <>
        <Product title="Phone" price={30000}/>
        <Product title="Laptop" price={10000}/>
        <Product title="Pen" price="10"/>
        </>
    );
}
export default ProductTab;