import { IconProp } from '@fortawesome/fontawesome-svg-core';

import styles from './CircleButton.module.scss';
import Icon from '../Icon/Icon';

type CircleButtonProps = {
  icon: IconProp;
  onClick?: () => void;
};

function CircleButton({ icon, onClick }: CircleButtonProps) {
  return (
    <button className={styles.root} onClick={onClick}>
      <Icon icon={icon} size="2x" />
    </button>
  );
}

export default CircleButton;
