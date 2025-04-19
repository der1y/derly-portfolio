import profileImage from '../../assets/profile_image.jpeg';
import styles from './AboutMe.module.css';

export default function AboutMe() {

    return (
        <section className={styles.aboutMe}>
        <div className={styles.description}>
          <h1 className={styles.leftAlign}>Hello,<br/>I'm Derly</h1>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam eget nisl a erat cursus pellentesque gravida sed odio.
            Vestibulum vulputate commodo leo, id consectetur tortor sollicitudin ut. Nullam egestas mi tortor, ut vestibulum turpis tincidunt sit amet. In sit amet ex est. </p>
        </div>
        <div>
          <img className={styles.logo} src={profileImage} alt="profile_image"/>
        </div>
      </section>
    )
}