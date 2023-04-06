
import { ReactComponent as Box} from '../../assets/box.svg';
import { ReactComponent as Phone} from '../../assets/phone.svg';
import { ReactComponent as Question} from '../../assets/question-sign.svg';
import { ReactComponent as Bag} from '../../assets/cart-bag.svg';

const Icon = ({icon, iconSize}) => {
  const size = {
    width: iconSize + 'rem',
    height: iconSize + 'rem'
  };

  switch (icon) {
    case 'box':
      return <Box style={size} />;
      case 'phone':
        return <Phone style={size} />;
      case 'question':
        return <Question style={size} />;
      case 'bag':
        return <Bag style={size} />;
      default:
        return <Question style={size} />
  }
};

export default Icon;