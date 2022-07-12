import Icon from '../UI/Icon/Icon';
import styles from './NavFooter.module.scss';

function NavFooter() {
  return (
    <footer className={styles.root}>
      <Icon
        className={[styles.icon, styles.active].join(' ')}
        icon="house"
        size="lg"
        // onClick={}
      />
      <Icon
        className={[styles.icon].join(' ')}
        icon="chart-simple"
        size="lg"
        // onClick={}
      />
      <Icon
        className={[styles.icon].join(' ')}
        icon="fire-flame-curved"
        size="lg"
        // onClick={}
      />
      <Icon
        className={[styles.icon].join(' ')}
        icon="trophy"
        size="lg"
        // onClick={}
      />
      <Icon
        className={[styles.icon].join(' ')}
        icon="magnifying-glass"
        size="lg"
        // onClick={}
      />
    </footer>
  );
}

export default NavFooter;
