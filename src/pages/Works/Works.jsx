import styles from './Works.module.scss';
import ContainerMain from '../../components/Containers/ContainerMain/ContainerMain';
import ProjectCard from '../../components/ProjectCard/ProjectCard';
import { projectCategories } from '../../data/data';

const generateProjectSections = (projectCategories) => {
  return projectCategories.map(({ title, id, projects }) => {
    return (
      <div key={id} className={styles.worksWrap}>
        <h3 className={styles.title}>{title}</h3>
        <div className={styles.worksFlex}>
          {projects.map(({ id, img, slug, name, presentation }) => {
            return (
              <ProjectCard
                key={id}
                img={img}
                name={name}
                description={presentation}
                slug={slug}
              />
            );
          })}
        </div>
      </div>
    );
  });
};

const Works = () => {
  return (
    <div className={styles.works}>
      <ContainerMain>
        {generateProjectSections(projectCategories)}
      </ContainerMain>
    </div>
  );
};

export default Works;
