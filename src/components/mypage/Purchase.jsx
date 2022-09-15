import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { __getPurchase } from "../../redux/modules/purchase";
import styled from "styled-components";

const Purchase = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const purchase = useSelector((state) => state?.purchase?.data);

  useEffect(() => {
    dispatch(__getPurchase());
  }, []);

  if (purchase?.data?.length === 0) {
    return (
      <div style={{ textAlign: "center", marginTop: "50%" }}>
        <div>구매 내역이 없어요.</div>
        <div>동네 이웃과 따뜻한 거래를 해보세요.</div>
      </div>
    );
  }

  return (
    <>
      {purchase?.data?.map((buy, i) => {
        return (
          <div key={i} >
            <div
              style={{
                display: "flex",
                flexDirection:"column",
                borderBottom: "2px solid #e0e0e0",
                cursor: "pointer",
                // alignItems: "center",
              }}
             
              onClick={() => {
                navigate(`/tradedetail/${buy.id}`);
              }}
            >
                <div style={{display:"flex"}}>              
                    <img
                height={80}
                width={80}
                src={buy.imgUrl}
                style={{ margin: "10px", borderRadius: "5px" }}
              />
              <div>
                <div
                  style={{
                    display: "flex",
                    flexDirection: "column",
                    marginTop: "10px",
                  }}
                >
                  <div>{buy.title}</div>
                  <div style={{ color: "gray", fontSize: "13px" }}>
                    <div>
                      {buy.address}·{buy.time}
                    </div>
                  </div>

                  <div style={{ display: "flex" }}>
                    <div
                      style={{
                        backgroundColor: "#bdbdbd",
                        color: "white",
                        borderRadius: "5px",
                        padding: "2px",
                      }}
                    >
                      거래완료
                    </div>
                    <div>
                      　
                      {buy.price
                        .toString()
                        .replace(/\B(?=(\d{3})+(?!\d))/g, ",")}
                      원
                    </div>
                  </div>
                </div>
              </div></div>

              <LikeBox>
              {buy.numOfChatroom !== 0 ? <>💬{buy?.numOfChatroom}</> : null}
              {buy.numOfWish !== 0 ? <>🤍{buy?.numOfWish}</> : null}
              {buy.numOfChatroom === 0 && buy.numOfWish === 0 ? (
                <>　</>
              ) : null}
            </LikeBox>
            </div>
            
          </div>
        );
      })}
    </>
  );
};

export default Purchase;
const LikeBox = styled.div`
  grid-area: likeBox;
  width: 100%;
  display: flex;
  float: right;
  margin-right: 10px;
  justify-content: flex-end;
`;
