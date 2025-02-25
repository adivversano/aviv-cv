import Image from 'next/image';
import { MyButton } from './MyButton';

const projects = [
    {
        projectId: 1,
        title: 'קבוצת מכולה',
        description: `קבוצת מכולה היא חברה של כח אדם שהגיעו עם דרישה לבניה
        ועיצוב מערכת לניהול כח האדם שלהם. הם מספקים כח אדם
        למפעלים וחברות ברחבי הארץ שרובם עובדים זרים. לחברה יש
        למעלה מ1000 עובדים`,
        date: '2024',
        field: 'משאבי האנוש',
        product: 'עיצוב ואפיון המערכת',
        image: '/aviv-cv/assets/project-mehula.png'
    },
    {
        projectId: 2,
        title: 'Diffreacting',
        description: `מיתוג עבוד חברת Differeacting. העוסקת בפיתוח תוכנה של
        מערכות האתגר היה ליצור אייקון שיהיה מודרני וחדשני שישלב בין שני
        אותיות לפי בקשת הלקוח`,
        date: '2024',
        field: 'פיתוח תוכנה',
        product: 'עיצוב לוגו ואתר רספונסיבי',
        image: '/aviv-cv/assets/project-diffreacting.png'
    },
    {
        projectId: 3,
        title: 'Glamspot',
        description: `Glamspot היא חברה פרטית של מאפרת מוכשרת עם
        רעיון מיוחד ויוצא דופן, עמדות גלואו אפ באירועים מכל
        הסוגים בשביל לשמור על הטיפוח והיופי של האורחים
        באותו אירוע.`,
        date: '2024',
        field: 'איפור ואופנה',
        product: 'מיתוג ועיצוב לוגו',
        image: '/aviv-cv/assets/project-glamspot.png'
    },
    {
        projectId: 4,
        title: 'Rize',
        description: `Rize היא חברת סושיאל שנותנת שירות לבתי עסק בניהול
        הסושיאל שלהם. הפרויקט עם Rize היה עיצוב לוגו ומיתוג
        מלא שכולל גם עיצוב אתר רפסונסיבי שידבר את השפה
        של המותג`,
        date: '2024',
        field: 'עולם הדיגיטל',
        product: 'עיצוב לוגו ואתר רספונסיבי',
        image: '/aviv-cv/assets/project-rize.png'
    },
    {
        projectId: 5,
        title: 'Buyon',
        description: `Buyon היא חברת שעוסקת במכירת והשכרת ציוד
        לאירועים, הפרויקט כלל עיצוב של אתר סחר רספונסיבי`,
        date: '2024',
        field: 'מכירת ציוד',
        product: 'איפיון ועיצוב אתר סחר',
        image: '/aviv-cv/assets/project-buyon.png'
    },
    {
        projectId: 6,
        title: 'Avery Dennison',
        description: `עיצוב ואיפיון מחשבון לחברת אייברי דניסון לניתוח
        תוצאות נתונים שיעזרו לחברה בהסברה ללקוחות ויתרמו
        לסגירת עסקאות`,
        date: '2023',
        field: 'מסחר מוצר',
        product: 'עיצוב ואפיון מערכות חישוב',
        image: '/aviv-cv/assets/project-avery-dennison.png'
    }
]

const Projects = () => {

    const formatDescription = (description: string) => {
        return description.split('\n').map((line: string, index: number) => {
            return <span key={index}>
                {line}
                {index !== description.split('\n').length - 1 && <br />}
            </span>
        })
    }
    return (
        <div className="projects-wrapper">
            <div className="projects">
                {projects.map(({ title, description, date, field, product, image }, index) => {
                    return (
                        <div className="project" key={index}>
                            <article className="project-content">
                                <h2 className="title">{title}</h2>
                                <p className="description">
                                    {formatDescription(description)}
                                </p>
                                <p className="date">
                                    <span>שנה: {date}</span>
                                    <span>תחום פעילות: {field}</span>
                                    <span>תוצר: {product}</span>
                                </p>

                                <MyButton className="project-btn" text="לצפייה בפרויקט" />
                            </article>
                            <Image className="project-graphic" src={image} fill alt="project graphic image"/>
                        </div>
                    )
                }
                )}
            </div>
        </div>
    )
}

export default Projects