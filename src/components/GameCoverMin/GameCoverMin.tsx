import { formatDistanceToNow } from 'date-fns';

import Badge from '../UI/Badge/Badge';
import styles from './GameCoverMin.module.scss';

type GameCoverMinProps = {
  imageUrl: string;
  name: string;
  playDurationHours: number;
  trophiesLeft: number;
  lastPlayedDateTime: Date;
  onClick?: () => void;
};

function GameCoverMin({
  imageUrl,
  name,
  playDurationHours,
  trophiesLeft,
  lastPlayedDateTime,
  onClick,
}: GameCoverMinProps) {
  return (
    <div
      className={[styles.root, onClick ? styles.clickable : ''].join(' ')}
      style={{ backgroundImage: `url("${imageUrl}")` }}
      onClick={onClick}
    >
      <div className={styles.gradient}>
        <div className={styles.innerContent}>
          <header>
            {trophiesLeft > 0 ? (
              <Badge danger>
                <strong>{trophiesLeft}</strong> unlocks left
              </Badge>
            ) : (
              <Badge success>
                <strong>completed</strong>
              </Badge>
            )}
          </header>
          <footer>
            <h2>{name}</h2>
            <div>
              <small>
                <strong>{playDurationHours}</strong> hours played
              </small>
              <small>
                Played{' '}
                {formatDistanceToNow(lastPlayedDateTime, { addSuffix: true })}
              </small>
            </div>
          </footer>
        </div>
      </div>
    </div>
  );
}

export default GameCoverMin;
