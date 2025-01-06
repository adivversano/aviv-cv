import './Project.scss';

type ProjectProps = {
    project: any
}

const Project = ({ project }: ProjectProps) => {

    const { sector1 } = project;

    return (
        <div className="project">
            <h2 className="title">{sector1.title}</h2>
            <div className="description">{sector1.description}</div>
        </div>
    )
}

export default Project