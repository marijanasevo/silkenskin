import { useNavigate } from "react-router-dom";
import Icon from "../icon/icon.component";
import css from "./action-tile.module.css";
import { FC } from "react";

type ActionTileProps = {
  link: string;
  subtitle: string;
  icon: string;
  iconSize: string;
  title: string;
};

const ActionTile: FC<ActionTileProps> = ({
  link,
  icon,
  title,
  subtitle,
  iconSize,
}) => {
  const navigate = useNavigate();
  return (
    <div className={css["action-tile"]} onClick={() => navigate(link)}>
      <Icon iconSize={Number(iconSize)} icon={icon} />
      <span className={css["action-tile__title"]}>{title}</span>
      <a href="#" className={css["action-tile__link"]}>
        {subtitle} →
      </a>
    </div>
  );
};

export default ActionTile;
