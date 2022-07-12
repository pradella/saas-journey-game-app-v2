import { ReactNode } from 'react';

import styles from './Badge.module.scss';

type BadgeProps = {
  children: ReactNode;
  success?: boolean;
  danger?: boolean;
  none?: boolean;
  platinum?: boolean;
  gold?: boolean;
  silver?: boolean;
  bronze?: boolean;
};

function Badge({
  children,
  success,
  danger,
  none,
  platinum,
  gold,
  silver,
  bronze,
}: BadgeProps) {
  const className = [styles.root];
  success && className.push(styles.success);
  danger && className.push(styles.danger);
  none && className.push(styles.none);
  platinum && className.push(styles.platinum);
  gold && className.push(styles.gold);
  silver && className.push(styles.silver);
  bronze && className.push(styles.bronze);

  return <small className={className.join(' ')}>{children}</small>;
}

export default Badge;
