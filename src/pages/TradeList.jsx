// 홈(메인) 페이지 ( 판매글 리스트 ) -예솔

import Trade from "../components/trade/Trade";

const TradeList = () => {
    return  (
        <div>
        <Header head={"home"}/>
            <Trade />
             <Footer foot={0}/>
        </div>
    )
}

export default TradeList;