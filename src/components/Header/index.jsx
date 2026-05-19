import './Header.module.css';
import styles from './Header.module.css';

export default function Header() {
  return (
    <header className={styles.SiteHeader}>
      <div className={styles.HeaderLink}>ブログ</div>
      <div className={styles.HeaderLink}>お問い合わせ</div>
    </header>
  );
}