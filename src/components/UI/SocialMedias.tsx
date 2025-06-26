import styles from './SocialMedias.module.css';
const SocialMedias = () => {
    return <>
                <div className={styles.socialMedia}>
                    <a href="https://github.com/ThePikab0t/" target="_blank" rel="noopener noreferrer"><div className={styles.github}/></a>
                    <a href="https://www.linkedin.com/in/thepikab0t/" target="_blank" rel="noopener noreferrer"><div className={styles.linkedIn}/></a>
                    <a href="https://x.com/ThePikab0t" target="_blank" rel="noopener noreferrer"><div className={styles.twitter}/></a>
                </div></>
}

export default SocialMedias