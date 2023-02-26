import styles from './Category.module.scss'
import cn from 'classnames'
import { useDispatch, useSelector } from 'react-redux'
import { useEffect, useState } from 'react'

export const Category = () => {
    const [activeName, setActiveName] = useState<number>(6)
    const dispatch = useDispatch()
    // @ts-ignore
    const activeListItem = useSelector(state => state.savedCategory.word)
    // @ts-ignore
    const data = [
        {
            "name": "КУХНИ",
            "items": [
                "Модульные кухни",
                "Готовые комплекты",
                "Маленькие кухни",
                "Угловые кухни",
                "Кухонные уголки",
                "Столы кухонные",
                "Стулья для кухни",
                "Комплектующие"
            ]
        },
        {
            "name": "ГОСТИННЫЕ",
            "items": [
                "Модульные",
                "Журнальные столы",
                "Полки",
                "Тумбы под ТВ",
                "Шкафы",
                "Стеллажи"
            ]
        },
        {
            "name": "СПАЛЬНИ",
            "items": [
                "Кровати",
                "Матрацы",
                "Шкафы",
                "Комоды",
                "Столы туалетные",
                "Тумбы прикроватные",
                "Зеркала"
            ]
        },
        {
            "name": "ДИВАНЫ",
            "items": [
                "Прямые",
                "Угловые",
                "На металлокаркасе",
                "Кресла"
            ]
        },
        {
            "name": "ДЕТСКИЕ",
            "items": [
                "Кровати",
                "Полки",
                "Столы",
                "Тумбы",
                "Шкафы",
                "Комоды"
            ]
        },
        {
            "name": "ПРИХОЖИЕ",
            "items": [
                "Модульные",
                "Обувницы"
            ]
        },
        {
            "name": "ШКАФЫ-КУПЕ",
            "items": [
                "Кровати",
                "Матрацы",
                "Шкафы",
                "Комоды",
                "Столы туалетные",
                "Тумбы прикроватные",
                "Зеркала"
            ]
        }
    ]
    // @ts-ignore
    const categoryActive = useSelector(state => state.CategoryActive.active)
    const [matches, setMatches] = useState(false)
    
    useEffect(() => {
        setMatches(window.matchMedia("(max-width: 1560px)").matches)
        window.matchMedia("(max-width: 1560px)").addEventListener('change', e => setMatches( e.matches ))
    },[])

    //@ts-ignore
    const stylesFunc = (id, len) => {
        if(activeName == id){
            return {height: `${47 * len}px`}
        }
    }
    return(
        <div>
            <div className={styles.wrapper}>
                <div className={styles.name__wrapper}>
                    <button className={cn(styles.name, {[styles.activeName]: activeName == 0})} onClick={() => setActiveName(0)}>{data[0].name}</button>
                    <div className={cn(styles.dropDownList, {[styles.dropDownList__active]: activeName == 0})} style={stylesFunc(0, data[0].items.length)}>
                        <div className={cn(styles.listItem, {[styles.listItem__active]: activeListItem == '00'})} onClick={() => dispatch({type: 'SaveOption', payload: '00'})}>{data[0].items[0]}</div>
                        <div className={cn(styles.listItem, {[styles.listItem__active]: activeListItem == '01'})} onClick={() => dispatch({type: 'SaveOption', payload: '01'})}>{data[0].items[1]}</div>
                        <div className={cn(styles.listItem, {[styles.listItem__active]: activeListItem == '02'})} onClick={() => dispatch({type: 'SaveOption', payload: '02'})}>{data[0].items[2]}</div>
                        <div className={cn(styles.listItem, {[styles.listItem__active]: activeListItem == '03'})} onClick={() => dispatch({type: 'SaveOption', payload: '03'})}>{data[0].items[3]}</div>
                        <div className={cn(styles.listItem, {[styles.listItem__active]: activeListItem == '04'})} onClick={() => dispatch({type: 'SaveOption', payload: '04'})}>{data[0].items[4]}</div>
                        <div className={cn(styles.listItem, {[styles.listItem__active]: activeListItem == '05'})} onClick={() => dispatch({type: 'SaveOption', payload: '05'})}>{data[0].items[5]}</div>
                        <div className={cn(styles.listItem, {[styles.listItem__active]: activeListItem == '06'})} onClick={() => dispatch({type: 'SaveOption', payload: '06'})}>{data[0].items[6]}</div>
                        <div className={cn(styles.listItem, {[styles.listItem__active]: activeListItem == '07'})} onClick={() => dispatch({type: 'SaveOption', payload: '07'})}>{data[0].items[7]}</div>
                    </div>
                </div>
                <div className={styles.name__wrapper}>
                    <button className={cn(styles.name, {[styles.activeName]: activeName == 1})} onClick={() => setActiveName(1)}>{data[1].name}</button>
                    <div className={cn(styles.dropDownList, {[styles.dropDownList__active]: activeName == 1})} style={stylesFunc(1, data[1].items.length)}>
                        <div className={cn(styles.listItem, {[styles.listItem__active]: activeListItem == '10'})} onClick={() => dispatch({type: 'SaveOption', payload: '10'})}>{data[1].items[0]}</div>
                        <div className={cn(styles.listItem, {[styles.listItem__active]: activeListItem == '11'})} onClick={() => dispatch({type: 'SaveOption', payload: '11'})}>{data[1].items[1]}</div>
                        <div className={cn(styles.listItem, {[styles.listItem__active]: activeListItem == '12'})} onClick={() => dispatch({type: 'SaveOption', payload: '12'})}>{data[1].items[2]}</div>
                        <div className={cn(styles.listItem, {[styles.listItem__active]: activeListItem == '13'})} onClick={() => dispatch({type: 'SaveOption', payload: '13'})}>{data[1].items[3]}</div>
                        <div className={cn(styles.listItem, {[styles.listItem__active]: activeListItem == '14'})} onClick={() => dispatch({type: 'SaveOption', payload: '14'})}>{data[1].items[4]}</div>
                        <div className={cn(styles.listItem, {[styles.listItem__active]: activeListItem == '15'})} onClick={() => dispatch({type: 'SaveOption', payload: '15'})}>{data[1].items[5]}</div>
                    </div>
                </div>
                <div className={styles.name__wrapper}>
                    <button className={cn(styles.name, {[styles.activeName]: activeName == 2})} onClick={() => setActiveName(2)}>{data[2].name}</button>
                    <div className={cn(styles.dropDownList, {[styles.dropDownList__active]: activeName == 2})} style={stylesFunc(2, data[2].items.length)}>
                        <div className={cn(styles.listItem, {[styles.listItem__active]: activeListItem == '20'})} onClick={() => dispatch({type: 'SaveOption', payload: '20'})}>{data[2].items[0]}</div>
                        <div className={cn(styles.listItem, {[styles.listItem__active]: activeListItem == '21'})} onClick={() => dispatch({type: 'SaveOption', payload: '21'})}>{data[2].items[1]}</div>
                        <div className={cn(styles.listItem, {[styles.listItem__active]: activeListItem == '22'})} onClick={() => dispatch({type: 'SaveOption', payload: '22'})}>{data[2].items[2]}</div>
                        <div className={cn(styles.listItem, {[styles.listItem__active]: activeListItem == '23'})} onClick={() => dispatch({type: 'SaveOption', payload: '23'})}>{data[2].items[3]}</div>
                        <div className={cn(styles.listItem, {[styles.listItem__active]: activeListItem == '24'})} onClick={() => dispatch({type: 'SaveOption', payload: '24'})}>{data[2].items[4]}</div>
                        <div className={cn(styles.listItem, {[styles.listItem__active]: activeListItem == '25'})} onClick={() => dispatch({type: 'SaveOption', payload: '25'})}>{data[2].items[5]}</div>
                        <div className={cn(styles.listItem, {[styles.listItem__active]: activeListItem == '26'})} onClick={() => dispatch({type: 'SaveOption', payload: '26'})}>{data[2].items[6]}</div>
                    </div>
                </div>
                <div className={styles.name__wrapper}>
                    <button className={cn(styles.name, {[styles.activeName]: activeName == 3})} onClick={() => setActiveName(3)}>{data[3].name}</button>
                    <div className={cn(styles.dropDownList, {[styles.dropDownList__active]: activeName == 3})} style={stylesFunc(3, data[3].items.length)}>
                        <div className={cn(styles.listItem, {[styles.listItem__active]: activeListItem == '30'})} onClick={() => dispatch({type: 'SaveOption', payload: '30'})}>{data[3].items[0]}</div>
                        <div className={cn(styles.listItem, {[styles.listItem__active]: activeListItem == '31'})} onClick={() => dispatch({type: 'SaveOption', payload: '31'})}>{data[3].items[1]}</div>
                        <div className={cn(styles.listItem, {[styles.listItem__active]: activeListItem == '32'})} onClick={() => dispatch({type: 'SaveOption', payload: '32'})}>{data[3].items[2]}</div>
                        <div className={cn(styles.listItem, {[styles.listItem__active]: activeListItem == '33'})} onClick={() => dispatch({type: 'SaveOption', payload: '33'})}>{data[3].items[3]}</div>
                    </div>
                </div>
                <div className={styles.name__wrapper}>
                    <button className={cn(styles.name, {[styles.activeName]: activeName == 4})} onClick={() => setActiveName(4)}>{data[4].name}</button>
                    <div className={cn(styles.dropDownList, {[styles.dropDownList__active]: activeName == 4})} style={stylesFunc(4, data[4].items.length)}>
                        <div className={cn(styles.listItem, {[styles.listItem__active]: activeListItem == '40'})} onClick={() => dispatch({type: 'SaveOption', payload: '40'})}>{data[4].items[0]}</div>
                        <div className={cn(styles.listItem, {[styles.listItem__active]: activeListItem == '41'})} onClick={() => dispatch({type: 'SaveOption', payload: '41'})}>{data[4].items[1]}</div>
                        <div className={cn(styles.listItem, {[styles.listItem__active]: activeListItem == '42'})} onClick={() => dispatch({type: 'SaveOption', payload: '42'})}>{data[4].items[2]}</div>
                        <div className={cn(styles.listItem, {[styles.listItem__active]: activeListItem == '43'})} onClick={() => dispatch({type: 'SaveOption', payload: '43'})}>{data[4].items[3]}</div>
                        <div className={cn(styles.listItem, {[styles.listItem__active]: activeListItem == '44'})} onClick={() => dispatch({type: 'SaveOption', payload: '44'})}>{data[4].items[4]}</div>
                        <div className={cn(styles.listItem, {[styles.listItem__active]: activeListItem == '45'})} onClick={() => dispatch({type: 'SaveOption', payload: '45'})}>{data[4].items[5]}</div>
                    </div>
                </div>
                <div className={styles.name__wrapper}>
                    <button className={cn(styles.name, {[styles.activeName]: activeName == 5})} onClick={() => setActiveName(5)}>{data[5].name}</button>
                    <div className={cn(styles.dropDownList, {[styles.dropDownList__active]: activeName == 5})} style={stylesFunc(5, data[5].items.length)}>
                        <div className={cn(styles.listItem, {[styles.listItem__active]: activeListItem == '50'})} onClick={() => dispatch({type: 'SaveOption', payload: '50'})}>{data[5].items[0]}</div>
                        <div className={cn(styles.listItem, {[styles.listItem__active]: activeListItem == '51'})} onClick={() => dispatch({type: 'SaveOption', payload: '51'})}>{data[5].items[1]}</div>
                    </div>
                </div>
                <div className={styles.name__wrapper}>
                    <button className={cn(styles.name, {[styles.activeName]: activeName == 6})} onClick={() => setActiveName(6)}>{data[6].name}</button>
                    <div className={cn(styles.dropDownList, {[styles.dropDownList__active]: activeName == 6})}>
                        <button className={cn(styles.listItem, {[styles.listItem__active]: activeListItem == '60'})} onClick={() => dispatch({type: 'SaveOption', payload: '60'})}>{data[0].items[0]}</button>
                        <button className={cn(styles.listItem, {[styles.listItem__active]: activeListItem == '61'})} onClick={() => dispatch({type: 'SaveOption', payload: '61'})}>{data[0].items[1]}</button>
                        <button className={cn(styles.listItem, {[styles.listItem__active]: activeListItem == '62'})} onClick={() => dispatch({type: 'SaveOption', payload: '62'})}>{data[0].items[2]}</button>
                        <button className={cn(styles.listItem, {[styles.listItem__active]: activeListItem == '63'})} onClick={() => dispatch({type: 'SaveOption', payload: '63'})}>{data[0].items[3]}</button>
                        <button className={cn(styles.listItem, {[styles.listItem__active]: activeListItem == '64'})} onClick={() => dispatch({type: 'SaveOption', payload: '64'})}>{data[0].items[4]}</button>
                        <button className={cn(styles.listItem, {[styles.listItem__active]: activeListItem == '65'})} onClick={() => dispatch({type: 'SaveOption', payload: '65'})}>{data[0].items[5]}</button>
                        <button className={cn(styles.listItem, {[styles.listItem__active]: activeListItem == '66'})} onClick={() => dispatch({type: 'SaveOption', payload: '66'})}>{data[0].items[6]}</button>
                        <button className={cn(styles.listItem, {[styles.listItem__active]: activeListItem == '67'})} onClick={() => dispatch({type: 'SaveOption', payload: '67'})}>{data[0].items[7]}</button>
                    </div>
                </div>
                {!matches && (<div className={styles.blueSquare} style={{left: `${221.5 * activeName}px`}}/>)}
                {matches && (<div className={styles.blueSquare} style={{left: `${200 * activeName}px`}}/>)}
            </div>
        </div>
    )
}