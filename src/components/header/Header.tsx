import styles from './Header.module.scss';
import { ReactComponent as Logo } from 'assets/icons/sketch-logo.svg';
import { ReactComponent as SeparatorIcon } from 'assets/icons/separator.svg';

type HeaderProps = {
  title?: string | number;
};

function Header({ title }: HeaderProps) {
  return (
    <header className={styles.header}>
      <Logo />
      <SeparatorIcon className={styles.separator} />
      <h1>{title}</h1>
    </header>
  );
}

export default Header;
