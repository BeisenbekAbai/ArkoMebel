import { Provider, useDispatch } from "react-redux";
import { Layout } from "../Layout/Layout";
import "../styles/globals.css"
import { Store } from "../Store"
import { useEffect } from "react";



const App = (props: { pageProps: { categories: any; }; }) => {
    return(
        <Provider store={Store}>
            <div className="app">
                <Layout datas={{categories: props.pageProps.categories}}/>
            </div>
        </Provider>
    )
}


export default App;