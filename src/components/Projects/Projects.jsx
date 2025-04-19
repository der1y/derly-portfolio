import React, { useContext } from 'react';
import styles from './Projects.module.css';
import { useState } from 'react';
import { ProjectContext } from '../../context/ProjectContext';

const Projects = () => {

    const projects = useContext(ProjectContext);

    const [toggledDescription, setToggledDescription] = useState({});

    function handleToggle(index) {
        setToggledDescription((prevToggledItems) => ({
            ...prevToggledItems,
            [index]: !prevToggledItems[index],
        }));
    };

    return (
        <section className={styles.projects}>
            <div>
                <h2 className={styles.projectTitle}>Projects</h2>
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

                                <a href={project.link} target="_blank" rel="noopener noreferrer">
                                    View Project
                                </a>
                            </div>
                        )}
                    </div>
                ))}
            </div>
        </section>
    );
};

export default Projects;