import { ReactComponent as Box } from "../../assets/box.svg";
import { ReactComponent as Phone } from "../../assets/phone.svg";
import { ReactComponent as Question } from "../../assets/question-sign.svg";
import { ReactComponent as Bag } from "../../assets/cart-bag.svg";
import { ReactComponent as Avatar } from "../../assets/avatar.svg";
import { ReactComponent as Heart } from "../../assets/heart.svg";
import { ReactComponent as Logo } from "../../assets/logo.svg";

type IconProps = {
  icon: string;
  iconSize: number;
  className?: string;
};

const Icon = ({ icon, iconSize, className = "" }: IconProps) => {
  const size = {
    width: iconSize + "rem",
    height: iconSize + "rem",
  };

  switch (icon) {
    case "box":
      return <Box className={className} style={size} />;
    case "phone":
      return <Phone className={className} style={size} />;
    case "question":
      return <Question className={className} style={size} />;
    case "bag":
      return <Bag className={className} style={size} />;
    case "avatar":
      return <Avatar className={className} style={size} />;
    case "heart":
      return <Heart className={className} style={size} />;
    case "logo":
      return <Logo className={className} style={size} />;
    default:
      return <Question className={className} style={size} />;
  }
};

export default Icon;
