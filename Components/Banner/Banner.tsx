import { useEffect, useRef, useState } from "react"
import styles from "./Banner.module.scss"
import { BannerProps } from "./Banner.props"
import cn from "classnames"


export const Banner = ({ bannersList, ...props }: BannerProps): JSX.Element => {
    const [resultList, setResultList] = useState([])
    const [counter, setCounter] = useState<number>(0)
    const Timer = () => {
        setInterval(() => {
            setCounter(x => x = x + 1)
        }, 8000)
    }
    useEffect(() => {
        if(counter == bannersList.length){
            setCounter(0)
        }
    },[counter])
    useEffect(() => {
        Timer()
        let test = []
        for(let i = 0; i < bannersList.length; i++){
            test.push(
                <div className={styles.banner} style={{backgroundColor: `${bannersList[i]}`, width: `${100 / bannersList.length}%`}}/>
            )
        }
        //@ts-ignore
        setResultList(test)
    },[])

    return (
        <div {...props}>
            <div className={styles.wrapper}>
                <div className={cn(styles.banners)} style={{width: `${bannersList.length * 100}%`, left: `-${100 * counter}%`}}>
                    {resultList}
                </div>
            </div>
        </div>
    )
}