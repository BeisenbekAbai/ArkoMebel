import { CategoriesDataReducer } from './CategoriesDataReducer';
import { LikedItemsReducer } from './LikedItemsReducer';
import { openedProductReducer } from './OpenedProductReducer';
import { SavedCategoryReducer } from './SavedCategoryReducer';
import { combineReducers, legacy_createStore as createStore} from 'redux'
import { SearchReducer } from './SearchReducer'
import { CategoryActiveReducer } from './CategoryActiveReducer'



export const rootReducer = combineReducers({
    search: SearchReducer,
    savedCategory: SavedCategoryReducer,
    openedProduct: openedProductReducer,
    LikedItems: LikedItemsReducer,
    CategoryData: CategoriesDataReducer,
    CategoryActive: CategoryActiveReducer
})

export const Store = createStore(rootReducer)