import styles from './About.module.scss';
import { Link } from 'react-router-dom';
import { BsChevronRight, BsTelegram } from 'react-icons/bs';
import { BiSolidCloudDownload } from 'react-icons/bi';
import { AiFillGithub, AiFillLinkedin, AiOutlineMail } from 'react-icons/ai';
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
            I am a frontend developer and freelancer , living in Odessa and
            passionate about building websites/web applications. I'm an expert
            in everything related to front-end development, from planning and
            design to solving real problems with code. I devote all my free time
            to learning and improving my skills, backed up by{' '}
            <Link className={styles.link} to="works">
              projects
            </Link>
            . When I'm not online, I love spending time with my family and cat.
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
              <span className={styles.teg}>2023</span>
              Working as a freelancer on the
              <span className={styles.focus}>Upwork</span> platform.
            </li>
            <li>
              <span className={styles.teg}>2024 to present</span> Working as a
              frontend developer in the company {' '}
              <span className={styles.focus}>Profi Development</span>.
            </li>
          </ul>
          <Button>
            <a href="/CV_Yevhen-Martyniuk_Front-end_developer.pdf" download>
              Download CV
            </a>
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
            <Button>
              <AiOutlineMail />
              <a href="mailto:mrtevgeniy@gmail.com">Contact me by mail</a>
            </Button>
          </div>
        </div>
      </ContainerMain>
    </div>
  );
};

export default About;
