import profileImage from '../../assets/profile_image.jpeg';
import styles from './AboutMe.module.css';

export default function AboutMe() {

  return (
    <section className={styles.aboutMe}>
      <div className={styles.description}>
        <h1 className={styles.leftAlign}>Hello,<br />I'm Derly</h1>
        <p>I am a full-stack developer with a passion for creating dynamic and responsive web applications. I have experience in both front-end and back-end development, and I enjoy working with modern technologies to build user-friendly interfaces and robust server-side logic.</p>
        <p>I am always eager to learn new skills and technologies, and I thrive in collaborative environments where I can contribute to innovative projects. My goal is to leverage my skills and knowledge to create impactful solutions that enhance user experiences.</p>
      </div>
      <div>
        <img className={styles.logo} src={profileImage} alt="profile_image" />
      </div>

    </section>
  )
}