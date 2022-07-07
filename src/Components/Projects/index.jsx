import './index.scss'
import ProjectCard from './Project Card';

const Projects = (props) => {

    const projects_data = props.projects_data;
 
    // projects_data.map((item, index) => {console.log(item)});
    
    return(
        <div className='projects-section' id="projects">
<<<<<<< HEAD
            <h1>Programming Projects</h1>
=======
            <h1>Machine Learning Projects</h1>
>>>>>>> master
            <div className='project-container'>
                <div className="project-categories">
                    <ul>
                        <li>MATLAB</li>
<<<<<<< HEAD
                        <li>Python/Sci-kit Learn</li>
                        <li>C++</li>
=======
                        <li>Sci-kit Learn</li>
>>>>>>> master
                        <li>Tensorflow</li>
                    </ul>
                </div>
                <div className='project-items'>
                    {projects_data.map((item, index) => {return <ProjectCard project={item} key={index}/>})}
                </div>
                {/* { 
                    x.map(
                        (currentValue, index) => (
                            <ProjectCard ProjectTitle={index} />
                        )
                    ) 
                } */}
            </div>
        </div>
    )
}

export default Projects