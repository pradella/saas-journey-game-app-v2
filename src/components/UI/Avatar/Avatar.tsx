import styles from './Avatar.module.scss';

type AvatarProps = {
  avatarUrl?: string;
  onClick?: () => void;
  size?: 'sm' | 'lg';
};

function Avatar({ onClick, avatarUrl, size }: AvatarProps) {
  return (
    <div
      style={{
        backgroundImage: `url('${avatarUrl}')`,
      }}
      className={[
        styles.root,
        size ? styles[size] : '',
        onClick ? styles.clickable : '',
      ].join(' ')}
      onClick={onClick}
    />
  );
}

export default Avatar;
