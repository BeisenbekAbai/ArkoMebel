import { GeoIcon, LogoIcon, PhoneIcon } from "../../public/Icons"
import { HeaderProps } from "./Header.props"
import styles from "./Header.module.scss"
import { Areabtn } from "../../Components/Areabtn/Areabtn"
import cn from "classnames"
import { Search } from "../../Components/Search/Search"
import { Button } from "../../Components/Button/Button"
import { Category } from "../../Components/Category/Category"
import { useDispatch, useSelector } from "react-redux"
import { useEffect } from "react"




export const Header = ( {...props }: HeaderProps): JSX.Element => {
    let arr2 = [
        {name: 'Астана', id: 'АСТАНА'},
        {name: 'Алматы', id: 'АЛМАТЫ'},
        {name: 'Шымкент', id: 'ШЫМКЕНТ'},
        {name: 'Актау', id: 'АКТАУ'},
        {name: 'Тараз', id: 'ТАРАЗ'},
        {name: 'Актобе', id: 'АКТОБЕ'},
        {name: 'Караганда', id: 'КАРАГАНДА'},
        {name: 'Павлодар', id: 'ПАВЛОДАР'},
        {name: 'Семей', id: 'СЕМЕЙ'},
        {name: 'Атырау', id: 'АТЫРАУ'},
        {name: 'Костанай', id: 'КОСТАНАЙ'},
        {name: 'Кызылорда', id: 'КЫЗЫЛОРДА'},
    ]
    //@ts-ignore
    function SortArray(x, y){
        if (x.name < y.name) {return -1;}
        if (x.name > y.name) {return 1;}
        return 0;
    }
    var arr = arr2.sort(SortArray);
    
    const dispatch = useDispatch()
    //@ts-ignore
    const categoryActive = useSelector(state => state.CategoryActive.active)
    
    useEffect(() => {
        console.log(categoryActive)
    },[])
    return(
        <div {...props}>
            <div className={styles.wrapper}>
                <div className={styles.navpanel}>
                    <div className={styles.navpanel__part1}>
                        <Areabtn areaList={arr}/>
                        <div className={styles.links}>
                            <a className={styles.link} href="">
                                Акции
                            </a>
                            <a className={styles.link} href="">
                                Сборка
                            </a>
                            <a className={styles.link} href="">
                                Оплата
                            </a>
                            <a className={styles.link} href="">
                                Доставка
                            </a>
                        </div>
                    </div>
                    <div className={styles.navpanel__part2}>
                        <a href="" className={styles.link}>Наши работы</a>
                        <a href="" className={styles.link}>Контакты</a>
                    </div>
                </div>
                <div className={styles.row2}>
                    <div className={styles.row2__logotype}>
                        <LogoIcon/>
                    </div>
                    <div className={styles.row2__adress}>
                        <a href="">
                            <span className={styles.link}>ул. Московская, 144 корп. - 1</span><br/>
                            <span className={cn(styles.link, styles.red)}>Схема проезда</span>
                        </a>
                    </div>
                    <div className={styles.row2__search}>
                        <Search/>
                    </div>
                    <div className={styles.row2__wrapper_number}>
                        <div className={styles.row2__number}>
                            <PhoneIcon className={styles.phoneIcon}/>
                            <div className={styles.row2__numberNspan}>
                                <span className={styles.number}>8 (961) 525 91 91</span>
                                <Button text="Заказать звонок" type="red"/>
                            </div>
                        </div>
                    </div>
                    <div className={styles.row2__etc}>
                        <Button type='login' className={styles.row2__1btn}/>
                        <Button type='favourite' className={styles.row2__2btn}/>
                        <Button type='shopping-cart' className={styles.row2__3btn}/>
                    </div>
                </div>
            </div>
            <div className={styles.wrapper2}>
                <Category/>
            </div>
            {!categoryActive && (<button className={styles.backgroundBlock} onClick={() => dispatch({type: "changeCategoryActive", payload: true})}/>)}
        </div>
    )
}