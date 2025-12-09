import styles from './styles.module.css';

type ContainerProps = {
  children: React.ReactNode;
};

export function Container({ children }: ContainerProps) {
  //  const classes = `${styles.heading} ${styles.orange}`;
  //  return <h1 className=`${styles.heading} ${styles.orange}`>Heading Component</h1>;

  return (
    <div className={styles.container}>
      <div className={styles.content}>{children}</div>
    </div>
  );
}
