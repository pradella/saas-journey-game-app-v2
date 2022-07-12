import styles from './TrophyCover.module.scss';
import lockSvg from './lock-solid.svg';
import Badge from '../UI/Badge/Badge';
import BadgeTrophy from '../UI/Badge/BadgeTrophy';
import { TrophyType } from '../../services/cloudfunctions/api';

type TrophyCoverProps = {
  imageUrl: string;
  earned?: boolean;
  earnedRate?: number;
  onClick?: () => void;
  width?: number;
  type?: TrophyType;
};

function TrophyCover({
  imageUrl,
  onClick,
  earned,
  earnedRate,
  width,
  type,
}: TrophyCoverProps) {
  let _styles = {};
  _styles = {
    ..._styles,
    backgroundImage: earned ? `url("${imageUrl}")` : `url(${lockSvg})`,
  };
  if (width) _styles = { ..._styles, width: `${width}px` };

  return (
    <div
      className={[
        styles.root,
        onClick ? styles.clickable : '',
        !earned ? styles.notEarned : '',
      ].join(' ')}
      style={_styles}
      onClick={onClick}
    >
      <header>{type ? <BadgeTrophy type={type} /> : null}</header>
      <footer>{earnedRate ? <Badge none>{earnedRate}%</Badge> : null}</footer>
    </div>
  );
}

export default TrophyCover;
