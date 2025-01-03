import './Hero.scss';

const Hero = () => {
    return (
        <div className="hero inner-container">
            <h2 className="my-name">אביב אבידר</h2>
            <h1 className="sub-title">
                {/* <div className="text first-text">מעצב</div> */}
                <span className="text">מעצב</span>
                <span className="text">חווית</span>
                <span className="text">משתמש</span>
                <div className="cloud-vector" />
                <div className="aviv-cartoon" />
                <div className="doggo" />
                <div className="arrow-vector" />
            </h1>
        </div>
    )
}

export default Hero