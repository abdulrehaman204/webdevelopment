import { useSelector, useDispatch } from 'react-redux';

function CoffeeShop() {
  const sold = useSelector((state) => state.coffeeSold);
  const dispatch = useDispatch();

  return (
    <div style={{ textAlign: 'center', marginTop: '50px' }}>
      <h1>☕ Coffee Shop</h1>
      <h2>Sold Today: {sold}</h2>

      <button
        style={{ marginRight: '10px' }}
        onClick={() => dispatch({ type: 'BUY_COFFEE' })}
      >
        Buy Coffee
      </button>

      <button onClick={() => dispatch({ type: 'CANCEL_COFFEE' })}>
        Cancel Order
      </button>
    </div>
  );
}

export default CoffeeShop;
