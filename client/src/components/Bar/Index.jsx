// where we keep the "bar" component. Will have a max value, the actual value, and we can use it for xp, hp and notoriety bar
import styles from './styles.module.css';

const Bar = ({ value, maxValue, label }) => (
  <div className={styles.main}>
    <div className={styles.label}>{label}</div>
    <div className={styles.max}>
      <div
        className={styles.value}
        style={{ width: `${(value / maxValue) * 100}%` }}
      ></div>
    </div>
  </div>
);
export default Bar;