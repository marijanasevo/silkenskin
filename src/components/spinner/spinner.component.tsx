import css from "./spinner.module.css";

const Spinner = () => {
  return (
    <div className={css["products-container"]}>
      <div className={css["spinner"]}></div>
    </div>
  );
};

export default Spinner;
