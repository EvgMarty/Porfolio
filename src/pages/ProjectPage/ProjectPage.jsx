import styles from './ProjectPage.module.scss';
import { BsChevronRight } from 'react-icons/bs';
import { FiExternalLink } from 'react-icons/fi';
import ContainerMain from '../../components/Containers/ContainerMain/ContainerMain';
import { Link, useParams } from 'react-router-dom';
import { projectCategories } from '../../data/data';

const ProjectPage = () => {
  const { slug } = useParams();

  const project = projectCategories
    .flatMap((categoty) => categoty.projects)
    .find((project) => project.slug === slug);

  const { img, name, description, year, stack, website, repository } = project;

  return (
    <ContainerMain>
      <div className={styles.wrapper}>
        <Link className={styles.breadСrumbs} to=".." relative="path">
          Works
        </Link>
        <h4 className={styles.nameProject}>
          <BsChevronRight className={styles.arrow} /> {name}
        </h4>
        <span className={styles.year}>{year}</span>
      </div>
      <div className={styles.description}>
        <p>{description}</p>
      </div>
      <ul className={styles.linksList}>
        <li className={styles.links}>
          <span className={styles.pointer}>Website</span>
          <Link to={website} target="_blank">
            {website} <FiExternalLink />
          </Link>
        </li>
        <li className={styles.links}>
          <span className={styles.pointer}>Repository</span>
          <Link to={repository} target="_blank">
            {repository}
            <FiExternalLink />
          </Link>
        </li>
        <li className={styles.links}>
          <span className={styles.pointer}>Stack</span>
          {stack}
        </li>
      </ul>
      <div className={styles.imgProject}>
        <img src={img} alt="" />
      </div>
    </ContainerMain>
  );
};

export default ProjectPage;
