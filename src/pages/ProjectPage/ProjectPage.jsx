import styles from './ProjectPage.module.scss';
import { BsChevronRight } from 'react-icons/bs';
import ContainerMain from '../../components/Containers/ContainerMain/ContainerMain';
import { Link, useParams } from 'react-router-dom';
import { projectCategories } from '../../data/data';

const ProjectPage = () => {
  const { slug } = useParams();

  const project = projectCategories
    .flatMap((categoty) => categoty.projects)
    .find((project) => project.slug === slug);

  const { img, name, year } = project;

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
      <div className={styles.imgProject}>
        <img src={img} alt="" />
      </div>
    </ContainerMain>
  );
};

export default ProjectPage;
