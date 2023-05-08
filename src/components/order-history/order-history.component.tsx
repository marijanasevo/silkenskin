import { useNavigate } from "react-router-dom";
import css from "../../routes/account/account.module.css";
import { Fragment, useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { selectCurrentUser } from "../../store/user/user.selector";
import { Order } from "../../store/user/user.types";

const OrderHistory = () => {
  const navigate = useNavigate();
  const currentUser = useSelector(selectCurrentUser);
  const [purchases, setPurchases] = useState<Order[]>([]);
  const [selectedOrderIndex, setSelectedOrderIndex] = useState(-1);

  function toggleDescription(index: number) {
    if (selectedOrderIndex === index) {
      setSelectedOrderIndex(-1); // Deselect the order if it's already selected
    } else {
      setSelectedOrderIndex(index);
    }
  }

  useEffect(() => {
    if (currentUser) setPurchases(currentUser.purchases);
  }, [currentUser]);

  return (
    <div className={css["order-table"]}>
      <div className={css["order-table-header"]}>
        <span>Order #</span>
        <span>Total</span>
        <span>Order Date</span>
        <span>Items</span>
        <span>Details</span>
      </div>

      {purchases.length ? (
        purchases.map((order, index) => {
          const isSelected = selectedOrderIndex == index;

          return (
            <Fragment key={index}>
              <div
                onClick={() => toggleDescription(index)}
                className={css["order-table-info"]}
              >
                <span># {order.id.slice(14).toUpperCase()}</span>
                <span>${order.total}</span>
                <span>{new Date(order.createdAt).toLocaleDateString()}</span>
                <span>{order.products.length} items</span>
                <span>{isSelected ? "↑" : "↓"}</span>
              </div>

              <div
                className={`${css["order-details"]} ${
                  isSelected ? css["show-details"] : ""
                }`}
              >
                {order.products.map((product, index) => (
                  <div key={index} className={css["order-item"]}>
                    <img
                      src={product.thumbnail}
                      alt="item"
                      className={css["order-item-thumbnail"]}
                    />
                    <div
                      onClick={() => navigate(`/product/${product.id}`)}
                      className={css["order-item-details"]}
                    >
                      <h3 className={css["order-item-title"]}>
                        {product.name} <br />
                        <span className={css["order-item-brand"]}>
                          {product.brand}
                        </span>
                      </h3>
                      <p>Quantity: {product.quantity}</p>
                    </div>
                    <div className={css["order-item-price"]}>
                      <span>${product.price}</span>
                    </div>
                  </div>
                ))}
              </div>
            </Fragment>
          );
        })
      ) : (
        <div className={css["no-orders-message"]}>
          We're starting to think you're secretly a skincare expert <br />- you
          haven't ordered anything from us yet
        </div>
      )}
    </div>
  );
};

export default OrderHistory;
