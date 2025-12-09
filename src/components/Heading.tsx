import styles from './Heading.module.css';

export function Heading(props) {
  //  const classes = `${styles.heading} ${styles.orange}`;
  //  return <h1 className=`${styles.heading} ${styles.orange}`>Heading Component</h1>;
  return <h1 className={styles.heading}>{props.children}</h1>;
}
