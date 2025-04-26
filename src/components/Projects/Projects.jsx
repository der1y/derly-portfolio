import styles from './Projects.module.css';
import { useState, useEffect } from 'react';
import ProjectService from '../../services/ProjectService';
import cocktailProject from '../../assets/cocktail_project.png';
import pokemonProject from '../../assets/pokemon_project.png';

const Projects = () => {

    const [projects, setProjects] = useState(ProjectService.getProjects);

    useEffect(() => {
        setProjects(ProjectService.getProjects());
    }, []);

    const [toggledDescription, setToggledDescription] = useState({});

    function handleToggle(index) {
        setToggledDescription((prevToggledItems) => ({
            ...prevToggledItems,
            [index]: !prevToggledItems[index],
        }));
    };

    return (
        <section className={styles.projects}>
            <div className={styles.titleContainer}>
                <h2 className={styles.projectTitle}>Projects</h2>
                <div className={styles.projectImages}>
                    <img src={cocktailProject} alt="Projects" className={styles.cocktailProjectImage} />
                    <img src={pokemonProject} alt="Projects" className={styles.pokemonProjectImage} />
                </div>
            </div>
            <div className={styles.projectList}>
                {projects.length === 0 && <p>No projects available</p>}
                {projects.map((project, index) => (
                    <div key={index} className={styles.projectContainer} onClick={() => handleToggle(index)}>
                        <div className={styles.projectCard}>
                            <div>
                                <h3>{project.title}</h3>
                            </div>
                            {toggledDescription[index] ? '-' : '+'}
                        </div>
                        {toggledDescription[index] && (
                            <div>
                                <ul>
                                    {project.description.map((desc, index) => (
                                        <li key={index}>{desc}</li>
                                    ))}
                                </ul>

                                {/* <a href={project.link} target="_blank" rel="noopener noreferrer">
                                    View Project
                                </a> */}
                            </div>
                        )}
                    </div>
                ))}
            </div>
        </section>
    );
};

export default Projects;