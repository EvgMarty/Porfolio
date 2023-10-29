import ContainerMain from '../../components/Containers/ContainerMain/ContainerMain';
import styles from './About.module.scss';
import { Link } from 'react-router-dom';
const About = () => {
  return (
    <div className={styles.about}>
      <ContainerMain>
        <div className={styles.name}>
          <p>Hello, I'm a frontend developer based in Ukraine!</p>
        </div>
        <div className={styles.abouyWrap}>
          <div>
            <h2>Yevhen Martyniuk</h2>
            <p>Digital Craftsman ( Developer / Designer )</p>
          </div>
          <div className={styles.imgWrap}>
            <img src="./img/ava.png" alt="avatar" />
          </div>
        </div>
        <div className={styles.aboutWrap}>
          <h3 className={styles.title}>About</h3>
          <p className={styles.text}>
            Yevhen is a freelancer and front-end developer, based in Odesa with
            a passionate about creating websites/applications. He has a knack
            for everything related to product launches, from planning and design
            to solving real-life problems with code. He devotes all his free
            time to learning and improving his skills and backing them up with{' '}
            <Link className={styles.link} to="works">
              projects
            </Link>
            . When not online, he loves spending time with his family and cat.
          </p>
        </div>
        <div className={styles.aboutContent}>
          <h3 className={styles.title}>Bio</h3>
          <p className={styles.text}></p>
        </div>
      </ContainerMain>
    </div>
  );
};

export default About;
