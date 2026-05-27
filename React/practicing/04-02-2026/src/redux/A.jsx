import { useSelector, useDispatch } from 'react-redux';

function A() {
  const count = useSelector((state) => state.count);
  const dispatch = useDispatch();

  return (
    <div style={styles.card}>
      <img src="https://static.vecteezy.com/system/resources/previews/017/054/078/non_2x/headphones-design-3d-rendering-for-product-mockup-free-png.png"
      alt="Headphones" style={styles.image}></img>
      <h2>Head Phones</h2>
      <p>Price ₹ 5000</p>
      <h2>Buy qty: {count}</h2>

      <button onClick={() => dispatch({ type: 'INCREMENT' ,payload:"10"})}>
       + 
      </button>

      <button onClick={() => dispatch({ type: 'DECREMENT',payload:"5" })}>
       -
      </button>
    </div>
  );
}

const styles={
  card:{
    width:"250px",
    padding:"15px",
    border:"1px solid #ccc",
    textAlign: "conatain"
  },
  image:{
    width:"150px",
    height:"100px",
    objectfit : "contain"
  }
};

export default A;
