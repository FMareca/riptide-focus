import styles from './Heading.module.css';

export function Heading() {
  //  const classes = `${styles.heading} ${styles.orange}`;
  //  return <h1 className=`${styles.heading} ${styles.orange}`>Heading Component</h1>;
  return <h1 className={styles.heading}>Heading Component</h1>;
}
