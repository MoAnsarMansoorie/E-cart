import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { items } from "./Data";
import Product from "./Product";

function ProductDetails() {
  const { id } = useParams();

  const [product, setProduct] = useState({});
  const [relatedProduct, setRelatedProduct] = useState([])

  useEffect(() => {
    const filterData = items.filter((product) => product.id == id);
    setProduct(filterData[0]);

    const relatedProducts = items.filter((pro) => pro.category === product.category)
    setRelatedProduct(relatedProducts)
  }, [id, product.category]);

  return (
    <>
      <div className="container d-flex justify-content-center align-items-center gap-4">
        <div className="img">
          <img src={product.imgSrc} />
        </div>
        <div className="text-center">
          <h1 className="card-title">{product.title}</h1>
          <p className="card-text">{product.description}</p>
          <button className="btn btn-primary mx-3">{product.price}</button>
          <button className="btn btn-warning">Add to Cart</button>
        </div>
      </div>
      <h1 className="text-center">Related Products</h1>
      <Product items={relatedProduct}/>
    </>
  );
}

export default ProductDetails;
