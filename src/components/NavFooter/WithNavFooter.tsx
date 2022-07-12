import { ReactElement } from 'react';

import styles from './WithNavFooter.module.scss';
import NavFooter from './NavFooter';

function WithNavFooter({ children }: { children: ReactElement }) {
  return (
    <div className={styles.root}>
      {children}
      <NavFooter />
    </div>
  );
}

export default WithNavFooter;
