import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { IconProp, SizeProp } from '@fortawesome/fontawesome-svg-core';
import { library } from '@fortawesome/fontawesome-svg-core';
import {
  faCoffee,
  faFireFlameCurved,
  faHouse,
  faChartSimple,
  faTrophy,
  faMagnifyingGlass,
  faArrowLeft,
  faShareAlt,
  faLock,
  faCertificate,
} from '@fortawesome/free-solid-svg-icons';
import {
  faGoogle,
  faFacebook,
  faTwitter,
  faInstagram,
  faYoutube,
  faApple,
} from '@fortawesome/free-brands-svg-icons';
import { faTrashCan } from '@fortawesome/free-regular-svg-icons';

import styles from './Icon.module.scss';

type IconProps = {
  icon: IconProp;
  onClick?: () => void;
  className?: string;
  size?: SizeProp;
};

function Icon({ icon, onClick, className, size }: IconProps) {
  library.add(
    faGoogle,
    faFacebook,
    faTwitter,
    faInstagram,
    faYoutube,
    faApple,
    faTrashCan,
    faCoffee,
    faHouse,
    faFireFlameCurved,
    faChartSimple,
    faTrophy,
    faMagnifyingGlass,
    faArrowLeft,
    faShareAlt,
    faLock,
    faTrophy,
    faCertificate
  );

  const _className = [];
  onClick && _className.push(styles.Icon__clickable);
  className && _className.push(className);

  function handleClick() {
    onClick && onClick();
  }

  return (
    <FontAwesomeIcon
      icon={icon}
      onClick={handleClick}
      className={_className.join(' ')}
      size={size}
    />
  );
}

export default Icon;
