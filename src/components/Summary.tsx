import SummaryBgVector from '@/assets/summary-bg-vector.svg';
import SummaryHandVector from '@/assets/summary-hand-vector.svg';
import Character from '@/components/Character';
import { motion } from 'framer-motion';

const Summary = () => {
    return (
        <motion.div
            className="summary-wrapper"
        >
            <div className="summary-vector">
                <SummaryHandVector className="hand" />
                <SummaryBgVector className="bg" />
            </div>

            <motion.div
                initial={{
                    opacity: 0
                }}
                whileInView={{
                    opacity: 1
                }}
                viewport={{ amount: 0.2, once: true }}
                className="summary inner-container" id="summary">
                <h2 className="title">יום נעים</h2>
                <Character
                    className="description"
                    paragraph={`ברוכים הבאים לגלקסיה שלי ביקום הענק הזה של אינטרנט, אני מעצב גרפי, עם תשוקה לעיצובים שמספרים סיפור, לפעמים בולטים ונועזים, לפעמים מדויקים ומינימליסטיים, התחלתי לעצב בשנת 2022 עבדתי שתי חברות דיגיטל, ורכשתי את הנסיון שלי עיצוב של אתרים אפליקציות ומערכות, אני מזמין אתכם לגלול ↓ למטה לראות קצת מהעבודות שעשיתי
                        `}
                />
            </motion.div>
        </motion.div>
    )
}

export default Summary