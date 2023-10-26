import { Html } from '@react-three/drei';
import styles from './Loding.module.scss';
const Loading = () => {
  return (
    <Html center>
      <div className={styles.loadingSpinner}>
        <div className={styles.spinner}></div>
      </div>
    </Html>
  );
};
export default Loading;
