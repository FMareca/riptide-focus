import styles from './styles.module.css';

export function Logo() {
  // const logoType = {
  //   dark: 'src\\assets\\media\\logo-dark.png',
  //   light: 'src\\assets\\media\\logo-light.png',
  // };

  return (
    <div className={styles.logo}>
      <a className='' href='#'>
        <img src='src\assets\media\logo-dark.png'></img>
      </a>
    </div>
  );
}
