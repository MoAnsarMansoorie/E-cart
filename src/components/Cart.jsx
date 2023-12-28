import { Link } from "react-router-dom";

function Cart({ cart, setCart }) {
  return (
    <>
      <div className="container my-5" style={{ width: "48%" }}>
        {cart.length > 0 ? (
          cart.map((pro) => {
            return (
              <>
                <div className="card mb-3 my-5" style={{ maxWidth: 540 }}>
                  <div className="row g-0">
                    <div className="col-md-4">
                      <img
                        src={pro.imgSrc}
                        className="img-fluid rounded-start"
                        alt="..."
                      />
                    </div>
                    <div className="col-md-8 text-center">
                      <div className="card-body">
                        <h5 className="card-title">{pro.title}</h5>
                        <p className="card-text">{pro.description}</p>
                        <button className="btn btn-primary mx-3">
                          {pro.price} ₹
                        </button>
                        <button className="btn btn-secondary">Buy Now</button>
                      </div>
                    </div>
                  </div>
                </div>
              </>
            );
          })
        ) : (
          <>
            <h1>Cart is Empty!</h1>
            <Link to={"/"}>
              <button className="btn btn-secondary">
                Continue shopping...
              </button>
            </Link>
          </>
        )}
      </div>
      {cart.length != 0 && (
        <>
          <div
            className="container my-5"
            style={{
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            <button className="btn btn-warning mx-3">Checkout</button>
            <button className="btn btn-danger mx-5" onClick={() => setCart("")}>
              Clear CART!
            </button>
          </div>
        </>
      )}
    </>
  );
}

export default Cart;
