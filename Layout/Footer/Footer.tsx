import { FooterProps } from "./Footer.props"
import styles from './Footer.module.scss'



export const Footer = ( {...props }: FooterProps ):JSX.Element => {
    return(
        <div {...props}>
            <div className={styles.wrapper}>
                <div className={styles.leftSide}>
                    <img src="./images/Logotype2.svg"/>
                    <div>
                        <button className={styles.number}>8-961-525-91-91</button>
                    </div>
                    <div className={styles.properties}>
                        <div className={styles.properties__row}>
                            <span className={styles.properties__option}>Время работы:</span>
                            <span className={styles.properties__value}>с 10:00 до 19:00</span>
                        </div>
                        <div className={styles.properties__row}>
                            <span className={styles.properties__option}>Адрес:</span>
                            <span className={styles.properties__value}>Краснодар, ул. Московская 144 корп. - 1</span>
                        </div>
                        <div className={styles.properties__row}>
                            <span className={styles.properties__option}>Почта:</span>
                            <span className={styles.properties__value}>abaibeisenbek2007@gm<br/>ail.com</span>
                        </div>
                    </div>
                    <div className={styles.instagram}>
                        <div>
                            <button className={styles.article}>Мы в Инстаграме</button>
                        </div>
                        <button className={styles.instagram__button}><img src="./images/Instagram.svg"/></button>
                    </div>
                </div>
                <div className={styles.other}>
                    <div className={styles.other__column}>
                        <div className={styles.article}>Кухни</div>
                        <button className={styles.link}>Модульные кухни</button><br/>
                        <button className={styles.link}>Модульные кухни</button><br/>
                        <button className={styles.link}>Готовые комплекты</button><br/>
                        <button className={styles.link}>Угловые кухни</button><br/>
                        <button className={styles.link}>Кухонные уголки</button><br/>
                        <button className={styles.link}>Столы кухонные</button><br/>
                        <button className={styles.link}>Стулья для кухни</button><br/>
                        <button className={styles.link}>Комплектующие</button>
                    </div>
                    <div className={styles.other__column}>
                        <div className={styles.article}>Гостинные</div>
                        <button className={styles.link}>Модульные</button><br/>
                        <button className={styles.link}>Журнальные столы</button><br/>
                        <button className={styles.link}>Полки</button><br/>
                        <button className={styles.link}>Тумбы под ТВ</button><br/>
                        <button className={styles.link}>Шкафы</button><br/>
                        <button className={styles.link}>Стеллажи</button>
                    </div>
                    <div className={styles.other__column}>
                        <div className={styles.article}>Спальни</div>
                        <button className={styles.link}>Кровати</button><br/>
                        <button className={styles.link}>Матрацы</button><br/>
                        <button className={styles.link}>Шкафы</button><br/>
                        <button className={styles.link}>Комоды</button><br/>
                        <button className={styles.link}>Столы туалетные</button><br/>
                        <button className={styles.link}>Тумбы прикроватные</button><br/>
                        <button className={styles.link}>Зеркала</button>
                    </div>
                    <div className={styles.other__column}>
                        <div className={styles.article}>Диваны</div>
                        <button className={styles.link}>Прямые</button><br/>
                        <button className={styles.link}>Угловые</button><br/>
                        <button className={styles.link}>На металлокаркасе</button><br/>
                        <button className={styles.link}>Кресла</button><br/>
                    </div>
                    <div className={styles.other__column}>
                        <div className={styles.article}>Детские</div>
                        <button className={styles.link}>Кровати</button><br/>
                        <button className={styles.link}>Полки</button><br/>
                        <button className={styles.link}>Столы</button><br/>
                        <button className={styles.link}>Тумбы</button><br/>
                        <button className={styles.link}>Шкафы</button><br/>
                        <button className={styles.link}>Комоды</button><br/>
                    </div>
                    <div className={styles.other__column}>
                        <div className={styles.article}>Прихожие</div>
                        <button className={styles.link}>Модульные</button><br/>
                        <button className={styles.link}>Обувницы</button>
                    </div>
                </div>
            </div>
            <div className={styles.trademark}>© Abay's Company Production Entertainment</div>
        </div>
    )
}