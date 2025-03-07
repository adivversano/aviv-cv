import Image from 'next/image';
import Link from 'next/link';
import styles from './page.module.scss';
import { Metadata } from 'next';

const projects = [
    {
        projectId: 2,
        title: 'Differeacting',
        product: 'עיצוב לוגו ואתר רספונסיבי',
        imgUrl: '/aviv-cv/assets/project-differeacting.png'
    },
    {
        projectId: 1,
        title: 'קבוצת מכולה',
        product: 'עיצוב ואפיון המערכת',
        imgUrl: '/aviv-cv/assets/project-mehula.png'
    },
    {
        projectId: 4,
        title: 'Rize',
        product: 'עיצוב לוגו ואתר רספונסיבי',
        imgUrl: '/aviv-cv/assets/project-rize.png'
    },
    {
        projectId: 3,
        title: 'Glamspot',
        product: 'מיתוג ועיצוב לוגו',
        imgUrl: '/aviv-cv/assets/project-glamspot.png'
    },
    {
        projectId: 6,
        title: 'Avery Dennison',
        product: 'עיצוב ואפיון מערכות חישוב',
        imgUrl: '/aviv-cv/assets/project-avery-dennison.png'
    },
    {
        projectId: 5,
        title: 'Buyon',
        product: 'איפיון ועיצוב אתר סחר',
        imgUrl: '/aviv-cv/assets/project-buyon.png'
    }
]

export async function generateMetadata(): Promise<Metadata | undefined> {
    unstable_noStore()
    return {
        title: `${process.env.NEXT_PUBLIC_BASE_TITLE} | פרויקטים`,
    }
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