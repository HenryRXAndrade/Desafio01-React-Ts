import styles from "./Header.module.css";
import 'primeicons/primeicons.css';

export function Header(){
    return(
        <header className={styles.header}>
            <div className={styles.headerWrapper}>
                <i className="pi pi-book"/>
                <div className={styles.to}>To</div>
                <div className={styles.do}>do</div>
            </div>
        </header>
    )
}
