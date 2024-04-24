import styles from './TestButton.module.css';

const TestButton = ({ children }) => {
  return <button className={styles.button}>{children}</button>;
};

export default TestButton;