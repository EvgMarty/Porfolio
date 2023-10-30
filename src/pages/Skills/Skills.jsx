import styles from './Skills.module.scss';
import ContainerMain from '../../components/Containers/ContainerMain/ContainerMain';
import scills from '../../data/data';

const Skills = () => {
  console.log(scills);
  return (
    <div className={styles.skills}>
      <ContainerMain>
        <ul className={styles.scillsList}>
          {scills.map(({ name, img }) => {
            return (
              <li className={styles.skillsItem}>
                <img className={styles.scillsImg} src={img} alt="" />
                {name}
              </li>
            );
          })}
        </ul>
      </ContainerMain>
    </div>
  );
};

export default Skills;
