import { Button } from 'react-bootstrap';
import './Footer.scss';

const Footer = () => {
    return (
        <div className="footer-wrapper">
            <div className="footer inner-container">
            <div className="right-container">
                    <h2 className="title">
                        שיהיה אחלה של יום
                    </h2>

                    <h3 className="sub-title">אשמח אם נעבוד ביחד</h3>

                    <Button className="project-btn" variant="">
                        <span className="text bold">אני עניינתי אותך?</span>
                        <span className="text">יש לי עוד קצת ביכולות ←</span>
                    </Button>
                </div>

                <div className="left-container">
                    <div className="footer-vector" />
                </div>
            </div>
        </div>
    )
}

export default Footer