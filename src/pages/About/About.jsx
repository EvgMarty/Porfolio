import styles from './About.module.scss';
import { Link } from 'react-router-dom';
import { BsChevronRight, BsTelegram } from 'react-icons/bs';
import { BiSolidCloudDownload } from 'react-icons/bi';
import { AiFillGithub, AiFillLinkedin } from 'react-icons/ai';
import ContainerMain from '../../components/Containers/ContainerMain/ContainerMain';
import Button from '../../UI/Button/Button';
import LinkBtn from '../../UI/LinkBtn/LinkBtn';

const About = () => {
  return (
    <div className={styles.about}>
      <ContainerMain>
        <div className={styles.name}>
          <p>Hello, I'm a frontend developer based in Ukraine!</p>
        </div>

        <div className={styles.aboutWrap}>
          <div>
            <h2>Yevhen Martyniuk</h2>
            <p>Digital Craftsman ( Developer / Designer )</p>
          </div>
          <div className={styles.imgWrap}>
            <img src="./img/ava.png" alt="avatar" />
          </div>
        </div>

        <div className={styles.aboutContent}>
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
          <Button>
            <Link to="works">My portfolio </Link>
            <BsChevronRight />
          </Button>
        </div>

        <div className={styles.aboutContent}>
          <h3 className={styles.title}>Bio</h3>
          <ul className={styles.bioList}>
            <li>
              <span className={styles.teg}>1996</span>Born in Balta, Ukraine.
            </li>
            <li>
              <span className={styles.teg}>2022</span>Completed
              <span className={styles.focus}>IT STEP Academy</span> programming
              fundamentals <span className={styles.ml}>courses,</span> focus on
              web development and design. Beginning to dive into the world of
              frontend development.
            </li>
            <li>
              <span className={styles.teg}>2023</span>On
              <span className={styles.focus}>Udemy</span>, I have successfully
              completed a full-fledged course on React/Redux.
            </li>
            <li>
              <span className={styles.teg}>2023 to present</span> Working as a
              freelancer
            </li>
          </ul>
          <Button>
            Download CV
            <BiSolidCloudDownload />
          </Button>
        </div>

        <div className={styles.aboutContent}>
          <h3 className={styles.title}>I ♥</h3>
          <p className={styles.text}>
            Sea, coffee, and playing on my PlayStation 4.
          </p>
        </div>

        <div className={styles.aboutContent}>
          <h3 className={styles.title}>On the web</h3>
          <div className={styles.linkWrap}>
            <LinkBtn to="https://github.com/EvgMarty">
              <AiFillGithub />
              @EvgMarty
            </LinkBtn>
            <LinkBtn to="https://www.linkedin.com/in/evgmarty/">
              <AiFillLinkedin />
              @evgmarty
            </LinkBtn>
            <LinkBtn to="https://t.me/martyynn">
              <BsTelegram />
              @martyynn
            </LinkBtn>
          </div>
        </div>
      </ContainerMain>
    </div>
  );
};

export default About;
