import { Link, useNavigate } from "react-router-dom";
import Icon from "../icon/icon.component";
import css from "./action-tile.module.css";

const ActionTile = ({ link, icon, title, subtitle, iconSize }) => {
  const navigate = useNavigate();
  return (
    <div className={css["action-tile"]} onClick={() => navigate(link)}>
      <Icon iconSize={iconSize} icon={icon} />
      <span className={css["action-tile__title"]}>{title}</span>
      <a href="#" className={css["action-tile__link"]}>
        {subtitle} →
      </a>
    </div>
  );
};

export default ActionTile;
