import { SearchIcon2 } from "../../public/Icons"
import styles from "./Search.module.scss"
import { useDispatch, useSelector } from "react-redux"
import { useEffect, useState } from "react"




export const Search = (): JSX.Element => {
    const [inputWord, setInputWord] = useState<string>('')
    const dispatch = useDispatch()
    return(
        <div className={styles.wrapper}>
            <label>
                <input className={styles.input} onChange={(e) => setInputWord((x) => x = e.target.value)} placeholder="Поиск"/>
                <button className={styles.icon} onClick={() => dispatch({type: 'FindIt', payload: inputWord})}>
                    <SearchIcon2/>
                </button>
            </label>
        </div>
    )
}