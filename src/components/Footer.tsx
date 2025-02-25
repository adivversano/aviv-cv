import { MyButton } from './MyButton';

const Footer = () => {
    return (
        <div className="footer inner-container">
            <div className="footer-content">
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
            <div className="credits-container">
                <small>כל הזכויות שמורות לאביב אבידר</small>
                <small>פיתוח ע״י אדיב ורסנו</small>
            </div>
        </div>
    )
}

export default Footer