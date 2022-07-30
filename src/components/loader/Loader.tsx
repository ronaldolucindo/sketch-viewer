import styles from './Loader.module.scss';
type LoaderProps = {
  size?: 'M' | 'S';
};
function Loader({ size = 'M' }: LoaderProps) {
  const sizeClassName = size === 'M' ? 'medium' : 'small';
  return (
    <div className={styles.container}>
      <span className={`${styles.loader} ${styles[sizeClassName]}`}></span>
    </div>
  );
}
export default Loader;
