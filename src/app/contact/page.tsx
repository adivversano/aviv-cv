
import ContactForm from '@/components/ContactForm';
import styles from './page.module.scss';
import Image from 'next/image';
import { SocialButtons } from '@/components/SocialButtons';

export async function generateMetadata() {
    return {
        title: `${process.env.NEXT_PUBLIC_BASE_TITLE} | צור קשר`,
    };
}

async function ContactPage() {

    return (
        <div className={styles['contact-container'] + ' inner-container'}>
            <div className={styles['contact-content']}>
                <h2 className={styles['sub-title']}>חושבים על עיצוב?</h2>
                <h1 className={styles.title}>בואו נדבר</h1>
                <SocialButtons className={styles['social-container']}/>
                <ContactForm />
            </div>

            <div className={styles['bg-img-container']}>

                <Image className={styles['bg-img']} src="/aviv-cv/assets/aviv-contact.png" fill alt="a" />
            </div>
        </div>
    )
}

export default ContactPage