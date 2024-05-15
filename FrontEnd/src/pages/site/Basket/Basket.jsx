import React, { useEffect, useState } from "react";
import './Basket.css'

const Basket = () => {
  const [basket, setBasket] = useState(
    localStorage.getItem("basket")
      ? JSON.parse(localStorage.getItem("basket"))
      : []
  );
  useEffect(() => {
    localStorage.setItem("basket", JSON.stringify(basket));
  }, [basket]);
  function deleteHandler(id) {
    let basketItem = basket.find((e) => e.id == id);

    if (basketItem.count > 1) {
      basketItem.count--;
      basketItem.totalPrice = basketItem.price * basketItem.count;
      setBasket([...basket]);
    } else {
      setBasket([...basket.filter((e) => e.id != id)]);
    }
  }

  const addToBasket = (id) => {
    let basketItem = basket.find((e) => e.id == id);

    basketItem.count++;
    basketItem.totalPrice = basketItem.price * basketItem.count;
    setBasket([...basket]);
  };
  return (
    <table>
      <thead>
        <tr>
          <th>Image</th>
          <th>Name</th>
          <th>Price</th>
          <th>Count</th>
          <th>Add</th>
          <th>Delete</th>
        </tr>
      </thead>
      <tbody>
      {basket.map((item, index) => (
            <tr key={index}>
              <th scope="row">{index + 1}</th>
              <td>
                <img src={item.image} alt="" width="100px" height="100px" />
              </td>
              <td>{item.title}</td>
              <td>{item.count}</td>

              <td>{item.totalPrice}$</td>
              <td>
                <button
                  onClick={() => {
                    deleteHandler(item.id);
                  }}
                  className="btn btn-danger "
                >
                  delete
                </button>
              </td>
              <td>
                <button
                  onClick={() => {
                    addToBasket(item.id);
                  }}
                  className="btn btn-primary "
                >
                  Add
                </button>
              </td>
            </tr>
          ))}
      </tbody>
    </table>
  );
};

export default Basket;
