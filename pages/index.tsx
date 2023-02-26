import { GetStaticProps } from "next";
import { Head } from "next/document";


export const getStaticProps: GetStaticProps = async () => {
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
    return{
        props: {
            categories: data
        }
    }
}



const Home = () => {
    return(
        <Head>
            <link rel="preconnect" href="https://fonts.googleapis.com"/>
            <link rel="preconnect" href="https://fonts.gstatic.com"/>
            <link href="https://fonts.googleapis.com/css2?family=PT+Sans:wght@400;700&display=swap" rel="stylesheet"/>
            <meta name="viewport" content="width=device-width"/>
        </Head>
    )
}


export default Home;