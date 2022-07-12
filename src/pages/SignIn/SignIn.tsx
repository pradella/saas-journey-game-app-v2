import styles from './SignIn.module.scss';
import Button from '../../components/UI/Button/Button';
import Logo from '../../components/UI/Logo/Logo';

function SignIn() {
  return (
    <main className={styles.root}>
      <div className={styles.container}>
        <Logo />
        <span>Keep track of your game activity automatically</span>
        <Button
          outline
          block
          // onClick={}
          icon={['fab', 'google']}
          iconSize="lg"
        >
          Sign in with Google
        </Button>
        <Button
          outline
          block
          // onClick={}
          icon={['fab', 'facebook']}
          iconSize="lg"
        >
          Sign in with Facebook
        </Button>
        <Button
          outline
          block
          // onClick={}
          icon={['fab', 'apple']}
          iconSize="lg"
        >
          Sign in with Apple
        </Button>
      </div>
    </main>
  );
}

export default SignIn;
