import { CatalogItemProps } from "./Catalog.props"
import styles from './Catalog.module.scss'

export const CatalogItem = ({text, pict, width, height, ...props}: CatalogItemProps): JSX.Element => {
    return(
        <div {...props}>
            <button className={styles.wrapper} style={{background: `url(${pict})`, width: `${width}`, height: `${height}`}}>
                <div className={styles.tag}>{text}</div>
            </button>
        </div>
    )
}