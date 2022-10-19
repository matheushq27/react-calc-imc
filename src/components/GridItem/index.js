import styles from "./GridItem.module.css"
import upImage from "../../assets/up.png"
import downImage from "../../assets/down.png"

const GridItem = (item) => {
    return(
        <div className={styles.main} style={{backgroundColor: item.bg}}>
            <div className={styles.gridIcon}>
                {item.icon === 'up' && <img src={upImage} alt="" width="30" />}
                {item.icon === 'down' && <img src={downImage} alt="" width="30" />}
            </div>
            <div className={styles.gridTitle}>{item.title}</div>

            {item.yourImc && <div className={styles.yourImc}>Seu IMC é de {item.yourImc} kg/m</div>}

            <div className={styles.gridInfo}>
                <>IMC está entre <strong>{item.imc[0]}</strong> e <strong>{item.imc[1]}</strong></>
            </div>
        </div>
    )
}
export default GridItem