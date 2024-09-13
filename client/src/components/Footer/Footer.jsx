import styles from "./Footer.module.css"
import {Link} from "react-router-dom"
import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';


function Footer() {
  return (
    <div className={styles.container}>
        <div className={styles.body}>
            <div className={styles.buttons}>
                <div className={styles.buttonsWrap}><Link className={styles.button}>Sell your property</Link> <Link className={styles.button}>Let your property</Link></div>
                <div className={styles.buttonsWrap}><Link className={styles.button}>Buy a property</Link> <Link className={styles.button}>Rent a property</Link></div>
                <div className={styles.buttonsWrap}><Link className={styles.button}>About us</Link> <Link className={styles.button}>Contact us</Link></div>
            </div>
            <hr className={styles.horizontalRuler} />
            <div className={styles.contacts}>
                <div className={styles.socialMedia}><a href="https://github.com/AhmedAmgadElsharkawy" target="_blank" rel="noopener noreferrer"><GitHubIcon sx={{ fontSize: 20, color: 'white' }}/></a> <a href="https://www.linkedin.com/in/engineer-ahmed-amgad" target="_blank" rel="noopener noreferrer"><LinkedInIcon sx={{ fontSize: 20, color: 'white' }}/></a> <a href="https://github.com/AbdullahMahmoudHanafy" target="_blank" rel="noopener noreferrer"><GitHubIcon sx={{ fontSize: 20, color: 'white' }}/></a> <a href="https://linkedin.com/in/abdullah-mahmoud-hanafy-1a3116255" target="_blank" rel="noopener noreferrer"><LinkedInIcon sx={{ fontSize: 20, color: 'white' }}/></a></div>
                <div className={styles.copyright}>© 2024 All rights reserved.</div>
            </div>
        </div>
    </div>
  )
}

export default Footer