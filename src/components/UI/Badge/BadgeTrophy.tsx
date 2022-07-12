import { TrophyType } from '../../../services/cloudfunctions/api';
import Icon from '../Icon/Icon';
import Badge from './Badge';

type BadgeTrophyProps = {
  type: TrophyType;
};

function BadgeTrophy({ type }: BadgeTrophyProps) {
  return (
    <Badge
      platinum={type === 'platinum'}
      gold={type === 'gold'}
      silver={type === 'silver'}
      bronze={type === 'bronze'}
    >
      <Icon icon="trophy" size="sm" />
    </Badge>
  );
}

export default BadgeTrophy;
