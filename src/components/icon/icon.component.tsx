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
  onClick?: (e: React.MouseEvent<SVGSVGElement, MouseEvent>) => void;
};

const Icon = ({ icon, iconSize, ...otherProps }: IconProps) => {
  const size = {
    width: iconSize + "rem",
    height: iconSize + "rem",
  };

  switch (icon) {
    case "box":
      return <Box {...otherProps} style={size} />;
    case "phone":
      return <Phone {...otherProps} style={size} />;
    case "question":
      return <Question {...otherProps} style={size} />;
    case "bag":
      return <Bag {...otherProps} style={size} />;
    case "avatar":
      return <Avatar {...otherProps} style={size} />;
    case "heart":
      return <Heart {...otherProps} style={size} />;
    case "logo":
      return <Logo {...otherProps} style={size} />;
    default:
      return <Question {...otherProps} style={size} />;
  }
};

export default Icon;
