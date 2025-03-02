import Image from 'next/image';
import { ReactNode } from 'react';
import { MyButton } from '@/components/MyButton';
import Link from 'next/link';

type ProjectSection = {
    title: string
    description: ReactNode
    imgUrls: string[]
}

type ProjectProps = {
    project: {
        sections: ProjectSection[]
    }
}

const Project = ({ project }: ProjectProps) => {

    const { sections } = project;

    return (
        <div className="project">
            <div className="sections">
                {sections.map(
                    ({ title, description, imgUrls }, index) => {
                        return (
                            <div className="section" key={index}>
                                <div className="section-content">
                                    <h2 className="title">{title}</h2>
                                    <div className="description">{description}</div>
                                </div>
                                <div className="gallery">
                                    {imgUrls.map((url, index) => (
                                        <div className="img-container" key={index}>
                                            <Image className="image" key={index} src={url} fill alt="" />
                                        </div>
                                    ))}
                                </div>
                            </div>
                        )
                    })
                }
            </div>

            <div className="projects-btn-container">
                <MyButton
                    className="projects-btn"
                    text="לפרויקטים נוספים"
                    as={Link}
                    href="/projects"
                />
            </div>
        </div>
    )
}

export default Project