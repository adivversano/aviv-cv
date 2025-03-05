import Project from "@/components/Project";
import styles from './page.module.scss';


async function fetchProjectData(projectId: string) {
    // const res = await fetch(`https://example.com/api/projects/${projectId}`, {
    //     // Use caching so that repeated calls with the same URL/options are deduplicated
    //     next: { revalidate: 60 },
    // });
    // if (!res.ok) {
    //     throw new Error('Failed to fetch project data');
    // }
    // return res.json();
    const projects = [
        {
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
                    title: 'התפקיד שלי בפרויקט',
                    description: <p>
                        התפקיד שלי היה לאפיין ולעצב את ממשק המשתמש (UI) למערכת. כיוון שהמערכת
                        <br />מיועדת <strong>לדסקטופ בלבד</strong>, ערכתי מחקר מעמיק על מערכות ניהול מובילות בשוק,
                        <br />זיהיתי את נקודות החוזק שלהן ושילבתי את המסקנות במערכת שעבדתי עליה.
                        <br />המחקר הזה אפשר לי לצמצם מסכים ולבנות ממשק חכם ויעיל יותר.
                        <br />בנוסף, עבדתי בשיתוף פעולה הדוק עם מנכ&quot;ל החברה, שהיה גם המפתח הראשי.
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
        },
        {
            projectId: '2',
            title: 'Differeacting',
            description: 'Differeacting היא חברה פיתוח לאתרים ומערכות תוכנה. הדרישה של הלקוח הייתה לעצב לוגו ייחודי וחדשני שיכלול שילוב של 2 אותיות באייקון ולמצוא פונט מודרני ויפה בשביל השם של החברה. בנוסף, עיצוב אתר תדמית לחברה בשביל שתוכל להראות את הפרויקטים שלה.',
            sections: [
                {
                    title: 'על הפרויקט',
                    description: <p>
                        <strong>Differeacting</strong> היא חברה פיתוח לאתרים ומערכות תוכנה. הדרישה של הלקוח הייתה לעצב
                        <br />לוגו ייחודי וחדשני שיכלול שילוב של 2 אותיות באייקון ולמצוא פונט מודרני ויפה בשביל השם של
                        <br />החברה. בנוסף, עיצוב אתר תדמית לחברה בשביל שתוכל להראות את הפרויקטים שלה.
                    </p>,
                    imgUrls: [
                        '/aviv-cv/assets/differeacting/image1.png',
                        '/aviv-cv/assets/differeacting/image2.png',
                        '/aviv-cv/assets/differeacting/image3.png',
                        '/aviv-cv/assets/differeacting/image4.png',
                    ],
                    imgOptions: {
                        layout: 'column3 cover first-big',
                        image: 'cover'
                    }
                },
                {
                    title: 'התהליך',
                    description: <p>
                        differaecting היא חברה צעירה שמציעה שירותי פיתוח מערכות תוכנה ואתרים, השם של
                        <br />החברה נובע שפת התכנות שהמפתחים של החברה מפתחים איתה (react) ובשילוב של המילה
                        <br />different שמביע את השוני שהם מביאים לשוק הפיתוח.
                        <br /><strong>האייקון בנוי משני האותיות</strong> של המילים הללו D+R ולאחר כמה גרסות שיצרתי בשבילהם בשילוב
                        <br />של שני האותיות האלה נבחר האייקון הבא שמשלב בצורה ברורה ולא מתחכמת מידי בין שני
                        <br />האותיות, שבסופו של התהליך הלקוחות היו מרוצים מהתוצאה לה איחלו.
                    </p>,
                    imgUrls: [
                        '/aviv-cv/assets/differeacting/image5.png',
                        '/aviv-cv/assets/differeacting/image6.png',
                        '/aviv-cv/assets/differeacting/image7.png',
                        '/aviv-cv/assets/differeacting/image8.png'
                    ],
                    imgOptions: {
                        layout: 'column3 first-big'
                    }
                },
                {
                    title: 'התאמה של הלוגו\nלרקעים שונים',
                    description: <p>
                        עיצוב הלוגו הותאם בשביל לעבוד בצורה הטובה ביותר בגרסאות שחור ולבן, המאפשר את
                        <br />היישום שלו בהקשרים שונים, מבלי לאבד את החוזק הוויזואלי והבהירות שלו.
                    </p>,
                    imgUrls: [
                        '/aviv-cv/assets/differeacting/image9.svg',
                        '/aviv-cv/assets/differeacting/image10.svg',
                        '/aviv-cv/assets/differeacting/image11.svg',
                        '/aviv-cv/assets/differeacting/image12.svg'
                    ],
                    imgOptions: {
                        layout: 'column2 logos',
                    }
                }
            ]
        },
        {
            projectId: '3',
            title: 'Glamspot',
            description: 'Glamspot היא חברה צעירה ומקורית, הרעיון של החברה הוא להביא את היוקרה לכל סוגי האירועים כעמדות פופ-אפ בתוך האירוע עצמו של תחזוקת איפור לכל מי שירצה.',
            sections: [
                {
                    title: 'על הפרויקט',
                    description: <p>
                        Glamspot היא חברה צעירה ומקורית, הרעיון של החברה הוא להביא את היוקרה לכל סוגי
                        <br />האירועים כעמדות פופ-אפ בתוך האירוע עצמו של תחזוקת איפור לכל מי שירצה.
                    </p>,
                    imgUrls: [
                        '/aviv-cv/assets/glamspot/image1.png',
                        '/aviv-cv/assets/glamspot/image2.png',
                        '/aviv-cv/assets/glamspot/image3.png',
                        '/aviv-cv/assets/glamspot/image4.png',
                    ],
                    imgOptions: {
                        layout: 'column3 cover first-big',
                        image: 'cover'
                    }
                },
                {
                    title: 'התהליך',
                    description: <p>
                        Glamspot היא חברה צעירה שמתחילה את דרכה מאפס. האתגר היה למתג את החברה שתוכל
                        <br />להשתלב בכל סוג אירוע בלי לקחת את כל התשומת לב ממרכז העניינים של האירוע, אך עדיין
                        <br />לבלוט בצורה כלשהי כדי שיבחינו בעמדות שיפרסו באירועים עצמם.
                        <br />בעלת החברה שבאה עם הרעיון היצירתי ידעה בדיוק מה היא רוצה וידעה להעביר לי בצורה
                        <br />מאוד ברורה את האלמנטים והסגנון העיצובי שהיא דמיינה לה בראש, ועלי היה לקחת את החזון
                        <br />שלה לנראות של המותג והלוגו שלה ולהמחיש אותו לידי ביצוע.
                    </p>,
                    imgUrls: [
                        '/aviv-cv/assets/glamspot/image5.png',
                        '/aviv-cv/assets/glamspot/image6.png',
                        '/aviv-cv/assets/glamspot/image7.png',
                        '/aviv-cv/assets/glamspot/image8.png'
                    ],
                    imgOptions: {
                        layout: 'column3 cover first-big',
                        image: 'cover'
                    }
                },
                {
                    title: 'התאמה של הלוגו\nלרקעים שונים',
                    description: <p>
                        עיצוב הלוגו הותאם בשביל לעבוד בצורה הטובה ביותר בגרסאות שחור ולבן, המאפשר את
                        <br />היישום שלו בהקשרים שונים, מבלי לאבד את החוזק הוויזואלי והבהירות שלו.
                    </p>,
                    imgUrls: [
                        '/aviv-cv/assets/glamspot/image9.svg',
                        '/aviv-cv/assets/glamspot/image10.svg',
                        '/aviv-cv/assets/glamspot/image11.svg',
                        '/aviv-cv/assets/glamspot/image12.svg'
                    ],
                    imgOptions: {
                        layout: 'column2 logos',
                    }
                }
            ]
        },
        {
            projectId: '4',
            title: 'Rize',
            description: 'Rize היא חברה צעירה שבאה לבלוט בעולם הסושיאל, היינו צריכים להגיע לתוצאת מיתוג שתדבר בשפה צעירה ושמחה בשביל להבדיל את החברה משאר המתחרים. בנוסף, האתגר היה לבחור את השם של החברה.',
            sections: [
                {
                    title: 'על הפרויקט',
                    description: <p>
                        <strong>Rize</strong> היא חברה צעירה שבאה לבלוט בעולם הסושיאל, היינו צריכים להגיע לתוצאת מיתוג
                        <br />שתדבר בשפה צעירה ושמחה בשביל להבדיל את החברה משאר המתחרים. בנוסף, האתגר היה
                        <br />לבחור את השם של החברה.
                    </p>,
                    imgUrls: [
                        '/aviv-cv/assets/rize/image1.png',
                        '/aviv-cv/assets/rize/image2.png',
                        '/aviv-cv/assets/rize/image3.png',
                        '/aviv-cv/assets/rize/image4.png',
                    ],
                    imgOptions: {
                        layout: 'column3 first-big',
                    }
                },
                {
                    title: 'התפקיד שלי בפרויקט',
                    description: <p>
                        התפקיד שלי היה ראשית לעשות מחקר מתחרים בעולם הסושיאל ולתכנן את האופי של החברה
                        <br />שתדבר בשפה שמתקשרת לעולם הסושיאל, שתיבדל משאר החברות בעולם הזה וכמובן שתראה
                        <br />טוב בכל הפלטפורמות בשביל שאנשים ישימו לב אליה.
                        <br />לאחר מכן היה עלי לאפיין ולעצב את האתר שידבר את השפה העיצובים של הלוגו שבנוי מהאות
                        <br />באנגלית Z (שמסמלת את דור ה - Z) וחצויה ומשתלטת על שאר האותיות כמו שהדור הצעיר
                        <br />משתלט וסוחף את העולם בדרך שלו שהיא דרך הפלטפורמות המוצעות לנו.
                    </p>,
                    imgUrls: [
                        '/aviv-cv/assets/rize/image5.png',
                        '/aviv-cv/assets/rize/image6.png',
                        '/aviv-cv/assets/rize/image7.png',
                        '/aviv-cv/assets/rize/image8.png'
                    ],
                    imgOptions: {
                        layout: 'column3 cover first-big',
                        image: 'cover'
                    }
                },
                {
                    title: 'התאמה של הלוגו\nלרקעים שונים',
                    description: <p>
                        עיצוב הלוגו הותאם בשביל לעבוד בצורה הטובה ביותר בגרסאות שחור ולבן, המאפשר את
                        <br />היישום שלו בהקשרים שונים, מבלי לאבד את החוזק הוויזואלי והבהירות שלו.
                    </p>,
                    imgUrls: [
                        '/aviv-cv/assets/rize/image9.svg',
                        '/aviv-cv/assets/rize/image10.svg',
                        '/aviv-cv/assets/rize/image11.svg',
                        '/aviv-cv/assets/rize/image12.svg'
                    ],
                    imgOptions: {
                        layout: 'column2 logos',
                        // image: 'third-width'
                    }
                }
            ]
        },
        {
            projectId: '5', //NOT READY MISSING TEXT
            title: 'Buyon',
            description: 'Rize היא חברה צעירה שבאה לבלוט בעולם הסושיאל, היינו צריכים להגיע לתוצאת מיתוג שתדבר בשפה צעירה ושמחה בשביל להבדיל את החברה משאר המתחרים. בנוסף, האתגר היה לבחור את השם של החברה.',
            sections: [
                {
                    title: 'על הפרויקט',
                    description: <p>
                        <strong>Rize</strong> היא חברה צעירה שבאה לבלוט בעולם הסושיאל, היינו צריכים להגיע לתוצאת מיתוג
                        <br />שתדבר בשפה צעירה ושמחה בשביל להבדיל את החברה משאר המתחרים. בנוסף, האתגר היה
                        <br />לבחור את השם של החברה.
                    </p>,
                    imgUrls: [
                        '/aviv-cv/assets/buyon/image1.png',
                        '/aviv-cv/assets/buyon/image2.png',
                        '/aviv-cv/assets/buyon/image3.png',
                        '/aviv-cv/assets/buyon/image4.png',
                    ],
                    imgOptions: {
                        layout: 'column3 first-big',
                    }
                },
                {
                    title: 'התפקיד שלי בפרויקט',
                    description: <p>
                        התפקיד שלי היה ראשית לעשות מחקר מתחרים בעולם הסושיאל ולתכנן את האופי של החברה
                        <br />שתדבר בשפה שמתקשרת לעולם הסושיאל, שתיבדל משאר החברות בעולם הזה וכמובן שתראה
                        <br />טוב בכל הפלטפורמות בשביל שאנשים ישימו לב אליה.
                        <br />לאחר מכן היה עלי לאפיין ולעצב את האתר שידבר את השפה העיצובים של הלוגו שבנוי מהאות
                        <br />באנגלית Z (שמסמלת את דור ה - Z) וחצויה ומשתלטת על שאר האותיות כמו שהדור הצעיר
                        <br />משתלט וסוחף את העולם בדרך שלו שהיא דרך הפלטפורמות המוצעות לנו.
                    </p>,
                    imgUrls: [
                        '/aviv-cv/assets/buyon/image5.png',
                        '/aviv-cv/assets/buyon/image6.png',
                        '/aviv-cv/assets/buyon/image7.png',
                        '/aviv-cv/assets/buyon/image9.png',
                        '/aviv-cv/assets/buyon/image8.png'
                    ],
                    imgOptions: {
                        layout: 'column2 first-big',
                    }
                }
            ]
        },
        {
            projectId: '6', //NOT READY MISSING TEXT
            title: 'Avery Dennison',
            description: 'Rize היא חברה צעירה שבאה לבלוט בעולם הסושיאל, היינו צריכים להגיע לתוצאת מיתוג שתדבר בשפה צעירה ושמחה בשביל להבדיל את החברה משאר המתחרים. בנוסף, האתגר היה לבחור את השם של החברה.',
            sections: [
                {
                    title: 'על הפרויקט',
                    description: <p>
                        <strong>Rize</strong> היא חברה צעירה שבאה לבלוט בעולם הסושיאל, היינו צריכים להגיע לתוצאת מיתוג
                        <br />שתדבר בשפה צעירה ושמחה בשביל להבדיל את החברה משאר המתחרים. בנוסף, האתגר היה
                        <br />לבחור את השם של החברה.
                    </p>,
                    imgUrls: [
                        '/aviv-cv/assets/avery-dennison/image1.png',
                        '/aviv-cv/assets/avery-dennison/image2.png',
                        '/aviv-cv/assets/avery-dennison/image3.png',
                        '/aviv-cv/assets/avery-dennison/image4.png',
                        '/aviv-cv/assets/avery-dennison/image5.png',
                    ],
                    imgOptions: {
                        layout: 'column2 first-big',
                    }
                },
                {
                    title: 'התפקיד שלי בפרויקט',
                    description: <p>
                        התפקיד שלי היה ראשית לעשות מחקר מתחרים בעולם הסושיאל ולתכנן את האופי של החברה
                        <br />שתדבר בשפה שמתקשרת לעולם הסושיאל, שתיבדל משאר החברות בעולם הזה וכמובן שתראה
                        <br />טוב בכל הפלטפורמות בשביל שאנשים ישימו לב אליה.
                        <br />לאחר מכן היה עלי לאפיין ולעצב את האתר שידבר את השפה העיצובים של הלוגו שבנוי מהאות
                        <br />באנגלית Z (שמסמלת את דור ה - Z) וחצויה ומשתלטת על שאר האותיות כמו שהדור הצעיר
                        <br />משתלט וסוחף את העולם בדרך שלו שהיא דרך הפלטפורמות המוצעות לנו.
                    </p>,
                    imgUrls: [
                        '/aviv-cv/assets/avery-dennison/image6.png',
                        '/aviv-cv/assets/avery-dennison/image7.png',
                        '/aviv-cv/assets/avery-dennison/image8.png',
                        '/aviv-cv/assets/avery-dennison/image9.png',
                        '/aviv-cv/assets/avery-dennison/image10.png',
                    ],
                    imgOptions: {
                        layout: 'column2 first-big',
                    }
                }
            ]
        }
    ]
    return projects.find(p => p.projectId === projectId);
}

type PageProps = {
    params: Promise<{ projectId: string }>
}

export async function generateStaticParams() {
    // Fetch project IDs from your server
    // const res = await fetch('https://example.com/api/projects', {
    //   cache: 'no-store',
    // });
    // const data = await res.json();
    // return data.map((projectId) => ({ params: { projectId } }));
    return [
        { projectId: '1' },
        { projectId: '2' },
        { projectId: '3' },
        { projectId: '4' },
        { projectId: '5' },
        { projectId: '6' }
    ];
}

export async function generateMetadata({
    params
}: PageProps) {
    // Fetch project data from your server based on projectId
    // const res = await fetch(`https://example.com/api/projects/${params.projectId}`, {
    //   cache: 'no-store',
    // });
    // const data = await res.json();
    const projectId = (await params).projectId;
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
    params
}: PageProps) {
    const projectId = (await params).projectId;
    const project = await fetchProjectData(projectId);

    if (!project) return <div>Project not found</div>

    return (
        <div className={styles['project-container'] + ' inner-container'}>
            <Project project={project} />
        </div>
    )
}

export default ProjectPage