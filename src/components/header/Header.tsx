import styles from './Header.module.scss';
import { ReactComponent as Logo } from 'assets/icons/sketch-logo.svg';

type HeaderProps = {
  title?: string | number;
};

function Header({ title }: HeaderProps) {
  return (
    <header className={styles.header}>
      <Logo />
      <h1>{title}</h1>
    </header>
  );
}

export default Header;
