import NewArriwalItem from "../new-arrival-item/new-arrival-item.component";
import css from "./new-arrivals-container.module.css";

const NewArriwalsContainer = () => {
  return (
    <div className={css["new-arriwals-container"] + " side-space"}>
      <h2 className="section-title">New Arriwals</h2>

      <NewArriwalItem />

      <p style={{ textAlign: "center" }}>— — —</p>
    </div>
  );
};

export default NewArriwalsContainer;
