import Image from 'next/image';
import Link from 'next/link';
import styles from './page.module.scss';

const projects = [
    {
        projectId: 2,
        title: 'Differeacting',
        product: 'עיצוב לוגו ואתר רספונסיבי',
        imgUrl: '/assets/project-differeacting.png'
    },
    {
        projectId: 1,
        title: 'קבוצת מכולה',
        product: 'עיצוב ואפיון המערכת',
        imgUrl: '/assets/project-mehula.png'
    },
    {
        projectId: 4,
        title: 'Rize',
        product: 'עיצוב לוגו ואתר רספונסיבי',
        imgUrl: '/assets/project-rize.png'
    },
    {
        projectId: 3,
        title: 'Glamspot',
        product: 'מיתוג ועיצוב לוגו',
        imgUrl: '/assets/project-glamspot.png'
    },
    {
        projectId: 6,
        title: 'Avery Dennison',
        product: 'עיצוב ואפיון מערכות חישוב',
        imgUrl: '/assets/project-avery-dennison.png'
    },
    {
        projectId: 5,
        title: 'Buyon',
        product: 'איפיון ועיצוב אתר סחר',
        imgUrl: '/assets/project-buyon.png'
    }
]

export async function generateMetadata() {
    return {
        title: `${process.env.NEXT_BASE_TITLE} | פרויקטים`,
    };
}

async function ProjectPage() {
    return (
        <div className={styles['projects-container'] + ' inner-container'}>
            <h1 className={styles.title}>הפרויקטים שלי</h1>

            <div className={styles.projects}>
                {projects.map(({ projectId, title, product, imgUrl }, index) => {
                    return (
                        <div className={styles.project} key={index}>
                            <Link href={`/project/${projectId}`}>
                                <div className={styles['project-graphic-container']}>
                                    <Image className={styles['project-graphic']}
                                        src={imgUrl}
                                        height={384}
                                        width={540}
                                        layout="responsive"
                                        alt="project graphic image"
                                    />
                                </div>
                            </Link>
                            <article className="project-content">
                                <p className={styles['product']}>{product}</p>
                                <h2 className={styles['project-title']}>{title}</h2>
                            </article>
                        </div>
                    )
                }
                )}
            </div>
        </div>
    )
}

export default ProjectPage