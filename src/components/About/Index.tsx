import styles from './Index.module.css'
import image from '../../assets/IMG_2915-EDIT.jpg';
import SocialMedias from '../UI/SocialMedias';
import ExtraProfile from './ExtraProfiles';
import CustomSkills from './CustomSkills';
const AboutInfo:React.FC<any> = (props) => {

    return <>
    <div className={styles.mainAboutInfo} >
    <div className={styles.myImage}><img src={image} alt="img_shehryaar"></img></div>
        <div  id={props.animateDescription} className={styles.aboutMe}>
            <div className={styles.leftAboutMe}></div>
            <div  className={styles.rightAboutMe}>
                <div className={styles.title}><span className={styles.color}>abo</span>ut(<span className={styles.shehryaar}> aizaz </span>)</div>
                <SocialMedias />
                <div className={styles.info}>
                    <div>I am an ambitious Cyber Security Professional and Web Application Developer,</div>
                    <div>a driven individual with the ability to adapt to different situations</div>
                    <div>and the potential to work hard with continuous growth.</div>
                </div>
                <CustomSkills />
                
            </div>
        </div>
    </div>

    </>
}

export default AboutInfo