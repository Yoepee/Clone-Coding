import {Route, Routes} from "react-router-dom"
import LoginPage from "../pages/LoginPage";
import TradeList from "../pages/TradeList"

// 페이지별 기능은 페이지 폴더에 방문하여 확인해주세요.
const Router = () => {
    return  (
        <Routes>
            <Route path="/" element={<TradeList/>}/>
        </Routes>
    )
}

export default Router;