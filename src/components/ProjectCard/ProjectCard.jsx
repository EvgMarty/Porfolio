import styles from './ProjectCard.module.scss';
import { Link } from 'react-router-dom';

const ProjectCard = (props) => {
  const { name, img, slug, description } = props;
  return (
    <Link to={slug} className={styles.projectCard}>
      <div className={styles.projectImg}>
        <img src={img} alt="project" />
      </div>
      <h4 className={styles.projectName}>{name}</h4>
      <p className={styles.projectText}>{description}</p>
    </Link>
  );
};

export default ProjectCard;
