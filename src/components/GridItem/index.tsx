import styles from "./GridItem.module.scss";
import { LevelProps } from "../../helpers/imc";

type Props = {
    item: LevelProps
}

export function GridItem({ item }: Props) {
    return(
        <div>{item.title}</div>
    )
}