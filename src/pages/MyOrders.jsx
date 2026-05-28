import React from "react";

import "./MyOrders.css";

const MyOrders = () => {

  const orders =
    JSON.parse(
      localStorage.getItem("orders")
    ) || [];

  return (

    <div className="orders-page">

      <h1 className="orders-title">
        My Orders
      </h1>

      {
        orders.length === 0 ? (

          <h2>
            No Orders Found
          </h2>

        ) : (

          orders.map((order) => (

            <div
              key={order.id}
              className="order-card"
            >

              <div className="order-top">

                <h3>
                  Order ID :
                  {order.id}
                </h3>

                <p>
                  {order.date}
                </p>

              </div>

              <h2>
                Total :
                ₹{order.total}
              </h2>

              {
                order.items.map((item) => (

                  <div
                    key={item.id}
                    className="order-item"
                  >

                    <img
                      src={item.Image}
                      alt={item.Title}
                    />

                    <div>

                      <h3>
                        {item.Title}
                      </h3>

                      <p>
                        Quantity :
                        {item.quantity || 1}
                      </p>

                      <h4>
                        ₹
                        {
                          item.Price *
                          (item.quantity || 1)
                        }
                      </h4>

                    </div>

                  </div>

                ))
              }

            </div>

          ))
        )
      }

    </div>

  );

};

export default MyOrders;