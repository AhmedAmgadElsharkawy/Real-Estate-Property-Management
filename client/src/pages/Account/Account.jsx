import styles from './Account.module.css';
import Dashboard from '../../components/Dashboard/Dashboard';

function Account() {
    return (
        <div className={styles.mainDiv}>
            <Dashboard/>
        </div>
    )
}

export default Account