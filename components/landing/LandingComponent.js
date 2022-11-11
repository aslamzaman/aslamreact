
import styles from "../../styles/Landing.module.css";


const LandingComponent = () => {
    return (
        <div className={styles.mainComponent}>

            <div className={styles.content}>
                <div className={styles.header}>
                    <h1>Aslam Zaman</h1>
                    <hr />
                </div>  
                 
                <div className={styles.body1}>
                    <h2>
                        I read, learn and try<br />
                        You can also try
                    </h2>
                </div>
            </div>

        </div>
    )
}
export default LandingComponent;




