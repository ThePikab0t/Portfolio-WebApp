import SocialMedias from "../UI/SocialMedias";
import styles from "./IndexContact.module.css";
import { Button, Icon } from "semantic-ui-react";

const IndexContact: React.FC<{ id: string }> = (props) => {
  return (
    <>
      <div className={styles.mainIndexContact} id={props.id}>
        <div className={styles.heading}>Contact me</div>
        <div className={styles.text1}>I'd Love to hear from you!</div>
        <a href="https://www.instagram.com/thepikab0t/" target="_blank" rel="noopener noreferrer">
          <Button animated inverted color="red" size="big">
            <Button.Content visible>Get in Touch</Button.Content>
            <Button.Content hidden>
              <Icon name="instagram" />
            </Button.Content>
          </Button>
        </a>
        <div className={styles.text2}>
          or, Hire me on <span className={styles.upwork} onClick={() => window.open("https://upwork.com/freelancers/~01a862f6eec5fec4b4?mp_source=share", "_blank")}>Upwork</span>
        </div>
        <div className={styles.social}>
          <SocialMedias />
        </div>
      </div>
    </>
  );
};

export default IndexContact;
