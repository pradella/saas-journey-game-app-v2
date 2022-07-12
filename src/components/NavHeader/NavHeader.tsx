import { useLocation, useNavigate } from 'react-router-dom';

import { getBackPath } from '../../selectors/routes';
import CircleButton from '../UI/CircleButton/CircleButton';
import styles from './NavHeader.module.scss';

type NavHeaderProps = {
  onBack: () => void;
};

function NavHeader({ onBack }: NavHeaderProps) {
  const navigate = useNavigate();
  const { pathname } = useLocation();

  function handleBack() {
    const backPath = getBackPath(pathname);
    backPath ? navigate(backPath) : navigate(-1);
    onBack();
  }

  return (
    <header className={styles.root}>
      <CircleButton icon="arrow-left" onClick={handleBack} />
      <CircleButton icon="share-alt" />
    </header>
  );
}

export default NavHeader;
