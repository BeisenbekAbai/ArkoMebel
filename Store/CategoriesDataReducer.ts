const defaultState = {
    data: [
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
}

//@ts-ignore
export const CategoriesDataReducer = (state = defaultState, action) => {
    switch(action.type){
        case 'Add_CateData':
            return { data: action.payload }
        default:
            return state 
    }
}