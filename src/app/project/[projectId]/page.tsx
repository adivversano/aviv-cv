import Project from "@/components/Project";
import styles from './page.module.scss';
import { useParams } from "next/navigation";


async function fetchProjectData(projectId: string) {
    // const res = await fetch(`https://example.com/api/projects/${projectId}`, {
    //     // Use caching so that repeated calls with the same URL/options are deduplicated
    //     next: { revalidate: 60 },
    // });
    // if (!res.ok) {
    //     throw new Error('Failed to fetch project data');
    // }
    // return res.json();
    const projects = [{
        projectId: '1',
        title: 'קבוצת מכולה',
        description: 'קבוצת מכולה היא חברה של כח אדם שהגיעו עם דרישה לבניה',
        sections: [
            {
                title: 'על הפרויקט',
                description: <p>
                    <strong>קבוצת מכולה</strong> היא חברה המסייעת לחברות לעמוד ביעדיהם התפעוליים על ידי
                    <br />מודל ייחודי אשר מעניק קשת רחבה של פתרונות אנוש וטכנולוגיה רובוטית
                    <br />לתפעול השוטף של ארגונים. המטרה המרכזית בפרויקט הייתה לאפיין ולעצב מערכת
                    <br /><strong>שתפשט ותייעל </strong> את תהליך ניהול כוח האדם של החברה. האתגר העיקרי
                    <br />שעמד לפנינו היה להבין את המורכבות בתהליכי הניהול הקיימים ולמצוא דרך
                    <br />לשדרג אותם כך שיהיו קלים, מהירים ומדויקים יותר &ndash; מבלי להעמיס עבודה
                    <br />נוספת על עובדי ההנהלה. מה שהפך את הפרויקט לייחודי היה
                    <br />שיתוף הפעולה המלא של הלקוחות, שהצליחו לתאר את הצרכים שלהם בצורה
                    <br />מדויקת. בזכותם, לאחר שהפרויקט יצא לדרך, השלבים התקדמו במהירות וביעילות.
                </p>,
                imgUrls: [
                    '/aviv-cv/assets/mehula/image1.png',
                    '/aviv-cv/assets/mehula/image2.png',
                    '/aviv-cv/assets/mehula/image3.png',
                    '/aviv-cv/assets/mehula/image4.png',
                    '/aviv-cv/assets/mehula/image5.png',
                ],
            },
            {
                title: 'על הפרויקט',
                description: <p>
                    התפקיד שלי היה לאפיין ולעצב את ממשק המשתמש (UI) למערכת. כיוון שהמערכת
                    <br />מיועדת <strong>לדסקטופ בלבד</strong>, ערכתי מחקר מעמיק על מערכות ניהול מובילות בשוק,
                    <br />זיהיתי את נקודות החוזק שלהן ושילבתי את המסקנות במערכת שעבדתי עליה.
                    <br />המחקר הזה אפשר לי לצמצם מסכים ולבנות ממשק חכם ויעיל יותר.
                    <br />בנוסף, עבדתי בשיתוף פעולה הדוק עם מנכ"ל החברה, שהיה גם המפתח הראשי.
                    <br />העבודה המשותפת הזו אפשרה לנו לוודא <strong>שהאפיון מדויק ומותאם</strong> הן לצרכים הטכניים
                    <br />והן לצרכים התפעוליים של הלקוחות.
                </p>,
                imgUrls: [
                    '/aviv-cv/assets/mehula/image6.png',
                    '/aviv-cv/assets/mehula/image7.png',
                    '/aviv-cv/assets/mehula/image8.png',
                    '/aviv-cv/assets/mehula/image9.png',
                    '/aviv-cv/assets/mehula/image10.png'
                ],
            }
        ]
    }]
    return projects.find(p => p.projectId === projectId);
}

export async function generateMetadata({
    params,
}: {
    params: { projectId: string };
}) {
    // Fetch project data from your server based on projectId
    // const res = await fetch(`https://example.com/api/projects/${params.projectId}`, {
    //   cache: 'no-store',
    // });
    // const data = await res.json();
    const projectId = await params.projectId;
    const project = await fetchProjectData(projectId);
    if (!project) return null;

    return {
        // data.title, // dynamically set title based on fetched data
        title: `${process.env.NEXT_BASE_TITLE} | ${project.title}`,
        //   data.description,
        description: project?.description
    };
}

async function ProjectPage({
    params,
}: {
    params: { projectId: string };
}) {
    const project = await fetchProjectData(params.projectId);

    if (!project) return <div>Project not found</div>

    return (
        <div className={styles['project-container'] + ' inner-container'}>
            <Project project={project} />
        </div>
    )
}

export default ProjectPage