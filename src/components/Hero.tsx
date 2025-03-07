import { motion, Variants } from 'framer-motion';

const containerVariants: Variants = {
    hidden: {},
    show: {
        transition: {
            /* Stagger each child by 0.2s */
            staggerChildren: 0.05,
            ease: 'easeOut'
        },
    },
};

const textVariants: Variants = {
    hidden: { y: -50, opacity: 0 },
    show: {
        y: 0,
        opacity: 1,
        transition: {
            type: 'spring',
            stiffness: 80,
            damping: 20,
        },
    },
};

const imageVariants: Variants = {
    hidden: { y: 50, opacity: 0 },
    show: {
        y: 0,
        opacity: 1,
        transition: {
            // duration: 0.3,
            // ease: 'easeOut',
            type: 'spring',
            stiffness: 80,
            damping: 20,
        },
    },
};

const dogVariants: Variants = {
    hidden: { scale: 0, opacity: 0 },
    show: {
        scale: 1,
        opacity: 1,
        transition: {
            duration: 0.2,
            ease: 'easeOut'
        }
    }

}

const Hero = () => {
    return (
        <>
            {/* 
          The outer <motion.div> uses containerVariants 
          to stagger the animation of its child elements 
        */}
            <motion.div
                className="hero inner-container"
                variants={containerVariants}
                initial="hidden"
                animate="show"
            >
                {/* Animated Name */}
                <motion.div
                    className="hero-container"
                    variants={containerVariants}
                    initial="hidden"
                    animate="show"
                >
                    <motion.div className="cloud-vector" variants={dogVariants} />

                    <motion.h2 className="my-name" variants={textVariants}>
                        אביב אבידר
                    </motion.h2>

                    {/* Animated Subtitle */}
                    <motion.h1 className="sub-title">
                        {/* Each <span> is a child that gets staggered */}
                        <motion.span className="text" variants={textVariants}>
                            מעצב
                        </motion.span>
                        <motion.span className="text" variants={textVariants}>
                            חווית
                        </motion.span>
                        <motion.span className="text" variants={textVariants}>
                            משתמש
                        </motion.span>


                    </motion.h1>
                    {/* Animated Vectors */}


                    <motion.div
                        className="aviv-cartoon"
                        variants={imageVariants}
                    />

                    <motion.div
                        className="doggo"
                        variants={dogVariants}
                    />

                    {/* Arrow slides in and fades up */}
                    <motion.a className="arrow-vector" href="#summary" variants={textVariants} />
                </motion.div>
            </motion.div>

            <div className="bg-curve-vector" />
        </>
    );
};

export default Hero;
