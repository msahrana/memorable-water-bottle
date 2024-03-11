import "./Cart.css";

const Cart = ({cart, handleRemoveCart}) => {
  return (
    <div>
      <h3>Cart: {cart.length}</h3>
      <div className="cart">
        {cart.map((bottle) => (
          <div key={bottle.id}>
            <img src={bottle.img}></img>
            <button onClick={() => handleRemoveCart(bottle.id)}>Remove</button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Cart;
