'use client'
import Project from "@/components/Project";
import styles from './page.module.scss';

const project = {
    sector1: {
        title: 'על הפרויקט',
        description: <p><strong>קבוצת מכולה</strong> היא חברה המסייעת לחברות לעמוד ביעדיהם התפעוליים על ידי<br />מודל ייחודי אשר מעניק קשת רחבה של פתרונות אנוש וטכנולוגיה רובוטית<br />לתפעול השוטף של ארגונים. המטרה המרכזית בפרויקט הייתה לאפיין ולעצב מערכת<br /><strong>שתפשט ותייעל </strong> את תהליך ניהול כוח האדם של החברה. האתגר העיקרי<br />שעמד לפנינו היה להבין את המורכבות בתהליכי הניהול הקיימים ולמצוא דרך<br />לשדרג אותם כך שיהיו קלים, מהירים ומדויקים יותר &ndash; מבלי להעמיס עבודה<br />נוספת על עובדי ההנהלה. מה שהפך את הפרויקט לייחודי היה<br />שיתוף הפעולה המלא של הלקוחות, שהצליחו לתאר את הצרכים שלהם בצורה<br />מדויקת. בזכותם, לאחר שהפרויקט יצא לדרך, השלבים התקדמו במהירות וביעילות.</p>
    }
}

const ProjectPage = () => {
    // const { projectId } = useParams();

    return (
        <div className={styles['project-container']}>
            <Project project={project} />
        </div>
    )
}

export default ProjectPage