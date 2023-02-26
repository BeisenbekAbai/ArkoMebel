import { AreabtnProps } from "./Areabtn.props"
import styles from './Areabtn.module.scss'
import { useEffect, useState } from "react"
import { ArrowIcon, CloseIcon, GeoIcon, SearchIcon } from "../../public/Icons"
import cn from "classnames"


export const Areabtn = ({children, areaList, ...props}: AreabtnProps): JSX.Element => {
    const [active, setActive] = useState<boolean>(false)
    const [choosed, setChoosed] = useState<string>()
    const [inputWord, setInputWord] = useState<string>('')
    const [searchList, setSearchList] = useState([])
    const [resultList, setResultList] =  useState([])
    
    const saveChoosedCity = (cityName: string | undefined) => {
        //@ts-ignore
        localStorage.setItem( 'CityName', cityName)
        setChoosed(x => x = cityName)
        setActive(false)
    }
    useEffect(() => {
        const name = localStorage.getItem('CityName')
        //@ts-ignore
        setChoosed(name)
    }, [])
    

    //@ts-ignore
    const searchFunc = (target) => {
        target = target.toUpperCase()
        let x = []
        for(let i = 0; i < areaList.length; i++ ){
            if(areaList[i].id.indexOf(target) > -1){
                x.push(areaList[i].name)
            }
        }
        //@ts-ignore
        setSearchList(x)
    }
    //@ts-ignore
    const generateResult = (sl) => {
        let result = []
        for(let i = 0; i < sl.length; i++){
            result.push(<button className={cn(styles.cities__city, {[styles.choosedCity]: choosed == sl[i]})} onClick={() => saveChoosedCity(sl[i])}>{sl[i]}</button>)
        }
        //@ts-ignore
        setResultList(result)
    }
    useEffect(() => {
        searchFunc(inputWord)
    }, [inputWord])
    useEffect(() => {
        generateResult(searchList)
    }, [searchList])



    return(
        <div className={styles.wrapper}>
            <button className={styles.btn} onClick={() => {setActive(x => !x)}}>
                <GeoIcon/>
                <div className={styles.text}>
                    <span>{choosed}</span>
                    <ArrowIcon className={cn(styles.arrow, {[styles.up]: active}, {[styles.down]: !active})}/>
                </div>
            </button>
            <div className={cn(styles.default ,{[styles.appearing]: active}, {[styles.leaving]: !active})}>
                <div className={cn({[styles.lighting]: !active})}>
                    <button className={cn(styles.cities__wrapper, {[styles.shading]: active})} onClick={() => setActive(false)}/><div className={cn(styles.cities__wrapper2)}>
                        <div className={cn(styles.defaultFade ,{[styles.fadeIn]: active}, {[styles.fadeOut]: !active})}>
                            <div className={styles.cities}>
                                <div className={styles.cities__textNclose}>
                                    <span className={styles.cities__text}>Выбирите город</span>
                                    <button className={styles.closebtn} onClick={() => setActive(x => !x)}>
                                        <CloseIcon/>
                                    </button>
                                </div>
                                <div className={styles.cities__search}>
                                    <button type="submit" className={styles.cities__submit}><SearchIcon className={styles.searchIcon}/></button>
                                    <input type="text" className={styles.cities__input} placeholder="Название города" onChange={(e) => setInputWord((x) => x = e.target.value)} required/>
                                </div>
                                <div className={styles.cities__list}>
                                    {resultList}
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}