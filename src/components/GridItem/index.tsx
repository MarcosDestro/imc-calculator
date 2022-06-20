import styles from "./GridItem.module.scss";
import { LevelProps } from "../../helpers/imc";
import upImg from '../../assets/up.png';
import downImg from '../../assets/down.png';

type Props = {
    item: LevelProps
}

export function GridItem({ item }: Props) {
    return(
        <div className={styles.main} style={{backgroundColor: item.color}}>
            <div className={styles.gridIcon}>
                <img src={ item.icon === 'up' ? upImg : downImg } />
            </div>
            <div className={styles.gridTitle}>{ item.title }</div>
            {item.yourImc &&
                <div className={styles.yourImc}>Seu IMC é de { item.yourImc.toFixed(2) } Kg/m2</div>
            }

            <div className={styles.gridInfo}>
                IMC está entre <br /> <strong>{ item.imc[0] }</strong> e <strong>{ item.imc[1] }</strong>
            </div>
        </div>
    )
}