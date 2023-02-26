import { MainContProps } from "./MainCont.props"
import styles from './MainCont.module.scss'
import { Banner } from "../../Components/Banner/Banner"
import { Button } from "../../Components/Button/Button"
import { Arrow2Icon, CheapIcon, GeoIcon2, TruckIcon, WarrantyIcon } from "../../public/Icons"
import { CatalogItem } from "../../Components/CatalogItem/CatalogItem"
import { Product } from "../../Components/Product/Product"
import cn from 'classnames'
import { useEffect, useState } from "react"




export const MainCont = ( { ...props }: MainContProps ): JSX.Element => {
    const [addItemsActive, setAddItemsActive] = useState<boolean>(false)
    const [stocks__Counter, stocks__setCounter] = useState<number>(0)
    const [stocks__LbtnActive, stocks__setLBtnActive] = useState<boolean>(false)
    const [stocks__RbtnActive, stocks__setRBtnActive] = useState<boolean>(false)

    useEffect(() => {
        if(stocks__Counter == 0){
            stocks__setLBtnActive(false)
        } else {
            stocks__setLBtnActive(true)
        }
        if(stocks__Counter == 4){
            stocks__setRBtnActive(false)
        } else {
            stocks__setRBtnActive(true)
        }
    },[stocks__Counter])
    return(
        <div {...props}>
            <div className={styles.wrapper}>
                <div className={styles.width}>
                    <Banner bannersList={['#E13B3F', '#F8E9A1', '#1D1818', '#C4C4C4']}/>
                    <div className={styles.benefits}>
                        <p className={styles.article}>НАШИ ПРЕИМУЩЕСТВА</p>
                        <div className={styles.benefits__buttons}>
                            <Button type='benefit' pict={<GeoIcon2/>} article='Удобное расположение магазина'/>
                            <Button type='benefit' pict={<TruckIcon/>} article='Быстрая доставка'/>
                            <Button type='benefit' pict={<CheapIcon/>} article='Низкие цены' text="Если найдете дешевле -" text2="сделаем скидку"/>
                            <Button type='benefit' pict={<WarrantyIcon/>} article='Гарантия качества'/>
                        </div>
                    </div>
                    <div className={styles.catalog}>
                        <p className={styles.article}>КАТАЛОГ</p>
                        <div className={styles.catalog__items}>
                            <CatalogItem text="КУХНИ" pict={'./images/Kitchen.svg'}/>
                            <CatalogItem text="ГОСТИННЫЕ" pict={'./images/Living.svg'}/>
                            <CatalogItem text="СПАЛЬНИ" pict={'./images/Bedroom.svg'}/>
                            <CatalogItem text="ПРИХОЖИЕ" pict={'./images/Hallway.svg'}/>
                            <CatalogItem text="ШКАФЫ-КУПЕ" pict={'./images/Wardrobes.svg'}/>
                            <CatalogItem text="ДЕТСКИЕ" pict={'./images/ChildrenRoom.svg'}/>
                            <CatalogItem text="ДИВАНЫ" pict={'./images/Lounge.svg'}/>
                            <CatalogItem text="СТОЛЫ И СТУЛЬЯ" pict={'./images/Tables.svg'}/>
                        </div>
                    </div>
                    <div className={styles.popular}>
                        <p className={styles.article}>ПОПУЛЯРНЫЕ ТОВАРЫ</p>
                        <div className={styles.popular__items}>
                            <Product productName="Мори кровать КРМ 900.1" colors={['#2D2D2D', '#4D511D', '#F3E7C6']} 
                                cost={7169} discount={40} images={['./images/Seabed.svg', './images/DefaultBed.svg', './images/LucidoModule.svg']} 
                                productNumber='01' sizes={{width: '1635 мм', height: '650 мм', depth: '2032 мм'}}/>

                            <Product productName="Гостиная модульная Lucido" colors={['#E13B3F', '#384685', '#F8E9A1']} 
                                cost={7169} images={['./images/LucidoModule.svg', './images/DefaultBed.svg', './images/Seabed.svg']}
                                hit={true} productNumber='02' sizes={{width: '1635 мм', height: '650 мм', depth: '2032 мм'}}/>

                            <Product productName="Ронда КРР1600.1" colors={['#2D2D2D', '#4D511D', '#F3E7C6']} 
                                cost={7169} discount={30} images={['./images/DefaultBed.svg', './images/LucidoModule.svg', './images/Seabed.svg']} 
                                productNumber='03' sizes={{width: '1635 мм', height: '650 мм', depth: '2032 мм'}}/>

                            <Product productName="Гранд шкаф верхний горизонтальный глубокий стекло 500" colors={['#E13B3F', '#384685', '#F8E9A1']} 
                                cost={7169} discount={30} images={['./images/DefaultBed.svg', './images/LucidoModule.svg', './images/Seabed.svg']} 
                                productNumber='04' sizes={{width: '1635 мм', height: '650 мм', depth: '2032 мм'}}/>

                            <Product productName="Гостиная модульная Lucido" colors={['#2D2D2D', '#4D511D', '#F3E7C6']} 
                                cost={7169} images={['./images/LucidoModule.svg', './images/DefaultBed.svg', './images/Seabed.svg']} 
                                hit={true} productNumber='05' sizes={{width: '1635 мм', height: '650 мм', depth: '2032 мм'}}/>

                            <Product productName="Гостиная модульная Lucido" colors={['#E13B3F', '#384685', '#F8E9A1']} 
                                cost={7169} images={['./images/LucidoModule.svg', './images/DefaultBed.svg', './images/Seabed.svg']} 
                                hit={true} productNumber='06' sizes={{width: '1635 мм', height: '650 мм', depth: '2032 мм'}}/>

                            <Product productName="Кухня Лондон модульная " colors={['#2D2D2D', '#4D511D', '#F3E7C6']} 
                                cost={7169} discount={30} images={['./images/DefaultBed.svg', './images/Seabed.svg', './images/LucidoModule.svg']} 
                                hit={true} productNumber='07' sizes={{width: '1635 мм', height: '650 мм', depth: '2032 мм'}}/>
                                
                            <Product productName="Кухня Лондон модульная " colors={['#E13B3F', '#384685', '#F8E9A1']} 
                                cost={7169} discount={30} images={['./images/DefaultBed.svg', './images/Seabed.svg', './images/LucidoModule.svg']} 
                                hit={true} productNumber='08' sizes={{width: '1635 мм', height: '650 мм', depth: '2032 мм'}}/>
                        </div>
                        <div className={cn(styles.popular__additional_items_wrapper, {[styles.popular__additional_items_active]: addItemsActive})}>
                            <div className={styles.popular__additional_items}>
                                <Product productName="Мори кровать КРМ 900.1" colors={['#2D2D2D', '#4D511D', '#F3E7C6']} 
                                    cost={7169} discount={30} images={['./images/Seabed.svg', './images/DefaultBed.svg', './images/LucidoModule.svg']} 
                                    productNumber='09' sizes={{width: '1635 мм', height: '650 мм', depth: '2032 мм'}}/>

                                <Product productName="Гостиная модульная Lucido" colors={['#E13B3F', '#384685', '#F8E9A1']} 
                                    cost={7169} images={['./images/LucidoModule.svg', './images/DefaultBed.svg', './images/Seabed.svg']}
                                    hit={true} productNumber='10' sizes={{width: '1635 мм', height: '650 мм', depth: '2032 мм'}}/>

                                <Product productName="Ронда КРР1600.1" colors={['#2D2D2D', '#4D511D', '#F3E7C6']} 
                                    cost={7169} discount={30} images={['./images/DefaultBed.svg', './images/LucidoModule.svg', './images/Seabed.svg']} 
                                    productNumber='11' sizes={{width: '1635 мм', height: '650 мм', depth: '2032 мм'}}/>

                                <Product productName="Гранд шкаф верхний горизонтальный глубокий стекло 500" colors={['#E13B3F', '#384685', '#F8E9A1']} 
                                    cost={7169} discount={30} images={['./images/DefaultBed.svg', './images/LucidoModule.svg', './images/Seabed.svg']} 
                                    productNumber='12' sizes={{width: '1635 мм', height: '650 мм', depth: '2032 мм'}}/>

                                <Product productName="Гостиная модульная Lucido" colors={['#2D2D2D', '#4D511D', '#F3E7C6']} 
                                    cost={7169} images={['./images/LucidoModule.svg', './images/DefaultBed.svg', './images/Seabed.svg']} 
                                    hit={true} productNumber='13' sizes={{width: '1635 мм', height: '650 мм', depth: '2032 мм'}}/>

                                <Product productName="Гостиная модульная Lucido" colors={['#E13B3F', '#384685', '#F8E9A1']} 
                                    cost={7169} images={['./images/LucidoModule.svg', './images/DefaultBed.svg', './images/Seabed.svg']} 
                                    hit={true} productNumber='14' sizes={{width: '1635 мм', height: '650 мм', depth: '2032 мм'}}/>

                                <Product productName="Кухня Лондон модульная " colors={['#2D2D2D', '#4D511D', '#F3E7C6']} 
                                    cost={7169} discount={30} images={['./images/DefaultBed.svg', './images/Seabed.svg', './images/LucidoModule.svg']} 
                                    hit={true} productNumber='15' sizes={{width: '1635 мм', height: '650 мм', depth: '2032 мм'}}/>
                                    
                                <Product productName="Кухня Лондон модульная " colors={['#E13B3F', '#384685', '#F8E9A1']} 
                                    cost={7169} discount={30} images={['./images/DefaultBed.svg', './images/Seabed.svg', './images/LucidoModule.svg']} 
                                    hit={true} productNumber='16' sizes={{width: '1635 мм', height: '650 мм', depth: '2032 мм'}}/>
                            </div>
                        </div>
                        <button className={styles.popular__additional_items_btn} onClick={() => setAddItemsActive(x => x = !x)}>Показать еще</button>
                    </div>
                    <div className={styles.popCategory}>
                        <p className={styles.article}>ПОПУЛЯРНЫЕ КАТЕГОРИИ</p>
                        <div className={styles.popCategory__items}>
                            <Button type="categoryBtn" text="КУХНИ"/>
                            <Button type="categoryBtn" text="КРОВАТИ"/>
                            <Button type="categoryBtn" text="ГОСТИННЫЕ"/>
                            <Button type="categoryBtn" text="ШКАФ -КУПЕ"/>
                            <Button type="categoryBtn" text="СПАЛЬНИ"/>
                            <Button type="categoryBtn" text="ПРИХОЖИЕ"/>
                            <Button type="categoryBtn" text="ДИВАНЫ"/>
                            <Button type="categoryBtn" text="ДЕТСКИЕ"/>
                            <Button type="categoryBtn" text="СТУЛЬЯ"/>
                            <Button type="categoryBtn" text="СТОЛЫ"/>
                            <Button type="categoryBtn" text="ШКАФ -КУПЕ"/>
                            <Button type="categoryBtn" text="ШКАФ -КУПЕ"/>
                            <Button type="categoryBtn" text="ПРИХОЖИЕ"/>
                            <Button type="categoryBtn" text="ДИВАНЫ"/>
                            <Button type="categoryBtn" text="ГОСТИННЫЕ"/>
                            <Button type="categoryBtn" text="КРОВАТИ"/>
                            <Button type="categoryBtn" text="ГОСТИННЫЕ"/>
                            <Button type="categoryBtn" text="ШКАФ -КУПЕ"/>
                            <Button type="categoryBtn" text="СПАЛЬНИ"/>
                            <Button type="categoryBtn" text="ПРИХОЖИЕ"/>
                            <Button type="categoryBtn" text="ДИВАНЫ"/>
                        </div>
                    </div>
                    <div className={styles.stocks}>
                        <div className={styles.article}>ТОВАРЫ ПО АКЦИИ</div>
                        <div className={styles.stocks__buttons}>
                            <button className={styles.stocks__btn} onClick={() => stocks__setCounter(x => x = x - 1)} disabled={!stocks__LbtnActive}><Arrow2Icon className={cn(styles.stocks__left_arr, {[styles.stocks__arr_active]: stocks__LbtnActive})}/></button>
                            <button className={styles.stocks__btn} onClick={() => stocks__setCounter(x => x = x + 1)} disabled={!stocks__RbtnActive}><Arrow2Icon className={cn(styles.stocks__right_arr, {[styles.stocks__arr_active]: stocks__RbtnActive})}/></button>
                        </div>
                        <div className={styles.stocks__items_wrapper}>
                            <div className={styles.stocks__items} style={{left: `-${100 / 4 * stocks__Counter}%`}}>
                                <Product productName="Мори кровать КРМ 900.1" colors={['#2D2D2D', '#4D511D', '#F3E7C6']} 
                                    cost={7169} discount={40} images={['./images/Seabed.svg', './images/DefaultBed.svg', './images/LucidoModule.svg']} 
                                    productNumber='17' sizes={{width: '1635 мм', height: '650 мм', depth: '2032 мм'}}/>

                                <Product productName="Гостиная модульная Lucido" colors={['#E13B3F', '#384685', '#F8E9A1']} 
                                    cost={7169} images={['./images/LucidoModule.svg', './images/DefaultBed.svg', './images/Seabed.svg']}
                                    discount={30} productNumber='18' sizes={{width: '1635 мм', height: '650 мм', depth: '2032 мм'}}/>

                                <Product productName="Ронда КРР1600.1" colors={['#2D2D2D', '#4D511D', '#F3E7C6']} 
                                    cost={7169} discount={20} images={['./images/DefaultBed.svg', './images/LucidoModule.svg', './images/Seabed.svg']} 
                                    productNumber='19' sizes={{width: '1635 мм', height: '650 мм', depth: '2032 мм'}}/>

                                <Product productName="Гранд шкаф верхний горизонтальный глубокий стекло 500" colors={['#E13B3F', '#384685', '#F8E9A1']} 
                                    cost={7169} discount={50} images={['./images/DefaultBed.svg', './images/LucidoModule.svg', './images/Seabed.svg']} 
                                    productNumber='20' sizes={{width: '1635 мм', height: '650 мм', depth: '2032 мм'}}/>

                                <Product productName="Гостиная модульная Lucido" colors={['#2D2D2D', '#4D511D', '#F3E7C6']} 
                                    cost={7169} images={['./images/LucidoModule.svg', './images/DefaultBed.svg', './images/Seabed.svg']} 
                                    discount={30} productNumber='21' sizes={{width: '1635 мм', height: '650 мм', depth: '2032 мм'}}/>

                                <Product productName="Гостиная модульная Lucido" colors={['#E13B3F', '#384685', '#F8E9A1']} 
                                    cost={7169} images={['./images/LucidoModule.svg', './images/DefaultBed.svg', './images/Seabed.svg']} 
                                    discount={40} productNumber='22' sizes={{width: '1635 мм', height: '650 мм', depth: '2032 мм'}}/>

                                <Product productName="Кухня Лондон модульная " colors={['#2D2D2D', '#4D511D', '#F3E7C6']} 
                                    cost={7169} discount={10} images={['./images/DefaultBed.svg', './images/Seabed.svg', './images/LucidoModule.svg']} 
                                    productNumber='23' sizes={{width: '1635 мм', height: '650 мм', depth: '2032 мм'}}/>
                                    
                                <Product productName="Кухня Лондон модульная " colors={['#E13B3F', '#384685', '#F8E9A1']} 
                                    cost={7169} discount={20} images={['./images/DefaultBed.svg', './images/Seabed.svg', './images/LucidoModule.svg']} 
                                    productNumber='24' sizes={{width: '1635 мм', height: '650 мм', depth: '2032 мм'}}/>
                            </div>
                        </div>
                    </div>
                    <div className={styles.ourWorks}>
                        <div className={styles.article}>НАШИ РАБОТЫ</div>
                        <div className={styles.ourWorks__part1}>
                            <div className={styles.ourWorks__mini1}>
                                <CatalogItem text="КУХНЯ ГЛЕТЧЕР" className={styles.ourWorks__good1} pict={'./images/KitchenGletcher.svg'} width='488px' height='374px'/>
                            </div>
                            <div className={styles.ourWorks__mini2}>
                                <CatalogItem text='ГОСТИННАЯ ДЕНВЕР' pict={'./images/LivingRoomDenver.svg'} width='488px' height="374px"/>
                            </div>
                            <div className={styles.ourWorks__wide}>
                                <CatalogItem text="КУХНЯ АМЕЛИ" pict={'./images/Kitchen_Ameli.svg'} width='1003px' height='430px'/>
                            </div>
                            <div className={styles.ourWorks__long}>
                                <CatalogItem text="КУХНЯ ЛОНДОН" pict={'./images/Kitchen_London.svg'} width='488px' height='833px'/>
                            </div>
                        </div>
                        <div className={styles.ourWorks__part2}>
                            <div className={styles.ourWorks__part2_f}>
                                <img src="./images/OurWorks_Background.svg" className={styles.ourWorks__part2_image}/>
                                <span className={styles.ourWorks__span_article}>НАШИ КОНТАКТЫ</span>
                                <span className={styles.ourWorks__span1}>Краснодар, Московская 144 корпус -1</span>
                                <button className={styles.ourWorks__span2}>+7 961-525-91-91</button>
                                <button className={styles.ourWorks__btn}>ЗАДАТЬ ВОПРОС</button>
                            </div>
                            <div className={styles.ourWorks__part2_s}>
                            <iframe src="https://yandex.ru/map-widget/v1/?um=constructor%3A82fa087ced7ed0635377d223fb672d5af275daf2c9d490dcb4f035c88591c325&amp;source=constructor" width="808" height="488"></iframe>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}