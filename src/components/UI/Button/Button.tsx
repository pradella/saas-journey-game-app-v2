import { IconProp, SizeProp } from '@fortawesome/fontawesome-svg-core';
import { ReactNode } from 'react';
import Icon from '../Icon/Icon';

import styles from './Button.module.scss';

type ButtonProps = {
  children?: ReactNode;
  onClick?: () => void;
  outline?: boolean;
  block?: boolean;
  icon?: IconProp;
  iconSize?: SizeProp;
};

function Button({
  children,
  onClick,
  outline,
  block,
  icon,
  iconSize,
}: ButtonProps) {
  const className = [styles.root];
  outline && className.push(styles.outline);
  block && className.push(styles.block);

  return (
    <button className={className.join(' ')} onClick={onClick}>
      {icon ? (
        <Icon
          icon={icon}
          size={iconSize}
          className={children ? styles.iconMargin : undefined}
        />
      ) : null}
      {children}
    </button>
  );
}

export default Button;
