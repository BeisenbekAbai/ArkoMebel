import { ButtonProps } from "./Button.props"
import cn from "classnames"
import styles from "./Button.module.scss"
import { FavouriteIcon, ShoppingCart, UserIcon } from "../../public/Icons"
import { useSelector } from "react-redux"


export const Button = ({text, text2, type, pict, article, ...props}: ButtonProps): JSX.Element => {
    //@ts-ignore
    const favItems = useSelector(state => state.LikedItems.items)
    switch(type){
        case 'login':
            return(
                <div {...props}>
                    <button className={styles.login} onClick={() => window.location.href = ''}>
                        <UserIcon className={styles.login__icon}/>
                        <span className={(styles.text, styles.login__text)}>Войти</span>
                    </button>
                </div>
            )
        case 'favourite':
            return(
                <div {...props}>
                    <button className={styles.favourite} onClick={() => window.location.href = ''}>
                        <div className={styles.favourite__countNicon}>
                            <FavouriteIcon classname={styles.favourite__icon}/>
                            <div className={cn(styles.favourite__countWrapper, {[styles.favourite__countWrapper_active]: (favItems? favItems.length : 1) - 1 != 0})}>
                                <span className={styles.favourite__count}>{(favItems? favItems.length : 1) - 1}</span>
                            </div>
                        </div>
                        <span className={(styles.text, styles.favourite__text)}>Избранное</span>
                    </button>
                </div>
            )
        case 'shopping-cart': 
            return(
                <div {...props}>
                    <button className={styles.shoppingCart} onClick={() => window.location.href = ''}>
                        <ShoppingCart className={styles.shoppingCart__icon}/>
                        <span className={styles.shoppingCart__text}>Корзина</span>
                    </button>
                </div>
            )
        case 'benefit':
            return(
                <div {...props}>
                    <div className={styles.benefit} onClick={() => window.location.href = ''}>
                        {pict}
                        <div className={styles.benefit__info}>
                            <p className={styles.benefit__article}>{article}</p>
                            <p className={styles.benefit__text}>{text}</p>
                            <p className={styles.benefit__text}>{text2}</p>
                        </div>
                    </div>
                </div>
            )
        case 'categoryBtn': 
            return(
                <div {...props}>
                    <button className={styles.category}>{text}</button>
                </div>
            )
        default:
            return(
                <div {...props}>
                    <button className={cn(
                        {[styles.primary]: type == 'primary'},
                        {[styles.red]: type == 'red'})}>
                        <span className={styles.text}>{text}</span>
                    </button>
                </div>
            )
    }
}