import { UserGameTrophy } from '../../services/cloudfunctions/api';
import TrophyCover from '../TrophyCover/TrophyCover';
import styles from './TrophyGrid.module.scss';

type TrophyGridProps = {
  trophies: UserGameTrophy[];
  onClick: (trophy: UserGameTrophy) => void;
};

function TrophyGrid({ trophies, onClick }: TrophyGridProps) {
  return (
    <ul className={styles.root}>
      {trophies.map((trophy, i) => (
        <li key={i}>
          <TrophyCover
            imageUrl={trophy.trophyIconUrl}
            earned={trophy.earned}
            onClick={() => onClick(trophy)}
            earnedRate={trophy.trophyEarnedRate}
            type={trophy.trophyType}
          />
        </li>
      ))}
    </ul>
  );
}

export default TrophyGrid;
