interface Iprams{
    productId?: string
}

const Product = ({params} : {params: Iprams}) => {
    console.log("params", params);
    return ( <div>
        Product Page
    </div> );
}
 
export default Product;