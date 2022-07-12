import styles from './Header.module.scss';
import Avatar from '../UI/Avatar/Avatar';
import Logo from '../UI/Logo/Logo';

function Header({ title }: { title?: string }) {
  function handleSignOff() {
    // 
  }

  return (
    <header className={styles.root}>
      {title ? <h2>{title}</h2> : <Logo size="sm" />}
      <Avatar onClick={handleSignOff} avatarUrl="" size="sm" />
    </header>
  );
}

export default Header;
