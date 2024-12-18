import styles from "./SignInAlert.module.css"
import AddIcon from '@mui/icons-material/Add';
import { useAuth } from "../../contexts/AuthContext";

function SignInAlert() {
  const auth = useAuth()
  return (
        <div className={styles.body}>
            <div className={styles.header}>Sign in to enjoy much more</div>
            <div className={styles.description}>Tired of endless tabs cluttering your browser while you search for your ideal property? We've got the solution for you! Say farewell to the tab chaos and hello to organization with our cutting-edge platform.</div>
            <button className={styles.signInButton} onClick={auth.openSignIn}><AddIcon/><span>Sign in</span></button>
        </div>
  )
}

export default SignInAlert