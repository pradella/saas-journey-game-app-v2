import { ReactNode } from 'react';
import styles from './GameCover.module.scss';

type GameCoverProps = {
  imageUrl: string;
  logo?: string;
  children?: ReactNode;
};

function GameCover({ imageUrl, logo, children }: GameCoverProps) {
  return (
    <main
      className={styles.root}
      style={{ backgroundImage: `url("${imageUrl}")` }}
    >
      <div className={styles.gradient}>
        <div className={styles.innerContent}>
          <div
            className={styles.logo}
            style={{ backgroundImage: `url("${logo}")` }}
          />
          {children}
        </div>
      </div>
    </main>
  );
}

export default GameCover;
