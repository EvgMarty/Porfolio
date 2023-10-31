import styles from './ProjectCard.module.scss';

const ProjectCard = (props) => {
  const { name, img,  description} = props;
  return (
    <div className={styles.projectCard}>
      <div className={styles.projectImg}>
        <img src={img} alt="project" />
      </div>
      <h4 className={styles.projectName}>{name}</h4>
      <p className={styles.projectText}>{ description}</p>
    </div>
  );
};

export default ProjectCard;
