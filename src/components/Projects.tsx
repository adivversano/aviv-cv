import { Button } from 'react-bootstrap';
import './Projects.scss';
import Link from 'next/link';

const Projects = () => {
    return (
        <div className="projects-wrapper">
            <div className="projects inner-container">
                <div className="project">
                    <article className="project-content">
                        <h2 className="title">קבוצת מכולה</h2>
                        <p className="description">
                            קבוצת מכולה היא חברה של כח אדם שהגיעו עם דרישה לבניה ועיצוב מערכת לניהול כח האדם שלהם. הם מספקים כח אדם למפעלים וחברות ברחבי הארץ שרובם עובדים זרים. לחברה יש למעלה מ1000 עובדים
                        </p>
                        <p className="date">
                            <span>שנה: 2024</span>
                            <span>תחום פעילות: משאבי האנוש</span>
                            <span>תוצר: עיצוב ואפיון המערכת</span>
                        </p>

                        <Button className="project-btn lg white" variant="">
                            <span className="text bold">עניין אותך?</span>
                            <span className="text">יש לי עוד קצת להראות ←</span>
                        </Button>
                    </article>
                    <img className="project-graphic" src="/aviv-cv/assets/project-mehula.png"/>
                </div>
                <div className="project">
                    <article className="project-content">
                        <h2 className="title">פרויקט שני</h2>
                        <p className="description">
                            לורם איפסום דולור סיט אמט, קונסקטורר אדיפיסינג אלית לורם איפסום דולור
                            סיט אמט, קונסקטורר אדיפיסינג אלית. סת אלמנקום ניסי נון ניבא הדס
                            איאקוליס וולופטה דיאם. וסטיבולום אט דולור, קראס אגת לקטוס וואל אאוגו
                        </p>
                        <p className="date">
                            <span>שנה: 2022</span>
                            <span>תחום פעילות: נדל״ן</span>
                            <span>תוצר: אתר קטלוג</span>
                        </p>

                        <Button className="project-btn lg white" variant="">
                            <span className="text bold">עניין אותך?</span>
                            <span className="text">יש לי עוד קצת להראות ←</span>
                        </Button>
                    </article>
                    <div className="project-graphic" />
                </div>
                <div className="project">
                    <article className="project-content">
                        <h2 className="title">פרויקט שלישי</h2>
                        <p className="description">
                            לורם איפסום דולור סיט אמט, קונסקטורר אדיפיסינג אלית לורם איפסום דולור
                            סיט אמט, קונסקטורר אדיפיסינג אלית. סת אלמנקום ניסי נון ניבא הדס
                            איאקוליס וולופטה דיאם. וסטיבולום אט דולור, קראס אגת לקטוס וואל אאוגו
                        </p>
                        <p className="date">
                            <span>שנה: 2022</span>
                            <span>תחום פעילות: נדל״ן</span>
                            <span>תוצר: אתר קטלוג</span>
                        </p>

                        <Button className="project-btn lg white" variant="">
                            <span className="text bold">עניין אותך?</span>
                            <span className="text">יש לי עוד קצת להראות ←</span>
                        </Button>
                    </article>
                    <div className="project-graphic" />
                </div>
                <div className="project">
                    <article className="project-content">
                        <h2 className="title">פרויקט רביעי</h2>
                        <p className="description">
                            לורם איפסום דולור סיט אמט, קונסקטורר אדיפיסינג אלית לורם איפסום דולור
                            סיט אמט, קונסקטורר אדיפיסינג אלית. סת אלמנקום ניסי נון ניבא הדס
                            איאקוליס וולופטה דיאם. וסטיבולום אט דולור, קראס אגת לקטוס וואל אאוגו
                        </p>
                        <p className="date">
                            <span>שנה: 2022</span>
                            <span>תחום פעילות: נדל״ן</span>
                            <span>תוצר: אתר קטלוג</span>
                        </p>

                        <Button className="project-btn lg white" variant="">
                            <span className="text bold">עניין אותך?</span>
                            <span className="text">יש לי עוד קצת להראות ←</span>
                        </Button>
                    </article>
                    <div className="project-graphic" />
                </div>
                <div className="project">
                    <article className="project-content">
                        <h2 className="title">פרויקט חמישי</h2>
                        <p className="description">
                            לורם איפסום דולור סיט אמט, קונסקטורר אדיפיסינג אלית לורם איפסום דולור
                            סיט אמט, קונסקטורר אדיפיסינג אלית. סת אלמנקום ניסי נון ניבא הדס
                            איאקוליס וולופטה דיאם. וסטיבולום אט דולור, קראס אגת לקטוס וואל אאוגו
                        </p>
                        <p className="date">
                            <span>שנה: 2022</span>
                            <span>תחום פעילות: נדל״ן</span>
                            <span>תוצר: אתר קטלוג</span>
                        </p>

                        <Button className="project-btn lg white" variant="">
                            <span className="text bold">עניין אותך?</span>
                            <span className="text">יש לי עוד קצת להראות ←</span>
                        </Button>
                    </article>
                    <div className="project-graphic" />
                </div>
                <div className="project">
                    <article className="project-content">
                        <h2 className="title">פרויקט שישי</h2>
                        <p className="description">
                            לורם איפסום דולור סיט אמט, קונסקטורר אדיפיסינג אלית לורם איפסום דולור
                            סיט אמט, קונסקטורר אדיפיסינג אלית. סת אלמנקום ניסי נון ניבא הדס
                            איאקוליס וולופטה דיאם. וסטיבולום אט דולור, קראס אגת לקטוס וואל אאוגו
                        </p>
                        <p className="date">
                            <span>שנה: 2022</span>
                            <span>תחום פעילות: נדל״ן</span>
                            <span>תוצר: אתר קטלוג</span>
                        </p>

                        <Link className="project-btn btn lg white" href="/project/111">
                            <span className="text bold">עניין אותך?</span>
                            <span className="text">יש לי עוד קצת להראות ←</span>
                        </Link>
                    </article>
                    <div className="project-graphic" />
                </div>
            </div>

        </div>
    )
}

export default Projects