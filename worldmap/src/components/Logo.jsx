import styles from "./Logo.module.css"

function Logo() {
    return (
        <img src="/logo.png" alt="worldmap logo" className={styles.logo} />
    )
}

export default Logo
