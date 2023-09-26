import '../shared/styles/_boilerplate.scss'
import {Provider} from "react-redux";
import {AppStore} from "./app-store.ts";
import {Router} from "./app-router.tsx";


function App() {
    return (
        <Provider store={AppStore}>
            <Router/>
        </Provider>
    )
}


export default App