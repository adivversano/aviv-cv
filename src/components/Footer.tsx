import { MyButton } from './MyButton';

const Footer = () => {
    return (
        <div className="footer">
            <div className="footer-content inner-container">
                <div className="right-container">
                    <h2 className="title">
                        זה רק קצה הקרחון.
                    </h2>

                    <h3 className="sub-title">רוצה לראות מה עוד אפשר לעשות?</h3>
                </div>

                <div className="left-container">
                    <MyButton className="footer-btn" text="דברו איתי" />
                </div>
            </div>
            <div className="credits-container inner-container">
                <small>כל הזכויות שמורות לאביב אבידר</small>
                <small>פיתוח ע״י אדיב ורסנו</small>
            </div>
        </div>
    )
}

export default Footer