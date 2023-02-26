import { ProductProps } from "./Product.props"
import styles from './Product.module.scss'
import { DiscountIcon, FavouriteActiveIcon, FavouriteNotActiveIcon } from "../../public/Icons"
import cn from 'classnames'
import { useEffect, useState } from "react"
import { useDispatch, useSelector } from "react-redux"



export const Product = ({images, productName, colors, cost, discount = 0, hit = false, productNumber, sizes, ...props}: ProductProps): JSX.Element => {
    const [isFocusing, setIsFocusing] = useState<boolean>(false)
    const [colorRow, setColorRow] = useState([])
    const [isLike, setIsLike] = useState<boolean>(false)
    const [notFirstTime, setNotFirstTime] = useState<number>(0)
    const [activeImage, setActiveImage] = useState<number>(0)
    const [imagesList, setImagesList] = useState([])
    const dispatch = useDispatch()
    let lastValueOfActiveImage = 0

    /* Функции */
    //@ts-ignore
    const doPrice = (num) => {
        let last_3_nums = ''
        if (num < 1000){
            return num
        } else if (num < 1000000){
            for(let i = `${num}`.length - 3; i < `${num}`.length; i++){
                last_3_nums = last_3_nums + `${num}`[i]
            }
            return `${Math.floor(num / 1000)} ${last_3_nums}`
        } else {
            return 'invalid'
        }
    }
    const generateColorRow = () => {
        //@ts-ignore
        let test = []
        colors.map(colorID => test.push(
            <div className={styles.colorsList__colorBlock} style={{backgroundColor: colorID}}/>
        ))
        //@ts-ignore
        setColorRow(test)
    }
    //@ts-ignore
    const followActiveImage = (logicalOperation) => {
        lastValueOfActiveImage = activeImage
        if(logicalOperation == '+'){
            setActiveImage(x => x = x + 1)
        } else if (logicalOperation  == '-'){
            setActiveImage(x => x = x - 1)
        }
    }
    const generateImagesList = () => {
        let test = []
        for(let i = 0; i < images.length; i++){
            test.push(
                <img src={`${images[i]}`} className={cn(styles.photo__image,
                    {[styles.photo__image_next]: activeImage > lastValueOfActiveImage},
                    {[styles.photo__image_prev]: activeImage < lastValueOfActiveImage})}/>
            )
        }
        //@ts-ignore
        setImagesList(test)
    }

    /* Если была нажата кнопка лайка */
    useEffect(() => {
        //@ts-ignore
        let likedItems = JSON.parse(localStorage.getItem('favItems'))
        if(isLike) {
            for(let i = 0; i < likedItems.length; i++) {
                if(likedItems[i].id == productNumber) {
                    likedItems.splice(i, 1)
                }
            }
            likedItems.unshift({id: productNumber, name: productName})
        } else if (!isLike && notFirstTime != 0) {
            for(let i = 0; i < likedItems.length; i++){
                if(likedItems[i].id == productNumber) {
                    likedItems.splice(i, 1)
                }
            }
        }
        localStorage.setItem('favItems', JSON.stringify(likedItems))
        dispatch({type: 'AddToLiked', payload: likedItems})
        setNotFirstTime(x => x = x + 1)
    },[isLike])

    /* Сделать первым делом при входе на сайт */
    useEffect(() => {
        generateColorRow()
        generateImagesList()
        localStorage.setItem('favItems', JSON.stringify([{id: '00', name: ''}]))
        //@ts-ignore
        let likedItems = JSON.parse(localStorage.getItem('favItems'))
        for(let i = 0; i < likedItems.length; i++) {
            if(likedItems[i].id == productNumber) {
                setIsLike(true)
            }
        }
    },[])

    /* Отслеживать какой продукт сейчас открыт */
    // @ts-ignore
    const openedProductID = useSelector(state => state.openedProduct.openedProductID)
    useEffect(() => {
        if(openedProductID == productNumber){
            setIsFocusing(true)
        } else {
            setIsFocusing(false)
        }
    },[openedProductID])

    /* Замкнуть прокрутку фотографии продукта */
    useEffect(() => {
        if(activeImage == images.length){
            setActiveImage(0)
        } else if (activeImage == -1) {
            setActiveImage(images.length - 1)
        }
    },[activeImage])
    
    return(
        <div {...props}>
            <label htmlFor={`ccc${productNumber}`}>
                <div className={cn(styles.wrapper, {[styles.wrapper__active]: isFocusing})}>

                    {/* Первая часть - Preview */}
                    <div className={styles.preview}>
                        <br/>
                        <div className={styles.prefixes}>
                            <div className={cn(styles.discount, {[styles.discount__default]: discount == 0})}>
                                <DiscountIcon/>
                                <span className={styles.discount__text}>-{discount}%</span>
                            </div>
                            <div className={cn(styles.isNotHit, {[styles.isHit]: hit})}>ХИТ</div>
                        </div>
                        <div className={styles.photo}>
                            <div className={styles.photo__images_wrapper} style={{left: `-${activeImage * 100}%`}}>
                                {imagesList}
                            </div>
                        </div>
                        <div className={cn(styles.photo__buttons, {[styles.photo__buttons_active]: isFocusing})}>
                            <button className={styles.photo__lbtn} onClick={() => followActiveImage('-')}>{'<'}</button>
                            <button className={styles.photo__rbtn} onClick={() => followActiveImage('+')}>{'>'}</button>
                        </div>
                        <div className={cn(styles.imagesNavigate__wrapper, {[styles.imagesNavigate__wrapper_active]: isFocusing})}>
                            <div className={styles.imagesNavigate}>
                                <button className={cn(styles.imagesNavigate__line, {[styles.imagesNavigate__line_active]: activeImage == 0})} onClick={() => setActiveImage(0)}/>
                                <button className={cn(styles.imagesNavigate__line, {[styles.imagesNavigate__line_active]: activeImage == 1})} onClick={() => setActiveImage(1)}/>
                                <button className={cn(styles.imagesNavigate__line, {[styles.imagesNavigate__line_active]: activeImage == 2})} onClick={() => setActiveImage(2)}/>
                            </div>
                        </div>
                        <div className={styles.productName}>{productName}</div>
                        <div className={cn(styles.colorsList, {[styles.colorsList__active]: !isFocusing})}>
                            {colorRow}
                        </div>
                    </div>
                    
                    {/* Вторая часть - Price */}
                    <div className={styles.price}>
                        <span className={cn(styles.price__default_firstLine, {[styles.price__firstLine]: discount != 0})}>{doPrice(cost)} руб.</span>
                        <span className={styles.price__secondLine}>{doPrice(Math.floor(cost - (cost / 100 * discount)))} руб.</span>
                    </div>
                    
                    {/* Третяя часть - Buy and Favourites */}
                    <div className={styles.buyFav}>
                        <button className={styles.buyFav__buy}>КУПИТЬ</button>
                        <button className={styles.buyFav__fav} onClick={() => setIsLike(x => x = !x)}>
                            <FavouriteNotActiveIcon/>
                            <div className={styles.buyFav__favActive_wrapper}>
                                <FavouriteActiveIcon className={cn(styles.buyFav__favActive, {[styles.buyFav__favActive_active]: isLike})}/>
                            </div>
                        </button>
                    </div>
                    
                    {/* Четвертая часть - Sizes */}
                    <div className={cn(styles.sizes, {[styles.sizes__active]: isFocusing})}>
                        <span>Размеры:</span>
                        <div className={styles.sizes__properties}>
                            <div>
                                <span>Ширина</span><br/>
                                <span>{sizes.width}</span>
                            </div>
                            <div>
                                <span>Высота</span><br/>
                                <span>{sizes.height}</span>
                            </div>
                            <div>
                                <span>Глубина</span><br/>
                                <span>{sizes.depth}</span>
                            </div>
                        </div>
                    </div>
                </div>
            </label>
            <input type="radio" className={styles.checkbox} id={`ccc${productNumber}`} name='activeProduct' value={productNumber}
                onChange={(e) => dispatch({type: 'OpenIt', payload: productNumber})}/>
        </div>
    )
}