import logo from './unlockd-logo.svg';

type LogoProps = {
  size?: 'xs' | 'sm' | 'md' | 'lg' | 'xg';
};

function Logo({ size }: LogoProps) {
  return <img src={logo} height={size === 'sm' ? 20 : undefined} />;
}

export default Logo;
