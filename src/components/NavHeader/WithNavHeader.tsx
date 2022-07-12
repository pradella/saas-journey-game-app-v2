import { ReactElement, useEffect, useRef, useState } from 'react';
import { useLocation } from 'react-router-dom';

import styles from './WithNavHeader.module.scss';
import NavHeader from './NavHeader';

function WithNavHeader({ children }: { children: ReactElement }) {
  const backwardsRef = useRef<boolean>(false);
  const [animate, setAnimate] = useState<boolean>(false);
  const { pathname } = useLocation();

  // useEffect(() => {
  //   setAnimate(true);
  //   const timeout = setTimeout(() => {
  //     setAnimate(false);
  //     backwardsRef.current = false;
  //   }, 500);

  //   return () => {
  //     clearTimeout(timeout);
  //   };
  // }, [pathname]);

  return (
    <div
      className={[
        styles.root,
        animate
          ? backwardsRef.current === true
            ? styles.slideRightIn
            : styles.slideLeftIn
          : '',
      ].join(' ')}
    >
      <NavHeader onBack={() => (backwardsRef.current = true)} />
      {children}
    </div>
  );
}

export default WithNavHeader;
