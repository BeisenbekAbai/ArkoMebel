import { useEffect } from "react"
import { useDispatch } from "react-redux"
import { Footer } from "./Footer/Footer"
import { Header } from "./Header/Header"
import styles from "./Layout.module.scss"
import { LayoutProps } from "./Layout.props"
import { MainCont } from "./MainCont/MainCont"


export const Layout = ({datas}: LayoutProps):JSX.Element => {
    const dispatch = useDispatch()
    dispatch({type: 'Add_CateData', payload: datas.categories})
    return(
        <div className={styles.wrapper}>
            <div className={styles.width}>
                <Header className={styles.header}/>
                <div className={styles.header__row3}></div>
                <MainCont className={styles.maincont}/>
                <Footer className={styles.footer}/>
            </div>
        </div>
    )
}